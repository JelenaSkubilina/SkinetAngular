using Core.Entities.Identity;
using StackExchange.Redis;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
//services.AddDbContext<StoreContext>(x =>
//           x.UseSqlServer(Configuration.GetConnectionString("DefaultConnection"), b => b.MigrationsAssembly("Infrastructure")));
//services.AddDbContext<AppIdentityDbContext>(x =>
//            x.UseSqlServer(Configuration.GetConnectionString("IdentityConnection"), b => b.MigrationsAssembly("Infrastructure")));

builder.Services.AddDbContext<StoreContext>(x =>
           x.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection"), b => b.MigrationsAssembly("Infrastructure")));
builder.Services.AddDbContext<AppIdentityDbContext>(x =>
            x.UseNpgsql(builder.Configuration.GetConnectionString("IdentityConnection"), b => b.MigrationsAssembly("Infrastructure")));

builder.Services.AddSingleton<IConnectionMultiplexer>(c =>
{
    var configuration = ConfigurationOptions.Parse(builder.Configuration.GetConnectionString("Redis"), true);
    return ConnectionMultiplexer.Connect(configuration);
});

builder.Services.AddAutoMapper(typeof(MappingProfiles));
builder.Services.AddApplicationServices();
builder.Services.AddIdentityServices(builder.Configuration);
builder.Services.AddSwaggerDocumentation();

// services.AddControllersWithViews();
// In production, the Angular files will be served from this directory
builder.Services.AddSpaStaticFiles(configuration =>
{
    configuration.RootPath = "ClientApp/dist";
});

//configure the http request pipeline

var app = builder.Build();

app.UseMiddleware<ExceptionMiddleware>();

app.UseSwaggerDocumentation();

app.UseStatusCodePagesWithReExecute("/errors/{0}");

app.UseStaticFiles();
app.UseStaticFiles(new StaticFileOptions
{
    FileProvider = new PhysicalFileProvider(
        Path.Combine(Directory.GetCurrentDirectory(), "Content")
        ),
    RequestPath = "/content"
});

app.UseCors("CorsPolicy");

app.UseAuthentication();
app.UseAuthorization();

app.UseSwaggerDocumentation();

app.MapControllers();
    //  endpoints.MapFallbackToController("Index", "Fallback");
    //endpoints.MapControllerRoute(
    //    name: "default",
    //    pattern: "{controller}/{action=Index}/{id?}");

app.UseSpa(spa =>
{
    spa.Options.SourcePath = "ClientApp";

    if (builder.Environment.EnvironmentName.Contains("development"))
    {
        spa.UseAngularCliServer(npmScript: "start");
    }
});

using var scope = app.Services.CreateScope();
var services = scope.ServiceProvider;
var loggerFactory = services.GetRequiredService<ILoggerFactory>();
try
{
    var context = services.GetRequiredService<StoreContext>();
    await context.Database.MigrateAsync();
    await StoreContextSeed.SeedAsync(context, loggerFactory);

    var userManager = services.GetRequiredService<UserManager<AppUser>>();
    var identityContext = services.GetRequiredService<AppIdentityDbContext>();
    await identityContext.Database.MigrateAsync();
    await AppIdentityDbContextSeed.SeedUserAsync(userManager);
}
catch (Exception ex)
{
    var logger = loggerFactory.CreateLogger<Program>();
    logger.LogError(ex, "An error occurred during migration");
}

await app.RunAsync();

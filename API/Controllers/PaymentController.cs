using API.Errors;
using Core.Entities;
using Core.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Stripe;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace API.Controllers
{
    public class PaymentController : BaseApiController
    {
        private readonly IPaymentService paymentService;
        private readonly ILogger<PaymentController> logger;
        private const string WhSecret = "whsec_60df50c6d0d40b116fb22764e394bc975a29c8262c2c283bb174060e01577886";

        public PaymentController(IPaymentService paymentService,
            ILogger<PaymentController> logger)
        {
            this.paymentService = paymentService;
            this.logger = logger;
        }

        [Authorize]
        [HttpPost("{basketId}")]
        public async Task<ActionResult<CustomerBasket>> CreateOrUpdatePaymentIntent(string basketId)
        {
            var basket = await paymentService.CreateOrUpdatePaymentIntent(basketId);

            if (basket == null) return BadRequest(new ApiResponse(400, "Problem with your basket"));

            return basket;
        }

        [HttpPost("webhook")]
        public async Task<ActionResult> StripeWebhook()
        {
            var json = await new StreamReader(HttpContext.Request.Body).ReadToEndAsync();
            var stripeEvent = EventUtility.ConstructEvent(json, Request.Headers["Stripe-Signature"], WhSecret);

            PaymentIntent intent;
            Core.Entities.OrderAggregate.Order order;

            switch(stripeEvent.Type)
            {
                case "payment_intent.succeeed":
                    intent = (PaymentIntent)stripeEvent.Data.Object;
                    logger.LogInformation("Payment Successed: ", intent.Id);
                    order = await paymentService.UpdateOrderPaymentSucceeded(intent.Id);
                    logger.LogInformation("Order updated to payment received: ", order.Id);
                    break;
                case "payment_intent.payment_failed":
                    intent = (PaymentIntent)stripeEvent.Data.Object;
                    logger.LogInformation("Payment failed: ", intent.Id);
                    order = await paymentService.UpdateOrderPaymentFailed(intent.Id);
                    logger.LogInformation("Order updated to payment failed: ", order.Id);
                    break;
            }

            return new EmptyResult();
        }
    }
}

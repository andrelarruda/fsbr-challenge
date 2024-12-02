using FluentValidation;
using WebApi_Identity_Auth.Models;

namespace WebApi_Identity_Auth.Validation
{
    public class ProductValidator : AbstractValidator<CreateProductInputModel>
    {
        public ProductValidator()
        {
            RuleFor(product => product.Name).NotEmpty();
            RuleFor(product => product.Description).NotEmpty();
            RuleFor(product => product.Price).GreaterThan(0.0).NotEmpty();
            RuleFor(product => product.StockQuantity).GreaterThanOrEqualTo(0).NotEmpty();
            RuleFor(product => product.CategoryId).NotEmpty();

        }
    }
}

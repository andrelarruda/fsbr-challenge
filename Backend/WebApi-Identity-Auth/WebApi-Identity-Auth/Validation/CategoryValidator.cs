using FluentValidation;
using WebApi_Identity_Auth.Models;

namespace WebApi_Identity_Auth.Validation
{
    public class CategoryValidator : AbstractValidator<CreateCategoryInputModel>
    {
        public CategoryValidator() { 
            RuleFor(category => category.Name).MinimumLength(4).NotEmpty();
            RuleFor(category => category.Description).NotEmpty();
        }
    }
}

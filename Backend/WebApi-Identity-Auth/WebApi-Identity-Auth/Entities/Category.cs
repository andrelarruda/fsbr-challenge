using WebApi_Identity_Auth.Models;

namespace WebApi_Identity_Auth.Entities
{
    public class Category : BaseEntity
    {
        public string Name { get; private set; }
        public string Description { get; private set; }
        public List<Product> Products { get; private set; } = [];

        public void Update(UpdateCategoryInputModel inputModel)
        {
            Name = inputModel.Name;
            Description = inputModel.Description;
        }
    }
}

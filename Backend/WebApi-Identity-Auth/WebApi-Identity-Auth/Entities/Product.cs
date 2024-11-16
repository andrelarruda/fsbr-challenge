using WebApi_Identity_Auth.Models;

namespace WebApi_Identity_Auth.Entities
{
    public class Product : BaseEntity
    {
        public string Name { get; private set; }
        public string Description { get; private set; }
        public double Price { get; private set; }
        public int StockQuantity { get; private set; }
        public int CategoryId { get; private set; }
        public Category Category { get; private set; }

        public void Update(UpdateProductInputModel model)
        {
            Name = model.Name;
            Description = model.Description;
            Price = model.Price;
            StockQuantity = model.StockQuantity;
            CategoryId = model.CategoryId;
        }

    }
}

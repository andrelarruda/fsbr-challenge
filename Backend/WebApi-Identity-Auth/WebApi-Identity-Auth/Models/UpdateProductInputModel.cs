namespace WebApi_Identity_Auth.Models
{
    public class UpdateProductInputModel
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public double Price { get; set; }
        public int StockQuantity { get; set; }
        public int CategoryId { get; set; }

    }
}

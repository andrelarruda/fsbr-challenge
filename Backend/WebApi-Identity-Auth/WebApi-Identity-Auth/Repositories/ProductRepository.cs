using Microsoft.EntityFrameworkCore;
using WebApi_Identity_Auth.Database.Persistence;
using WebApi_Identity_Auth.Entities;

namespace WebApi_Identity_Auth.Repositories
{
    public class ProductRepository : IRepository<Product>
    {
        private readonly AppDbContext _context;
        public ProductRepository(AppDbContext context) {
            _context = context;
        }

        public async Task<List<Product>> GetAllAsync()
        {
            return await _context.Products.Include(p => p.Category).ToListAsync();
        }

        public async Task<Product?> GetByIdAsync(int id)
        {
            return await _context.Products
                .Include(p => p.Category)
                .SingleOrDefaultAsync(p => p.Id == id);
        }

        public async Task<Product> Save(Product entity)
        {
            var result = await _context.Products.AddAsync(entity);
            await _context.SaveChangesAsync();
            return result.Entity;
        }

        public async Task Update(Product entity)
        {
            _context.Products.Update(entity);
            await _context.SaveChangesAsync();
        }
        public async Task DeleteByIdAsync(int id)
        {
            await _context.Products.Where(p => p.Id == id).ExecuteDeleteAsync();
            await _context.SaveChangesAsync();
        }
    }
}

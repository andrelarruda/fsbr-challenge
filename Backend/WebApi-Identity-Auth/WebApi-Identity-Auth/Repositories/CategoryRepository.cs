using Microsoft.EntityFrameworkCore;
using WebApi_Identity_Auth.Database.Persistence;
using WebApi_Identity_Auth.Entities;

namespace WebApi_Identity_Auth.Repositories
{
    public class CategoryRepository : IRepository<Category>
    {
        private readonly AppDbContext _context;

        public CategoryRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task<List<Category>> GetAllAsync()
        {
            return await _context.Categories.ToListAsync();
        }

        public async Task<Category?> GetByIdAsync(int id)
        {
            return await _context.Categories
                .SingleOrDefaultAsync(c => c.Id == id);
        }

        public async Task<Category> Save(Category entity)
        {
            var result = await _context.Categories.AddAsync(entity);
            await _context.SaveChangesAsync();
            return result.Entity;
        }

        public async Task Update(Category entity)
        {
            _context.Categories.Update(entity);
            await _context.SaveChangesAsync();
        }
        public async Task DeleteByIdAsync(int id)
        {
            await _context.Categories.Where(c => c.Id == id).ExecuteDeleteAsync();
            await _context.SaveChangesAsync();
        }
    }
}

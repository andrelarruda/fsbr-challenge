using WebApi_Identity_Auth.Entities;

namespace WebApi_Identity_Auth.Repositories
{
    public interface IRepository<T>
    {
        public Task<T?> GetByIdAsync(int id);
        public Task<List<T>> GetAllAsync();
        public Task<T> Save(T entity);
        public Task DeleteByIdAsync(int id);
        public Task Update(T entity);
    }
}

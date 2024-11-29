using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using WebApi_Identity_Auth.Entities;

namespace WebApi_Identity_Auth.Database.Persistence
{
    public class AppDbContext : IdentityDbContext<User>
    {

        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {

        }

        public DbSet<Product> Products { get; set; }
        public DbSet<Category> Categories { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<User>(u =>
            {
                u.Property(us => us.UserName).IsRequired(true);
                u.Property(us => us.Email).IsRequired(true);
                u.Property(us => us.BirthDate);
            });

            builder.HasDefaultSchema("identity");

            builder.Entity<Product>(e =>
            {
                e.HasKey(p => p.Id);

                e.HasOne(p => p.Category)
                    .WithMany(c => c.Products)
                    .HasForeignKey(p => p.CategoryId)
                    .OnDelete(DeleteBehavior.Restrict);
            });

            builder.Entity<Category>(e => e.HasKey(c => c.Id));
            
        }
    }
}

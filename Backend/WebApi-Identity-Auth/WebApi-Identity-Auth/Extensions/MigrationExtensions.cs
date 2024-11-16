using Microsoft.EntityFrameworkCore;
using WebApi_Identity_Auth.Database.Persistence;

namespace WebApi_Identity_Auth.Extensions
{
    public static class MigrationExtensions
    {

        public static void ApplyMigrations(this IApplicationBuilder app)
        {
            using IServiceScope scope = app.ApplicationServices.CreateScope();

            using AppDbContext context = scope.ServiceProvider.GetRequiredService<AppDbContext>();

            context.Database.Migrate();
        }
    }
}

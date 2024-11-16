using AutoMapper;
using WebApi_Identity_Auth.Entities;
using WebApi_Identity_Auth.Models;

namespace WebApi_Identity_Auth.Configurations
{
    public class MapperConfig : Profile
    {

        public MapperConfig() {
            CreateMap<Product, ProductOutputModel>()
                .ForMember(dest => dest.Category, opt => opt.MapFrom((src, dest) => src.Category.Name))
                .ReverseMap();

            CreateMap<CreateProductInputModel, Product>()
                .ReverseMap();

            CreateMap<CategoryOutputModel, Category>()
                .ForMember(dest => dest.Products, opt => opt.Ignore())
                .ReverseMap();

            CreateMap<CreateCategoryInputModel, Category>()
                .ForMember(dest => dest.Products, opt => opt.Ignore())
                .ReverseMap();

            CreateMap<UpdateProductInputModel, Product>()
                .ReverseMap();
        }

    }
}

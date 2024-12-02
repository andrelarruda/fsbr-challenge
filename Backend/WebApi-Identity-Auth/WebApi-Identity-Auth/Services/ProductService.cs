using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using WebApi_Identity_Auth.Entities;
using WebApi_Identity_Auth.Models;
using WebApi_Identity_Auth.Repositories;
using WebApi_Identity_Auth.Validation;
using FluentValidation.Results;

namespace WebApi_Identity_Auth.Services
{
    public class ProductService
    {
        private readonly IRepository<Product> _repository;
        private readonly IMapper _mapper;
        private readonly CategoryService _categoryService;

        public ProductService(IRepository<Product> productRepository, IMapper mapper, CategoryService categoryService)
        {
            _repository = productRepository;
            _mapper = mapper;
            _categoryService = categoryService;
        }

        public async Task<ProductOutputModel> GetById(int id)
        {
            var product = await _repository.GetByIdAsync(id);
            if (product is null)
            {
                throw new KeyNotFoundException("Product not found.");
            }
            return _mapper.Map<ProductOutputModel>(product);
        }

        public async Task<List<ProductOutputModel>> GetAll()
        {
            try
            {
                var products = await _repository.GetAllAsync();
                return _mapper.Map<List<ProductOutputModel>>(products);
            }
            catch (Exception ex)
            {
                throw new Exception($"Something went wrong while trying to get all products: {ex.Message}");
            }
        }

        public async Task<Product> Save(CreateProductInputModel inputModel)
        {
            ProductValidator validator = new ProductValidator();
            ValidationResult results = validator.Validate(inputModel);
            if (!results.IsValid)
            {
                results.Errors.ForEach(failure => Console.WriteLine($"Property {failure.PropertyName} failed validation. Error was {failure.ErrorMessage}"));
                throw new Exception("Erro de validação.");
            }

            var category = await _categoryService.GetById(inputModel.CategoryId);
            if (category is null) {
                throw new KeyNotFoundException("Category not found.");
            }

            return await _repository.Save(_mapper.Map<Product>(inputModel));
        }

        public async Task Update(int id, UpdateProductInputModel inputModel)
        {
            var product = await _repository.GetByIdAsync(id);
            if (product is null)
            {
                throw new KeyNotFoundException("Product not found with specified Id.");
            }

            _ = await _categoryService.GetById(inputModel.CategoryId); // validates category
            product.Update(inputModel);

            await _repository.Update(product);
        }

        public async Task Delete(int id)
        {
            var product = await _repository.GetByIdAsync(id);
            if (product is null)
            {
                throw new KeyNotFoundException("Product not found.");
            }

            await _repository.DeleteByIdAsync(id);
        }
    }
}

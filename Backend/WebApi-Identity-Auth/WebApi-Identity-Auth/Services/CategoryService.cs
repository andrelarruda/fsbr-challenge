using AutoMapper;
using WebApi_Identity_Auth.Entities;
using WebApi_Identity_Auth.Models;
using WebApi_Identity_Auth.Repositories;
using FluentValidation.Results;
using WebApi_Identity_Auth.Validation;

namespace WebApi_Identity_Auth.Services
{
    public class CategoryService
    {
        private readonly IRepository<Category> _repository;
        private readonly IMapper _mapper;

        public CategoryService(IRepository<Category> repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        public async Task<CategoryOutputModel> GetById(int id)
        {
            var category = await _repository.GetByIdAsync(id);
            if (category is null)
            {
                throw new KeyNotFoundException("Category not found.");
            }
            return _mapper.Map<CategoryOutputModel>(category);
        }

        public async Task<Category> Save(CreateCategoryInputModel inputModel)
        {
            CategoryValidator validator = new CategoryValidator();
            ValidationResult results = validator.Validate(inputModel);
            if (!results.IsValid)
            {
                results.Errors.ForEach(failure => Console.WriteLine($"Property {failure.PropertyName} failed validation. Error was {failure.ErrorMessage}"));
                throw new Exception("Erro de validação.");
            }
            var iModel = _mapper.Map<Category>(inputModel);
            return await _repository.Save(iModel);
        }

        public async Task<List<CategoryOutputModel>> GetAll()
        {
            try
            {
                var categories = await _repository.GetAllAsync();
                return _mapper.Map<List<CategoryOutputModel>>(categories);
            }
            catch (Exception ex)
            {
                throw new Exception($"Something went wrong while trying to get all categories: {ex.Message}");
            }
        }

        public async Task Update(int id, UpdateCategoryInputModel inputModel)
        {
            var category = await _repository.GetByIdAsync(id);
            if (category is null)
            {
                throw new KeyNotFoundException("Category not found with provided Id.");
            }
            category.Update(inputModel);

            await _repository.Update(category);
        }

        public async Task Delete(int id)
        {
            var category = await _repository.GetByIdAsync(id);
            if (category is null)
            {
                throw new KeyNotFoundException("Category not found with provided Id.");
            }

            await _repository.DeleteByIdAsync(id);
        }
    }
}

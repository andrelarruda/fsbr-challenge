using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApi_Identity_Auth.Entities;
using WebApi_Identity_Auth.Models;
using WebApi_Identity_Auth.Services;

namespace WebApi_Identity_Auth.Controllers
{
    [Route("api/categories")]
    [ApiController]
    //[Authorize]
    public class CategoryController : ControllerBase
    {

        private readonly CategoryService _categoryService;

        public CategoryController(CategoryService categoryService)
        {
            _categoryService = categoryService;
        }

        // GET api/categories
        [HttpGet]
        public async Task<ActionResult<List<CategoryOutputModel>>> Get()
        {
            try
            {
                var categories = await _categoryService.GetAll();
                return Ok(categories);
            }
            catch (Exception ex) { 
                return Problem(ex.Message);
            }
        }

        // GET api/categories/xxx
        [HttpGet("{id}")]
        public async Task<ActionResult<CategoryOutputModel>> GetById(int id)
        {
            try
            {
                return Ok(await _categoryService.GetById(id));
            }
            catch (KeyNotFoundException ex)
            {
                return NotFound(ex.Message);
            }
            catch (Exception ex) { 
                return Problem(ex.Message);
            }
        }


        // POST api/categories
        [HttpPost]
        public async Task<IActionResult> Post(CreateCategoryInputModel model)
        {
            try
            {
                Category category = await _categoryService.Save(model);
                return CreatedAtAction(nameof(GetById), new { id = category.Id }, model);
            } catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // PUT api/categories
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, UpdateCategoryInputModel model)
        {
            try
            {
                await _categoryService.Update(id, model);
                return NoContent();
            }
            catch (KeyNotFoundException ex)
            {
                return NotFound(ex.Message);
            }
            catch (Exception ex)
            {
                return Problem(ex.Message);
            }
        }


        // DELETE api/categories/xxx
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                await _categoryService.Delete(id);
                return NoContent();
            }
            catch (KeyNotFoundException ex)
            {
                return NotFound(ex.Message);
            }
            catch (Exception ex)
            {
                return Problem(ex.Message);
            }
        }
    }
}

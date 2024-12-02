using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using WebApi_Identity_Auth.Entities;
using WebApi_Identity_Auth.Models;
using WebApi_Identity_Auth.Services;

namespace WebApi_Identity_Auth.Controllers
{
    [Route("api/products")]
    [ApiController]
    //[Authorize]
    public class ProductController : ControllerBase
    {
        private readonly ProductService _productService;
        public ProductController(ProductService productService) {
            _productService = productService;
        }

        // GET api/products
        [HttpGet]
        public async Task<ActionResult<List<ProductOutputModel>>> Get()
        {
            // TODO: Add pagination
            try
            {
                var products = await _productService.GetAll();
                return Ok(products);
            }
            catch (Exception ex)
            {
                return Problem(ex.Message);
            }
        }

        // GET api/products/xxx
        [HttpGet("{id}")]
        public async Task<ActionResult<ProductOutputModel>> GetById(int id) {
            try
            {
                ProductOutputModel result = await _productService.GetById(id);
                return Ok(result);
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

        // POST api/products
        [HttpPost]
        public async Task<ActionResult> Post(CreateProductInputModel model)
        {
            try
            {
                Product product = await _productService.Save(model);
                return CreatedAtAction(nameof(GetById), new { id = product.Id }, model);
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

        // PUT api/products/xxx
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, UpdateProductInputModel model)
        {
            try
            {
                await _productService.Update(id, model);
                return NoContent();
            }
            catch (KeyNotFoundException ex)
            {
                return NotFound(ex.Message);
            }
            catch (Exception ex) { 
                return Problem(ex.Message);
            }
        }

        // DELETE api/products/xxx
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                await _productService.Delete(id);
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

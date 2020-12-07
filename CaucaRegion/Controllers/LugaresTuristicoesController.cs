using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CaucaRegion.Models;

namespace CaucaRegion.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LugaresTuristicoesController : ControllerBase
    {
        private readonly gestion_itemsContext _context;

        public LugaresTuristicoesController(gestion_itemsContext context)
        {
            _context = context;
        }

        // GET: api/LugaresTuristicoes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<LugaresTuristico>>> GetLugaresTuristicos()
        {
            return await _context.LugaresTuristicos.ToListAsync();
        }

        // GET: api/LugaresTuristicoes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<LugaresTuristico>> GetLugaresTuristico(string id)
        {
            var lugaresTuristico = await _context.LugaresTuristicos.FindAsync(id);

            if (lugaresTuristico == null)
            {
                return NotFound();
            }

            return lugaresTuristico;
        }

        // PUT: api/LugaresTuristicoes/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutLugaresTuristico(string id, LugaresTuristico lugaresTuristico)
        {
            if (id != lugaresTuristico.Nombre)
            {
                return BadRequest();
            }

            _context.Entry(lugaresTuristico).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LugaresTuristicoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/LugaresTuristicoes
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<LugaresTuristico>> PostLugaresTuristico(LugaresTuristico lugaresTuristico)
        {
            _context.LugaresTuristicos.Add(lugaresTuristico);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (LugaresTuristicoExists(lugaresTuristico.Nombre))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetLugaresTuristico", new { id = lugaresTuristico.Nombre }, lugaresTuristico);
        }

        // DELETE: api/LugaresTuristicoes/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<LugaresTuristico>> DeleteLugaresTuristico(string id)
        {
            var lugaresTuristico = await _context.LugaresTuristicos.FindAsync(id);
            if (lugaresTuristico == null)
            {
                return NotFound();
            }

            _context.LugaresTuristicos.Remove(lugaresTuristico);
            await _context.SaveChangesAsync();

            return lugaresTuristico;
        }

        private bool LugaresTuristicoExists(string id)
        {
            return _context.LugaresTuristicos.Any(e => e.Nombre == id);
        }
    }
}

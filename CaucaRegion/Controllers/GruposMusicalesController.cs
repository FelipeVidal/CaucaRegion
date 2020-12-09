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
    public class GruposMusicalesController : ControllerBase
    {
        private readonly gestion_itemsContext _context;

        public GruposMusicalesController(gestion_itemsContext context)
        {
            _context = context;
        }

        // GET: api/GruposMusicales
        [HttpGet]
        public async Task<ActionResult<IEnumerable<GruposMusicale>>> GetGruposMusicales()
        {
            return await _context.GruposMusicales.ToListAsync();
        }

        // GET: api/GruposMusicales/5
        [HttpGet("{id}")]
        public async Task<ActionResult<GruposMusicale>> GetGruposMusicale(string id)
        {
            var gruposMusicale = await _context.GruposMusicales.FindAsync(id);

            if (gruposMusicale == null)
            {
                return NotFound();
            }

            return gruposMusicale;
        }

        // PUT: api/GruposMusicales/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutGruposMusicale(string id, GruposMusicale gruposMusicale)
        {
            if (id != gruposMusicale.Nombre)
            {
                return BadRequest();
            }

            _context.Entry(gruposMusicale).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!GruposMusicaleExists(id))
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

        // POST: api/GruposMusicales
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<GruposMusicale>> PostGruposMusicale(GruposMusicale gruposMusicale)
        {
            _context.GruposMusicales.Add(gruposMusicale);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (GruposMusicaleExists(gruposMusicale.Nombre))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetGruposMusicale", new { id = gruposMusicale.Nombre }, gruposMusicale);
        }

        // DELETE: api/GruposMusicales/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<GruposMusicale>> DeleteGruposMusicale(string id)
        {
            var gruposMusicale = await _context.GruposMusicales.FindAsync(id);
            if (gruposMusicale == null)
            {
                return NotFound();
            }

            _context.GruposMusicales.Remove(gruposMusicale);
            await _context.SaveChangesAsync();

            return gruposMusicale;
        }

        private bool GruposMusicaleExists(string id)
        {
            return _context.GruposMusicales.Any(e => e.Nombre == id);
        }
    }
}

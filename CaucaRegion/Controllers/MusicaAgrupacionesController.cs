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
    public class MusicaAgrupacionesController : ControllerBase
    {
        private readonly CaucaRegionBDContext _context;

        public MusicaAgrupacionesController(CaucaRegionBDContext context)
        {
            _context = context;
        }

        // GET: api/MusicaAgrupaciones
        [HttpGet]
        public async Task<ActionResult<IEnumerable<MusicaAgrupacione>>> GetMusicaAgrupaciones()
        {
            return await _context.MusicaAgrupaciones.ToListAsync();
        }

        // GET: api/MusicaAgrupaciones/5
        [HttpGet("{id}")]
        public async Task<ActionResult<MusicaAgrupacione>> GetMusicaAgrupacione(decimal id)
        {
            var musicaAgrupacione = await _context.MusicaAgrupaciones.FindAsync(id);

            if (musicaAgrupacione == null)
            {
                return NotFound();
            }

            return musicaAgrupacione;
        }

        // PUT: api/MusicaAgrupaciones/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMusicaAgrupacione(decimal id, MusicaAgrupacione musicaAgrupacione)
        {
            if (id != musicaAgrupacione.MusicaId)
            {
                return BadRequest();
            }

            _context.Entry(musicaAgrupacione).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MusicaAgrupacioneExists(id))
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

        // POST: api/MusicaAgrupaciones
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<MusicaAgrupacione>> PostMusicaAgrupacione(MusicaAgrupacione musicaAgrupacione)
        {
            _context.MusicaAgrupaciones.Add(musicaAgrupacione);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (MusicaAgrupacioneExists(musicaAgrupacione.MusicaId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetMusicaAgrupacione", new { id = musicaAgrupacione.MusicaId }, musicaAgrupacione);
        }

        // DELETE: api/MusicaAgrupaciones/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<MusicaAgrupacione>> DeleteMusicaAgrupacione(decimal id)
        {
            var musicaAgrupacione = await _context.MusicaAgrupaciones.FindAsync(id);
            if (musicaAgrupacione == null)
            {
                return NotFound();
            }

            _context.MusicaAgrupaciones.Remove(musicaAgrupacione);
            await _context.SaveChangesAsync();

            return musicaAgrupacione;
        }

        private bool MusicaAgrupacioneExists(decimal id)
        {
            return _context.MusicaAgrupaciones.Any(e => e.MusicaId == id);
        }
    }
}

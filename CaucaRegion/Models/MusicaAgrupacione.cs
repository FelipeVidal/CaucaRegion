using System;
using System.Collections.Generic;

#nullable disable

namespace CaucaRegion.Models
{
    public partial class MusicaAgrupacione
    {
        public decimal MusicaId { get; set; }
        public string Nombre { get; set; }
        public string Instrumentos { get; set; }
        public string Canal { get; set; }
        public string Imagen { get; set; }
    }
}

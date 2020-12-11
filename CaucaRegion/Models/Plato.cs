using System;
using System.Collections.Generic;

#nullable disable

namespace CaucaRegion.Models
{
    public partial class Plato
    {
        public decimal PlatosId { get; set; }
        public string Nombre { get; set; }
        public string Ingredientes { get; set; }
        public Double Precio { get; set; }
        public string Imagen { get; set; }
    }
}

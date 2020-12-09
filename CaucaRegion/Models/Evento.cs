using System;
using System.Collections.Generic;

#nullable disable

namespace CaucaRegion.Models
{
    public partial class Evento
    {
        public decimal EventosId { get; set; }
        public string Nombre { get; set; }
        public string Lugar { get; set; }
        public double? Entrada { get; set; }
    }
}

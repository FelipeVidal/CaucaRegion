using System;
using System.Collections.Generic;

#nullable disable

namespace CaucaRegion.Models
{
    public partial class LugaresTuristico
    {
        public string Nombre { get; set; }
        public byte[] Imagen { get; set; }
        public string Ubicacion { get; set; }
        public string Entrada { get; set; }
    }
}

using System;
using System.Collections.Generic;

#nullable disable

namespace CaucaRegion.Models
{
    public partial class GruposMusicale
    {
        public string Nombre { get; set; }
        public byte[] Imagen { get; set; }
        public string Instrumentos { get; set; }
        public string Canal { get; set; }
    }
}

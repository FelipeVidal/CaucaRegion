﻿using System;
using System.Collections.Generic;

#nullable disable

namespace CaucaRegion.Models
{
    public partial class Evento
    {
        public decimal EventosId { get; set; }
        public string Nombre { get; set; }
        public string Lugar { get; set; }
        public Double Entrada { get; set; }
        public string Imagen { get; set; }
    }
}

using System;
using System.Collections.Generic;

#nullable disable

namespace CaucaRegion.Models
{
    public partial class Usuario
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public string Usuario1 { get; set; }
        public string Contrasena { get; set; }
        public string Administrador { get; set; }
    }
}

using System;
using Entity;

namespace Domain.DTOs
{
    public class SuscripcionResponseDto
    {
        public DateTime Inicio { get; set; }
        public DateTime Vencimiento { get; set; }
        public Clase Clase { get; set; }
        public Academia Academia { get; set; }

    }
}
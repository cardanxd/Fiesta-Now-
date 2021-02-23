using System;

namespace  Domain.DTOs
{
    public class SuscripcionRequestDto
    {   
        public DateTime Inicio { get; set; }
        public DateTime Vencimiento { get; set; }
        public string Detalles { get; set; }
        public int EstudianteId { get; set; }
    }
}
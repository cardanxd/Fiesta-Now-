using System;

namespace  Domain.DTOs
{
    public class SuscripcionResponseDto
    {
        public int Id { get; set; }  
        public DateTime Inicio { get; set; }
        public DateTime Vencimiento { get; set; }
        public string Detalles { get; set; }
        public int EstudianteId { get; set; }
    }
}
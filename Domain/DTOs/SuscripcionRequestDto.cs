using System;

namespace Domain.DTOs
{
    public class SuscripcionRequestDto
    {
        public DateTime Inicio { get; set; }
        public DateTime Vencimiento { get; set; }
        public int ClaseId { get; set; }
        public int CuentaId { get; set; }
    }
}
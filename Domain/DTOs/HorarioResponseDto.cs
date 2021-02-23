using System;

namespace Domain.DTOs
{
    public class HorarioResponseDto
    {
        public int Id { get; set; }
        public DateTime Apertura { get; set; }
        public DateTime Cierre { get; set; }
        public string Dia { get; set; }
        public int ClaseId { get; set; }
    }
}
using System;

namespace Entity
{
    public class Suscripcion : BaseEntity
    {

        public DateTime Inicio { get; set; }
        public DateTime Vencimiento { get; set; }
        public string Detalles { get; set; }
        public int EstudianteId { get; set; }
        public Estudiante Estudiante { get; set; }

    }
}

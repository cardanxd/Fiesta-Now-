using System;
using System.Collections.Generic;
using System.Text;

namespace Entity
{
    public class Clase : BaseEntity
    {
        public string Nombre{ get; set; }
        public int AlumnosMax { get; set; }
        public int AcademiaId { get; set; }
        public Academia Academia { get; set; }
        public int CodigoBaileID { get; set; }
        public CodigoBaile CodigoBaile { get; set; }
        public ICollection<Horario> Horarios { get; set; }
        public ICollection<Clase_Suscripciones> Clase_Suscripciones;
    }
}

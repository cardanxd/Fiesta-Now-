using System;
using System.Collections.Generic;
using System.Text;
using Domain.Entities;

namespace Entity
{
    public class Suscripcion : BaseEntity
    {

        public DateTime Inicio { get; set; }
        public DateTime Vencimiento { get; set; }
        public int CuentaId { get; set; }
        public Cuenta Cuenta { get; set; }
        public ICollection<Clase_Suscripciones> Clase_Suscripciones;
    }
}

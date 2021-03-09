using System;
using System.Collections.Generic;
using System.Text;
using Domain.Entities;

namespace Entity
{
    public partial class Academia : BaseEntity
    {

        public string Nombre { get; set; }
        public string Numero { get; set; }
        public string Descripcion { get; set; }
        public double Longitud { get; set; }
        public double Latitud { get; set; }
        public string Logo { get; set; }
        public string Direction { get; set; }
        public int CuentaID { get; set; }
        public Cuenta cuenta { get; set; }
        public ICollection<Clase> Clases { get; set; }
        public ICollection<CodigoBaile_Academias> CodigoBaile_Academia;
    }
}

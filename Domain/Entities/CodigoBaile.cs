using System;
using System.Collections.Generic;
using System.Text;
using Domain.Entities;

namespace Entity
{
    public class CodigoBaile : BaseEntity
    {
        public string Descripcion { get; set; }
        public string Tipo { get; set; }
        public ICollection<CodigoBaile_Academias> CodigoBailes_Academias;
        
    }
}

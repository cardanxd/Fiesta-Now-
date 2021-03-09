using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Entity;

namespace Domain.Entities
{
    public class CodigoBaile_Academias : BaseEntity
    {
        public int CodigoBaileId { get; set; }
        public  CodigoBaile CodigoBaile { get; set; }
        public int AcademiaId { get; set; }
        public Academia Academia { get; set; }
    }
}
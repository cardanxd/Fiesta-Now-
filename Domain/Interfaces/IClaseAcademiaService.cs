using System.Collections.Generic;
using System.Threading.Tasks;
using Entity;

namespace Domain.Interfaces
{
    public interface IClaseAcademiaService
    {

        Task Add(Clase_Suscripciones entity);
         Task<Clase_Suscripciones> GetById(int id);
         IEnumerable<Clase_Suscripciones> GetAll();
    }
}
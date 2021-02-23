using System.Collections.Generic;
using System.Threading.Tasks;
using Entity;

namespace Domain.Interfaces
{
    public interface ISuscripcionServices
    {
        IEnumerable<Suscripcion> GetSuscripcions(); 
        Task UpdateSuscripcion(Suscripcion suscripcion);
        Task AddSuscripcion(Suscripcion suscripcion);
        Task DeleteSuscripcion(int id);
        Task<Suscripcion> GetById(int id);
    }
}
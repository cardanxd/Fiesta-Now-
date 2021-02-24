using System.Collections.Generic;
using System.Threading.Tasks;
using Domain.Interfaces;
using Entity;

namespace Application.Services
{
    public class SuscripcionServices : ISuscripcionServices
    {
        private readonly IUnitOfWork _unitOfWork;

        public SuscripcionServices(IUnitOfWork unitOfWork)
        {
            this._unitOfWork = unitOfWork;
        }

        public async Task AddSuscripcion(Suscripcion suscripcion)
        {
            await _unitOfWork.SuscripcionesRepository.Add(suscripcion);
            await _unitOfWork.SaveChangesAsync();
        }
    }
}
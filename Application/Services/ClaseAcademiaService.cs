using System.Collections.Generic;
using System.Threading.Tasks;
using Domain.Interfaces;
using Entity;

namespace Application.Services
{
    public class ClaseAcademiaService : IClaseAcademiaService
    {
        private readonly IUnitOfWork _unitOfWork;

        public ClaseAcademiaService(IUnitOfWork unitOfWork)
        {
            this._unitOfWork = unitOfWork;
        }

        public async Task Add(Clase_Suscripciones entity)
        {
            await _unitOfWork.ClasesSuscripcionesRepository.Add(entity);
            await _unitOfWork.SaveChangesAsync();
        }

        public IEnumerable<Clase_Suscripciones> GetAll()
        {
            return  _unitOfWork.ClasesSuscripcionesRepository.GetAll();
        }

        public async Task<Clase_Suscripciones> GetById(int id)
        {
            return await _unitOfWork.ClasesSuscripcionesRepository.GetById(id);
        }
    }
}
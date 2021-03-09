using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Domain.Interfaces;
using Entity;

namespace Application.Services
{
    public class SuscripcionesServices : ISuscripcionService
    {
        private readonly IUnitOfWork _unitOfWork;
        public SuscripcionesServices(IUnitOfWork unitOfWork)
        {
            this._unitOfWork = unitOfWork;
        }

        public async Task Add(Suscripcion entity)
        {
            
            await _unitOfWork.SuscripcionesRepository.Add(entity);
            await _unitOfWork.SaveChangesAsync();
        }

        public async Task Delete(int id)
        {
            await _unitOfWork.SuscripcionesRepository.Delete(id);
            await _unitOfWork.SaveChangesAsync();
        }

        public IEnumerable<Suscripcion> FindByCondition(Expression<Func<Suscripcion, bool>> expression)
        {
            return _unitOfWork.SuscripcionesRepository.FindByCondition(expression);
        }

        public IEnumerable<Suscripcion> GetAll()
        {
            return _unitOfWork.SuscripcionesRepository.GetAll();
        }


        public Task<Suscripcion> GetById(int id)
        {
            return _unitOfWork.SuscripcionesRepository.GetById(id);
        }

        public void Update(Suscripcion entity)
        {
            _unitOfWork.SuscripcionesRepository.Update(entity);
            _unitOfWork.SaveChangesAsync();
        }
    }
}
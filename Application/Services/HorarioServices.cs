using System.Collections.Generic;
using System.Threading.Tasks;
using Domain.Interfaces;
using Entity;

namespace Application.Services
{
    public class HorarioServices : IHorarioServices
    {   
        private readonly IUnitOfWork _unitOfWork;

        public HorarioServices(IUnitOfWork unitOfWork)
        {
            this._unitOfWork = unitOfWork;
        }

        public async Task AddHorarios(Horario horarios)
        {
            await _unitOfWork.HorariosRepository.Add(horarios);
            await _unitOfWork.SaveChangesAsync();
        }

        public IEnumerable<Horario> GetHorario()
        {
            return _unitOfWork.HorariosRepository.GetAll();
        }

        public async Task<Horario> GetById(int id)
        {
            return await _unitOfWork.HorariosRepository.GetById(id);
        }

        public async Task DeleteHorario(int id)
        {
            await _unitOfWork.HorariosRepository.Delete(id);
            await _unitOfWork.SaveChangesAsync();
        }

        public Task UpdateHorario(Horario horarios)
        {
            throw new System.NotImplementedException();
        }
    }
}
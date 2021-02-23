using System.Collections.Generic;
using System.Threading.Tasks;
using Domain.Interfaces;
using Entity;

namespace Application.Services
{
    public class EstudianteServices : IEstudianteServices
    {
        private readonly IUnitOfWork _unitOfWork;

        public EstudianteServices(IUnitOfWork unitOfWork)
        {
            this._unitOfWork = unitOfWork;
        }

        public IEnumerable<Estudiante> GetEstudiantes()
        {
            return _unitOfWork.EstudiantesRepository.GetAll();
        }

        public async Task UpdateEstudiante(Estudiante estudiante)
        {
            _unitOfWork.EstudiantesRepository.Update(estudiante);
            await _unitOfWork.SaveChangesAsync();
        }

        public async Task AddEstudiante(Estudiante estudiante)
        {
            await _unitOfWork.EstudiantesRepository.Add(estudiante);
            await _unitOfWork.SaveChangesAsync();
        }

        public async Task DeleteEstudiante(int id)
        {
            await _unitOfWork.EstudiantesRepository.Delete(id);
            await _unitOfWork.SaveChangesAsync();
        }

        public async Task<Estudiante> GetById(int id)
        {
            return await _unitOfWork.EstudiantesRepository.GetById(id);
        }
    }
}
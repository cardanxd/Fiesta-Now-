using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain.Exceptions;
using Domain.Interfaces;
using Entity;

namespace Application.Services
{
    public class ClasesServices : IClaseServices
    {
        private readonly IUnitOfWork _unitOfWork;

        public ClasesServices(IUnitOfWork unitOfWork)
        {
            this._unitOfWork = unitOfWork;
        }

        public async Task AddClase(Clase clase)
        {
            //verificar si existe una clase repetida
            List<Horario> valuesRepits = HorarioRepeat(clase.Horarios);

            if (valuesRepits.Any())
                throw new BusinessException("Algunos horarios entran en el conflicto con otros, verifique el campo de las hora");

            await _unitOfWork.ClaseRepository.Add(clase);
            await _unitOfWork.SaveChangesAsync();
        }

        public IEnumerable<Clase> GetClases()
        {
            return _unitOfWork.ClaseRepository.GetAll();
        }

        public async Task UpdateClase(Clase clase)
        {
            List<Horario> valuesRepits = HorarioRepeat(clase.Horarios);
        
            if (valuesRepits.Any())
                throw new BusinessException("Algunos horarios entran en el conflicto con otros, verifique el campo de las hora");

             _unitOfWork.ClaseRepository.Update(clase);
            await _unitOfWork.SaveChangesAsync();
        }

        public async Task DeleteClase(int id)
        {
            await _unitOfWork.ClaseRepository.Delete(id);
            await _unitOfWork.SaveChangesAsync();
        }

        public async Task<Clase> GetById(int id)
        {
            return await _unitOfWork.ClaseRepository.GetById(id);
        }

        
        private List<Horario> HorarioRepeat(ICollection<Horario> horarios)
        {
            //verificar si existe una clase en la cual los horarios sean iguales o uno este dentro de otro
            List<Horario> valuesRepits = new List<Horario>();
            for (int i = 0; i < horarios.Count; i++)
            {
                for (int j = 0; j < horarios.Count; j++)
                {
                    if (j == i) continue;
                    Horario actHorario = horarios.ElementAt(i);
                    Horario compHorario = horarios.ElementAt(j);

                    if (actHorario.Apertura >= compHorario.Apertura && actHorario.Cierre <= compHorario.Cierre && actHorario.Dia == compHorario.Dia)
                        valuesRepits.Add(actHorario);
                }
            }
            return valuesRepits;
        }
    }
}
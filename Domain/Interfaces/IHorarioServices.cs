using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Entity;

namespace Domain.Interfaces
{
    public interface IHorarioServices
    {
        Task AddHorarios(Horario horarios);
        IEnumerable<Horario> GetHorario();
        Task UpdateHorario(Horario horarios);
        Task<Horario> GetById(int id);
        Task DeleteHorario(int id);
    }
}
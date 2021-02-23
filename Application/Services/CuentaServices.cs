using System.Collections.Generic;
using System.Threading.Tasks;
using Domain.Interfaces;
using Entity;

namespace Application.Services
{
    public class CuentaServices : ICuentaServices
    {
        private readonly IUnitOfWork _unitOfWork;

        public CuentaServices(IUnitOfWork unitOfWork)
        {
            this._unitOfWork = unitOfWork;
        }

        public IEnumerable<Cuenta> GetCuentas()
        {
            return _unitOfWork.CuentasRepository.GetAll();
        }

        public async Task UpdateCuenta(Cuenta cuenta)
        {
            _unitOfWork.CuentasRepository.Update(cuenta);
            await _unitOfWork.SaveChangesAsync();
        }

        public async Task DeleteCuenta(int id)
        {
            await _unitOfWork.CuentasRepository.Delete(id);
            await _unitOfWork.SaveChangesAsync();
        }

        public async Task AddCuenta(Cuenta cuenta)
        {
            await _unitOfWork.CuentasRepository.Add(cuenta);
            await _unitOfWork.SaveChangesAsync();
        }
    }
}
using System.Threading.Tasks;
using Domain.Interfaces;
using Entity;
using Infrestructure.Data;

namespace Infrestructure.Repositories
{
    public sealed class UnitOfWork : IUnitOfWork
    {
        private readonly GetDanceNowContext _context;

        public UnitOfWork(GetDanceNowContext context)
        {
            this._context = context;
        }

        private readonly IRepository<Academia> _academiasRepository;
        private readonly IRepository<Clase_Suscripciones> _clasesSuscripcionesRepository; 
        private readonly IRepository<Clase> _claseRepository;
        private readonly IRepository<CodigoBaile> _codigoBailesRepository;
        private readonly IRepository<Cuenta> _cuentasRepository;
        private readonly IRepository<Estudiante> _estudiantesRepository;
        private readonly IRepository<Horario> _horariosRepository;
        private readonly IRepository<Suscripcion> _suscripcionesRepository;


        public IRepository<Academia> AcademiasRepository => _academiasRepository ?? new SQLRepository<Academia>(_context);
        public IRepository<Clase_Suscripciones> ClasesSuscripcionesRepository => _clasesSuscripcionesRepository ??  new SuscripcionRepository(_context);
        public IRepository<Clase> ClaseRepository =>  new SQLRepository<Clase>(_context);
        public IRepository<CodigoBaile> CodigoBailesRepository => _codigoBailesRepository ?? new SQLRepository<CodigoBaile>(_context);
        public IRepository<Cuenta> CuentasRepository => _cuentasRepository ?? new SQLRepository<Cuenta>(_context);
        public IRepository<Estudiante> EstudiantesRepository => _estudiantesRepository ?? new SQLRepository<Estudiante>(_context);
        public IRepository<Horario> HorariosRepository => _horariosRepository ?? new SQLRepository<Horario>(_context);
        public IRepository<Suscripcion> SuscripcionesRepository => _suscripcionesRepository ?? new SQLRepository<Suscripcion>(_context);

        public void Dispose()
        {
            if (_context == null)
                _context.Dispose();
        }
        public void SaveChanges()
        {
            _context.SaveChanges();
        }

        public async Task SaveChangesAsync()
        {
            await _context.SaveChangesAsync();
        }
    }
}
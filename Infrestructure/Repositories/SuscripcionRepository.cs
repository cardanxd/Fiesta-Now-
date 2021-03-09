using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Domain.Interfaces;
using Entity;
using Infrestructure.Data;
using Microsoft.EntityFrameworkCore;

namespace Infrestructure.Repositories
{
    public class SuscripcionRepository : IRepository<Clase_Suscripciones>
    {
        private readonly GetDanceNowContext _context;
        private readonly DbSet<Clase_Suscripciones> _entity;

        public SuscripcionRepository(GetDanceNowContext context)
        {
            this._context = context;
            this._entity = context.Set<Clase_Suscripciones>();
        }

        public async Task Add(Clase_Suscripciones entity)
        {
            if (entity == null) throw new ArgumentNullException("Entity");

            await _entity.AddAsync(entity);
        }

        public async Task Delete(int id)
        {
            if (id <= 0) throw new ArgumentNullException("Entity");

            var entity = await GetById(id);

            _entity.Remove(entity);
        }

        public IEnumerable<Clase_Suscripciones> FindByCondition(Expression<Func<Clase_Suscripciones, bool>> expression)
        {
            var entity = _entity.
            Include(x => x.Clase).
                Include(x => x.Suscripcion)
                .Where(expression).AsNoTracking().AsEnumerable();

            return entity;
        }

        public IEnumerable<Clase_Suscripciones> GetAll()
        {
            return _entity.AsNoTracking().
                Include(x => x.Clase).
                Include(x => x.Suscripcion).
                AsEnumerable();
        }

        public async Task<Clase_Suscripciones> GetById(int id)
        {
            Clase_Suscripciones entity = await _entity.AsNoTracking().
                Include(x => x.Clase).
                Include(x => x.Suscripcion).
                SingleOrDefaultAsync(entity => entity.Id == id);

            return entity;
        }

        public void Update(Clase_Suscripciones entity)
        {
            if (entity == null) throw new ArgumentNullException("Entity");
            if (entity.Id <= 0) throw new ArgumentNullException("Entity");
            _entity.Update(entity);
        }
    }
}
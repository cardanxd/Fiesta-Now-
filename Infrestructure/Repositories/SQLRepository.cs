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
    public class SQLRepository<T> : IRepository<T> where T : BaseEntity
    {
        private readonly GetDanceNowContext _context;
        private readonly DbSet<T> _entity;

        public SQLRepository(GetDanceNowContext context)
        {
            this._context = context;
            this._entity = context.Set<T>();
        }

        public async Task Add(T entity)
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

        public IEnumerable<T> FindByCondition(Expression<Func<T, bool>> expression)
        {
            var entity = _entity.Where(expression).AsNoTracking().AsEnumerable();
            return entity;
        }

        public IEnumerable<T> GetAll()
        {
            return _entity.AsNoTracking().AsEnumerable();
        }

        public async Task<T> GetById(int id)
        {
            var entity = await _entity.AsNoTracking().SingleOrDefaultAsync(entity => entity.Id == id);
            return entity;
        }

        public void Update(T entity)
        {
            if (entity == null) throw new ArgumentNullException("Entity");
            if (entity.Id <= 0) throw new ArgumentNullException("Entity");
            _entity.Update(entity);
        }
    }
}
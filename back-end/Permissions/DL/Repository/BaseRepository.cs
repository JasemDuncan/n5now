using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using BE.Interfaces.Repository;
using System.Linq;

namespace DL.Repository
{
    public class BaseRepository<TEntity> : IBaseRepository<TEntity> where TEntity : class
    {
        protected readonly DbContext _context;
        protected readonly IConfiguration _configuration;

        //Context SQL
        public BaseRepository(DbContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;

        }

        public BaseRepository(IConfiguration configuration)
        {
            _configuration=configuration;
        }
        // FOR SQL
        public TEntity Get(int id)
        {
            return _context.Set<TEntity>().Find(id);
        }

        public IEnumerable<TEntity> GetAll()
        {
            return _context.Set<TEntity>().ToList();
        }

        public void Add(TEntity entity)
        {
            _context.Set<TEntity>().Add(entity);
        }

        public void Remove(TEntity entity)
        {
            _context.Set<TEntity>().Remove(entity);
        }
        public void Update(TEntity entity)
        {
            _context.Set<TEntity>().Update(entity);
        }
    }
}


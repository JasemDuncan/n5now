using System;
using System.Collections.Generic;

namespace BE.Interfaces.Repository
{
    public interface IBaseRepository<IEntity> where IEntity : class
    {
        IEntity Get(int id);
        IEnumerable<IEntity> GetAll();
        void Add(IEntity entity);
        void Remove(IEntity entity);
        void Update(IEntity entity);
    }
}


using System;
using BE;
using BE.Interfaces.Repository;
using DL.Repository;
using Microsoft.Extensions.Configuration;

namespace DL
{
    public class UnitOfWork : IUnitOfWork
    {
        private PermissionContext _context;
        protected readonly IConfiguration _configuration;
        public UnitOfWork(PermissionContext context, IConfiguration configuration)
        {
            this._context = context;
            this._configuration=configuration;
            PermissionRepository = new PermissionRepository(_context,configuration);
            PermissionTypeRepository = new PermissionTypeRepository(_context, configuration);
        }

        public IPermissionRepository PermissionRepository { get; private set; }
        public IPermissionTypeRepository PermissionTypeRepository { get; private set; }

        public int Complete()
        {
            return _context.SaveChanges();
        }
        public void Dispose()
        {
            _context.Dispose();
        }
    }

}


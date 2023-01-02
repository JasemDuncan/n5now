using BE;
using BE.Interfaces.Repository;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DL.Repository
{
	public class PermissionRepository : BaseRepository<Permission>, IPermissionRepository
	{
        protected readonly IConfiguration _configuration;
        public PermissionRepository(DbContext context, IConfiguration configuration) : base(context,configuration)
        {
            _configuration = configuration;
        }
        public List<Permission> GetPermissionList()
        {
            return _context.Set<Permission>().ToList();
        }
        public Permission GetPermission(int id)
        {
            return _context.Set<Permission>().Include(x => x.PermissionTypeEntity).FirstOrDefault();
        }

        public void AddPermission(Permission Permission)
        {
            _context.Set<Permission>().Add(Permission);
        }

    }
}


using System;
using BE;
using BE.Interfaces.Repository;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using DL.Repository;
using System.Linq;

namespace DL.Repository
{
    public class PermissionTypeRepository : BaseRepository<PermissionType>, IPermissionTypeRepository
    {
        protected readonly IConfiguration _configuration;
        public PermissionTypeRepository(DbContext context, IConfiguration configuration) : base(context, configuration)
        {
            _configuration= configuration;
    }
        public List<PermissionType> GetPermissionTypeList()
        {
            List<PermissionType> PermissionType = _context.Set<PermissionType>().ToList();
            return PermissionType;
        }
        public PermissionType GetPermissionTypeDetailed(int id)
        {
            return _context.Set<PermissionType>().FirstOrDefault();
        }

        public void AddPermissionType(PermissionType PermissionType)
        {
            _context.Set<PermissionType>().Add(PermissionType);
        }
    }
}


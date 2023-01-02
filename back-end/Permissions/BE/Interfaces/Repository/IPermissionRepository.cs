using System;
using System.Collections.Generic;

namespace BE.Interfaces.Repository
{
	public interface IPermissionRepository:IBaseRepository<Permission>
	{
        List<Permission> GetPermissionList();
        Permission GetPermission(int id);
        void AddPermission(Permission permission);
    }
}



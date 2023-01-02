using System;
using System.Collections.Generic;

namespace BE.Interfaces.Repository
{
	public interface IPermissionTypeRepository : IBaseRepository<PermissionType>
    {
        List<PermissionType> GetPermissionTypeList();
        PermissionType GetPermissionTypeDetailed(int id);
        void AddPermissionType(PermissionType permissionType);
    }
}


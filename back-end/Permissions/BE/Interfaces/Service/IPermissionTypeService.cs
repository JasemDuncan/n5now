using System;
using System.Collections.Generic;

namespace BE.Interfaces.Service
{
	public interface IPermissionTypeService
	{
        List<PermissionType> GetPermissionPermissionTypeList();
        PermissionType GetPermissionPermissionType(int id);
        void AddPermissionPermissionType(PermissionType permissionType);
        void UpdatePermissionPermissionType(PermissionType permissionType);
    }
}


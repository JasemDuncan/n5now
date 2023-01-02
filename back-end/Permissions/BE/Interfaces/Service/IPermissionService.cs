using DA.Command;
using DA.Query;
using System;
using System.Collections.Generic;

namespace BE.Interfaces.Service
{
    public interface IPermissionService
    {
        List<Permission> GetPermissionList();
        Permission GetPermission(int id);
        void AddPermission(Permission Permission);
        void UpdatePermission(Permission Permission);
        GetPermissionQueryReponse PermissionToGetPermissionQueryResponse(Permission permission);
        Permission PostPermissionQueryToPermission(PostPermissionQuery permissionQuery);
        Permission PutPermissionQueryToPermission(PutPermissionQuery permissionQuery);

    }
}


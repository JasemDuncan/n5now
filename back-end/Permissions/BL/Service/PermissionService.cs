using System;
using System.Collections.Generic;
using System.Linq;
using BE;
using BE.Interfaces.Repository;
using BE.Interfaces.Service;
using DA.Command;
using DA.Query;
using DL.Repository;
using Microsoft.Extensions.Configuration;

namespace BL.Service
{
    public class PermissionService : IPermissionService
    {
        private readonly IUnitOfWork _unitOfWork;
        protected readonly IConfiguration _configuration;

        public PermissionService(IUnitOfWork unitOfWork, IConfiguration configuration)
        {
            _unitOfWork = unitOfWork;
            _configuration = configuration;
        }

        public void AddPermission(Permission Permission)
        {
            _unitOfWork.PermissionRepository.Add(Permission);
            _unitOfWork.Complete();
        }

        public Permission GetPermission(int id)
        {
            return _unitOfWork.PermissionRepository.Get(id);
        }

        public List<Permission> GetPermissionList()
        {
            return (List<Permission>)_unitOfWork.PermissionRepository.GetAll();
        }

        public GetPermissionQueryReponse PermissionToGetPermissionQueryResponse(Permission permission)
        {
            GetPermissionQueryReponse PermissionQueryReponse = new GetPermissionQueryReponse
            {
                ID = permission.ID,
                EmployeeForename = permission.EmployeeForename,
                EmployeeSurname = permission.EmployeeSurname,
                PermissionType = permission.PermissionType,
                PermissionDate = permission.PermissionDate
            };
            return PermissionQueryReponse;
        }

        public void UpdatePermission(Permission Permission)
        {
            _unitOfWork.PermissionRepository.Update(Permission);
            _unitOfWork.Complete();
        }

        public Permission PostPermissionQueryToPermission(PostPermissionQuery permissionQuery)
        {
            Permission Permission = new Permission
            {
                ID = permissionQuery.ID,
                EmployeeForename = permissionQuery.EmployeeForename,
                EmployeeSurname = permissionQuery.EmployeeSurname,
                PermissionType = permissionQuery.PermissionType,
                PermissionDate = permissionQuery.PermissionDate
            };
            return Permission;
        }

        public Permission PutPermissionQueryToPermission(PutPermissionQuery permissionQuery)
        {
            Permission Permission = new Permission
            {
                ID = permissionQuery.ID,
                EmployeeForename = permissionQuery.EmployeeForename,
                EmployeeSurname = permissionQuery.EmployeeSurname,
                PermissionType = permissionQuery.PermissionType,
                PermissionDate = permissionQuery.PermissionDate
            };
            return Permission;
        }
    }
}


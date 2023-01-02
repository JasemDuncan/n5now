using System;
using System.Collections.Generic;
using System.Linq;
using BE;
using BE.Interfaces.Service;
using Microsoft.Extensions.Configuration;

namespace BL.Service
{
	public class PermissionTypeService:IPermissionTypeService
	{
        private readonly IUnitOfWork _unitOfWork;
        protected readonly IConfiguration _configuration;

        public PermissionTypeService(IUnitOfWork unitOfWork, IConfiguration configuration)
        {
            _unitOfWork = unitOfWork;
            _configuration = configuration;
        }

        public void AddPermissionPermissionType(PermissionType permissionType)
        {
            _unitOfWork.PermissionTypeRepository.Add(permissionType);
        }

        public PermissionType GetPermissionPermissionType(int id)
        {
            return _unitOfWork.PermissionTypeRepository.Get(id);
        }

        public List<PermissionType> GetPermissionPermissionTypeList()
        {
            return _unitOfWork.PermissionTypeRepository.GetAll().ToList();
        }

        public void UpdatePermissionPermissionType(PermissionType permissionType)
        {
            _unitOfWork.PermissionTypeRepository.Update(permissionType);
        }
    }
}


using BE.Interfaces.Service;
using DA.Command;
using DA.Query;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PermissionAPI.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class PermissionController : ControllerBase
    {
        private readonly IPermissionService _permissionService;
        private readonly IPermissionTypeService _permissionTypeService;
        protected readonly IConfiguration _configuration;

        public PermissionController(IPermissionService permisionService, IPermissionTypeService
            permissionTypeService, IConfiguration configuration)
        {
            _permissionService = permisionService;
            _permissionTypeService = permissionTypeService;
            _configuration = configuration;
        }

        [HttpGet("GetPermissions")]
        public List<GetPermissionQueryReponse> GetPermissions()
        {
            var PermissionsQueryList = new List<GetPermissionQueryReponse>();
            var permissions = _permissionService.GetPermissionList();
            foreach (var item in permissions)
            {
                GetPermissionQueryReponse permissionQueryResponse = _permissionService.PermissionToGetPermissionQueryResponse(item);
                PermissionsQueryList.Add(permissionQueryResponse);
            }
            return PermissionsQueryList;
        }

        [HttpPost("RequestPermission")]
        public BasicResponse SavePermission([FromBody] PostPermissionQuery PostQuery)
        {
            var response = new BasicResponse();
            var permission= _permissionService.PostPermissionQueryToPermission(PostQuery);
            try
            {
                _permissionService.AddPermission(permission);
                response.Success = true;

            }
            catch
            {
                response.Success = false;
            }
            return response;
        }

        [HttpPut("ModifiyPermission")]
        public BasicResponse UpdatePermission([FromBody] PutPermissionQuery PutQuery)
        {
            var response = new BasicResponse();
            var permission = _permissionService.PutPermissionQueryToPermission(PutQuery);
            try
            {
                _permissionService.UpdatePermission(permission);
                response.Success = true;

            }
            catch
            {
                response.Success = false;
            }
            return response;
        }

    }
}

using System;
using System.Collections.Generic;
using BE;
using BE.Interfaces.Service;
using DA.Query;
using NUnit.Framework;

namespace UnitTest
{
	public class FactoryUnitTest
	{
		private readonly IPermissionService _permissionService;

		public FactoryUnitTest(IPermissionService permissionService)
		{
			_permissionService = permissionService;

		}

		[Test]
		public void GetPermission()
		{
			var permissionList = new List<Permission>();
			var PermissionMethodService = _permissionService.GetPermissionList();

            Assert.AreEqual(permissionList.GetType(), PermissionMethodService.GetType());
			Console.WriteLine("GerPermission");
        }
	}
}


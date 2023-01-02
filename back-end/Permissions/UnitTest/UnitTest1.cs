using BE.Interfaces.Service;
using NUnit.Framework;

namespace UnitTest
{
    [TestFixture]

    public class Tests 
    {
        private readonly IPermissionService _permissionService;

        public Tests(IPermissionService permissionService)
        {
            _permissionService = permissionService;
        }

        [SetUp]
        public void Setup()
        {
            var test = new FactoryUnitTest(_permissionService);

            //Testing getPermissionsList

            test.GetPermission();

        }

        [Test]
        public void Test1()
        {
            Assert.Pass();
        }
    }
}

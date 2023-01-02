using BE;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DL
{
    public class PermissionContext : DbContext
    {
        protected readonly IConfiguration _configuration;
        public PermissionContext(DbContextOptions<PermissionContext> options, IConfiguration configuration ) : base(options)
        {
            _configuration = configuration;
        }
        public DbSet<Permission> Permissions { get; set; }
        public DbSet<PermissionType> PermissionTypes { get; set; }
    }
}

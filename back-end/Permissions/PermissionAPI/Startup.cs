using BE;
using BE.Interfaces.Repository;
using BE.Interfaces.Service;
using BL.Service;
using DL;
using DL.Repository;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PermissionAPI
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; set; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            var optionsBuilder = new DbContextOptionsBuilder<PermissionContext>();
            optionsBuilder.UseSqlServer(Configuration.GetConnectionString("SQL"));
            services.AddSingleton(optionsBuilder.Options);
            //services.AddMemoryCache();
            //services.AddScoped<DbContext, PermissionContext>();
            services.AddTransient<IUnitOfWork, UnitOfWork>();
            services.AddDbContext<PermissionContext>();
            //services.AddTransient<IPermissionRepository, PermissionRepository>();
            //services.AddTransient<IPermissionTypeRepository, PermissionTypeRepository>();
            services.AddTransient<IPermissionService, PermissionService>();
            services.AddTransient<IPermissionTypeService, PermissionTypeService>();



            services.AddControllers();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "PermissionAPI", Version = "v1" });
            });

            services.AddCors();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            var acceptedUrl = Configuration
                                .GetSection("AllowedHosts").Value;
            app.UseCors(builder => builder.WithOrigins(acceptedUrl).AllowAnyHeader().AllowAnyMethod());

            using (var scope = app.ApplicationServices.CreateScope())
            {
                var Context = scope.ServiceProvider.GetRequiredService<PermissionContext>();
                Context.Database.Migrate();
            }
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "PermissionAPI v1"));
            }

            app.UseHttpsRedirection();

            app.UseRouting();


            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
            
        }
    }
}

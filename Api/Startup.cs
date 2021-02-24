using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain.Interfaces;
using Infrestructure.Data;
using Infrestructure.Repositories;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using FluentValidation.AspNetCore;
using AutoMapper;
using Application.Services;
using Infrestructure.Filter;
using Newtonsoft.Json;

namespace Iterface
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
            //services.AddControllers();

            services.AddMvc().AddFluentValidation(options =>
            {
                options.RegisterValidatorsFromAssemblies(AppDomain.CurrentDomain.GetAssemblies());

            });
            services.AddCors(options =>
            {
                options.AddPolicy("Testing",
                    builder =>
                    {
                        builder.WithOrigins("*")
                        .AllowAnyOrigin()
                        .AllowAnyHeader()
                        .AllowAnyMethod();
                    });
            });

            services.AddControllers(options =>
            {
                options.Filters.Add<GlobalExceptionFilter>();
            });
    
            services.AddScoped(typeof(IRepository<>), typeof(SQLRepository<>));
            services.AddTransient<IAcademiaServices, AcademiaServices>();
            services.AddTransient<IEstudianteServices, EstudianteServices>();
            services.AddTransient<ICuentaServices, CuentaServices>();
            services.AddTransient<IHorarioServices, HorarioServices>();
            services.AddTransient<IClaseServices, ClasesServices>();
            services.AddTransient<ISuscripcionServices, SuscripcionServices>();
            services.AddTransient<IUnitOfWork, UnitOfWork>();
            services.AddDbContext<GetDanceNowContext>(options =>
           {
               options.UseSqlServer(Configuration.GetConnectionString("dbstring"));
           });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {


            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            app.UseRouting();
            app.UseCors();
            app.UseAuthorization();
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}

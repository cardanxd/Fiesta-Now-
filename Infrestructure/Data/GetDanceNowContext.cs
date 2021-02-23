using System;
using System.IO;
using Entity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.Extensions.Configuration;

namespace Infrestructure.Data
{
    public partial class GetDanceNowContext : DbContext
    {
        public GetDanceNowContext()
        {
        }

        public GetDanceNowContext(DbContextOptions<GetDanceNowContext> options)
            : base(options)
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                IConfigurationRoot configuration = new ConfigurationBuilder()
                   .SetBasePath(Directory.GetCurrentDirectory())
                   .AddJsonFile("appsettings.json")
                   .Build();
                var connectionString = configuration.GetConnectionString("dbstring");
                optionsBuilder.UseSqlServer(connectionString);
            }
        }

        DbSet<Academia> Academias { get; }
        DbSet<Clase_Suscripciones> Clases_Suscripciones { get; }
        DbSet<Clase> Clases { get; }
        DbSet<CodigoBaile> CodigoBailes { get; }
        DbSet<Cuenta> Cuentas { get; }
        DbSet<Estudiante> Estudiantes { get; }
        DbSet<Horario> Horarios { get; }
        DbSet<Suscripcion> Suscripcions { get; }

    }
}

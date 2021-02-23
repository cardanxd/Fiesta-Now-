using AutoMapper;
using Domain.DTOs;
using Entity;

namespace Infrestructure.Mappings
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<Academia, AcademiaRequestDto>();
            CreateMap<Academia, AcademiaResponseDto>();
            CreateMap<AcademiaRequestDto, Academia>()
            .AfterMap((source, destination) =>
            {
                destination.cuenta = new Cuenta()
                {
                    Rol = source.Rol,
                    Correo = source.Correo,
                    Password = source.Password,
                    Estatus = true
                };
            });// this copy paste above

            CreateMap<Estudiante,EstudianteRequestDto>();
            CreateMap<Estudiante,EstudianteResponseDto>();
            CreateMap<EstudianteRequestDto,Estudiante>()
            .AfterMap((source, destination) =>
            {
                destination.cuenta = new Cuenta()
                {
                    Rol = source.Rol,
                    Correo = source.Correo,
                    Password = source.Password,
                    Estatus = true
                };
            });

            CreateMap<Cuenta, CuentaRequestDto>();
            CreateMap<Cuenta, CuentaResponseDto>();
            CreateMap<CuentaRequestDto, Cuenta>();

            CreateMap<Horario,HorarioRequestDto>();
            CreateMap<Horario,HorarioResponseDto>();
            

            CreateMap<HorarioRequestDto,Horario>();

            CreateMap<Clase,ClaseRequestDto>();
            CreateMap<ClaseRequestDto,Clase>();
            CreateMap<Clase,ClaseResponseDto>()
            .AfterMap((source,destination) => {
                destination.Horarios = $"https://localhost:5001/api/horario/{source.Id}";
            });
            
            CreateMap<Suscripcion,SuscripcionRequestDto>();
            CreateMap<Suscripcion,SuscripcionResponseDto>();
            CreateMap<SuscripcionRequestDto, Suscripcion>();
        }
    }
}
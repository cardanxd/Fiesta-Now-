using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Api.Responses;
using AutoMapper;
using Domain.DTOs;
using Domain.Interfaces;
using Entity;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{

    [EnableCors("Testing")]
    [Route("api/[controller]")]
    [ApiController]
    public class SuscripsionController : ControllerBase
    {
        private readonly ISuscripcionService _service;
        private readonly IClaseAcademiaService _claseAcademiaService;
        private readonly IClaseServices _claseService;
        private readonly IMapper _mapper;

        public SuscripsionController(ISuscripcionService service, IMapper mapper, IClaseAcademiaService _claseAcademiaService, IClaseServices _claseService)
        {
            this._service = service;
            this._mapper = mapper;
            this._claseAcademiaService = _claseAcademiaService;
            this._claseService = _claseService;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var suscripciones = _service.GetAll();
            var suscripcionesDto = _mapper.Map<IEnumerable<Suscripcion>, IEnumerable<Suscripcion>>(suscripciones);

            var response = new ApiResponse<IEnumerable<Suscripcion>>(suscripcionesDto);
            return Ok(response);
        }

        [HttpGet("Clases/{id:int}")]
        public IActionResult Get(int id)
        {
            var suscripciones = _claseAcademiaService.GetAll().Where(x=> x.Suscripcion.CuentaId == id);
            var suscripcionesDto = _mapper.Map<IEnumerable<Clase_Suscripciones>, IEnumerable<SuscripcionResponseDto>>(suscripciones);

            var response = new ApiResponse<IEnumerable<SuscripcionResponseDto>>(suscripcionesDto);
            return Ok(suscripciones);
        }

        [HttpGet("Academia/{id:int}")]
        public IActionResult GetByAcademy(int id)
        {
            var suscripciones = _claseAcademiaService.GetAll().Where(x => x.ClaseID == id );
            var suscripcionesDto = _mapper.Map<IEnumerable<Clase_Suscripciones>, IEnumerable<SuscripcionResponseDto>>(suscripciones);

            var response = new ApiResponse<IEnumerable<SuscripcionResponseDto>>(suscripcionesDto);
            return Ok(suscripciones);
        }

        [HttpPost]
        public async Task<IActionResult> Post(SuscripcionRequestDto suscripcionDto)
        {
            var suscripcion = _mapper.Map<SuscripcionRequestDto, Suscripcion>(suscripcionDto);
            var claseAcamia = _mapper.Map<SuscripcionRequestDto,Clase_Suscripciones>(suscripcionDto);
            claseAcamia.Suscripcion = suscripcion;

            await _claseAcademiaService.Add(claseAcamia);

            var suscripcionresponseDto = _mapper.Map<Suscripcion, SuscripcionResponseDto>(suscripcion);
            var response = new ApiResponse<SuscripcionResponseDto>(suscripcionresponseDto);

            return Ok(response);
        }
    }
}
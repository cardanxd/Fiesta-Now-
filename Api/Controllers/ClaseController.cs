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
    public class ClaseController : ControllerBase
    {
        private readonly IClaseServices _service;
        private readonly IMapper _mapper;

        public ClaseController(IClaseServices service, IMapper mapper)
        {
            this._service = service;
            this._mapper = mapper;
        } 

        [HttpGet]
        public IActionResult Get()
        {
            var clase = _service.GetClases();
            var claseDto = _mapper.Map<IEnumerable<Clase>, IEnumerable<ClaseResponseDto>>(clase);
            foreach (var item in claseDto)
            {
                item.Horarios = $"{this.Request.Scheme}://{this.Request.Host}{this.Request.PathBase}/api/horario/{item.id}";
            }
            var response = new ApiResponse<IEnumerable<ClaseResponseDto>>(claseDto);
            return Ok(response);
        }

        [HttpPost]
        public async Task<IActionResult> Post(ClaseRequestDto HorarioDto)
        {
            var clase = _mapper.Map<ClaseRequestDto, Clase>(HorarioDto);
            await _service.AddClase(clase);

            var claseresponseDto = _mapper.Map<Clase, ClaseResponseDto>(clase);
            claseresponseDto.Horarios = $"{this.Request.Scheme}://{this.Request.Host}{this.Request.PathBase}/api/horario/{claseresponseDto.id}";
            var response = new ApiResponse<ClaseResponseDto>(claseresponseDto);

            return Ok(response);
        }

         [HttpGet("{id:int}")]
        public async Task<IActionResult> Get(int id)
        {
            Clase clase = await _service.GetById(id);
            var claseDto = _mapper.Map<Clase, ClaseResponseDto>(clase);
            claseDto.Horarios = $"{this.Request.Scheme}://{this.Request.Host}{this.Request.PathBase}/api/horario/{claseDto.id}";
            var response = new ApiResponse<ClaseResponseDto>(claseDto);
            return Ok(response);
        }

        [HttpGet("Academy/{id:int}")]
        public IActionResult GetForAcademy(int id)
        {
            var clase = _service.GetClases().Where(x => x.AcademiaId == id);
            var claseDto = _mapper.Map<IEnumerable<Clase>, IEnumerable<ClaseResponseDto>>(clase);
            foreach (var item in claseDto)
            {
                item.Horarios = $"{this.Request.Scheme}://{this.Request.Host}{this.Request.PathBase}/api/horario/{item.id}";
            }
            var response = new ApiResponse<IEnumerable<ClaseResponseDto>>(claseDto);
            return Ok(response);
        }

        [HttpPut("{id:int}")]
        public async Task<IActionResult> PUT(int id, ClaseRequestDto ClasDto)
        {
            var clase = _mapper.Map<ClaseRequestDto, Clase>(ClasDto);
            clase.Id = id;
            await _service.UpdateClase(clase);
            var claseresponseDto = _mapper.Map<Clase, ClaseResponseDto>(clase);
            var response = new ApiResponse<ClaseResponseDto>(claseresponseDto);

            return Ok(response);
        }

        [HttpDelete("{id:int}")]
        public async Task<IActionResult> Delete(int id)
        {
            await _service.DeleteClase(id);
            return Ok();
        }

    }
}
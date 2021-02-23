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
    public class HorarioController : ControllerBase
    {
        private readonly IHorarioServices _service;
        private readonly IMapper _mapper;

        public HorarioController(IHorarioServices service, IMapper mapper)
        {
            this._service = service;
            this._mapper = mapper;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var Cuentas = _service.GetHorario();
            var animalsDto = _mapper.Map<IEnumerable<Horario>, IEnumerable<HorarioResponseDto>>(Cuentas);

            var response = new ApiResponse<IEnumerable<HorarioResponseDto>>(animalsDto);
            return Ok(response);
        }

        [HttpGet("{id:int}")]
        public IActionResult Get(int id)
        {
            var Cuentas = _service.GetHorario().Where(x => x.ClaseId == id);
            var animalsDto = _mapper.Map<IEnumerable<Horario>, IEnumerable<HorarioResponseDto>>(Cuentas);

            var response = new ApiResponse<IEnumerable<HorarioResponseDto>>(animalsDto);
            return Ok(response);
        }

        [HttpGet("horario/{id:int}")]
        public async Task<IActionResult> GetHorario(int id)
        {
            Horario Cuentas = await _service.GetById(id);
            var animalsDto = _mapper.Map<Horario, HorarioResponseDto>(Cuentas);

            var response = new ApiResponse<HorarioResponseDto>(animalsDto);
            return Ok(response);
        }

        [HttpPost]
        public async Task<IActionResult> Post(HorarioRequestDto HorarioDto)
        {
            var horario = _mapper.Map<HorarioRequestDto, Horario>(HorarioDto);
            await _service.AddHorarios(horario);

            var horarioresponseDto = _mapper.Map<Horario, HorarioResponseDto>(horario);
            var response = new ApiResponse<HorarioResponseDto>(horarioresponseDto);

            return Ok(response);
        }

        [HttpPut("{id:int}")]
        public async Task<IActionResult> UpdateAcademy(int id, HorarioRequestDto HorarioDto)
        {
            Horario horario = await _service.GetById(id);
            var update = _mapper.Map<Horario>(HorarioDto);
            update.Id = id;
            update.ClaseId = horario.ClaseId;

            await _service.UpdateHorario(update);
            return Ok();
        }

        [HttpDelete("{id:int}")]
        public async Task<IActionResult> Delete(int id)
        {
            await _service.DeleteHorario(id);
            return Ok();
        }

    }
}
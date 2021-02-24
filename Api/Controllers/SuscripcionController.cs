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
    
    public class SuscripcionController : ControllerBase
    {
        private readonly ISuscripcionServices _service;
        private readonly IMapper _mapper;

        public SuscripcionController(ISuscripcionServices service, IMapper mapper)
        {
            this._service = service;
            this._mapper = mapper;
        }

        [HttpPost]
        public async Task<IActionResult> Post(SuscripcionRequestDto SuscripcionDto)
        {
            var suscripcion = _mapper.Map<SuscripcionRequestDto, Suscripcion>(suscripcionDto);
            await _service.AddSuscripcion(suscripcion);

            var suscripcionresponseDto = _mapper.Map<Suscripcion, SuscripcionResponseDto>(suscripcion);
            var response = new ApiResponse<SuscripcionResponseDto>(suscripcionresponseDto);

            return Ok(response);
        }

    }
}
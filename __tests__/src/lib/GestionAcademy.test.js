// @ponicode "../../../src/lib/GestionAcademy.js" > ... > Add
/*const Add = GestionAcademy.Add() // <-- import your function
const rewire = require("rewire")
const links = rewire("../../../src/routes/links")
const prueba = links.__get__("prueba")*/
// @ponicode

const Academy = require('src/lib/Repositories/Academy/AcademyRepository.js');

describe("Academy Gestion", () => {
    test("Add", async() => {

        let param1 = {
            academy: "text",
            number: "text",
            correo: "text",
            password: "text",
            descripcion: "text",
            direccion: "text",
            Longitud: 1992321512.42563,
            Latitud: 198728745872.123857129,
            logo: "text",
            Rol: 1
        }

        let Response = await Academy.Add(param1);

        let Be = function(Response) {

            //comprueba que el id y la cuenta se crearon
            if (Response.id <= 0) return {};
            if (Response.CuendaId <= 0) return {};

            //elimina las propiedades ya utlizadas para poder comparar los objetos
            Reflect.deleteProperty(Response, 'id')
            Reflect.deleteProperty(Response, 'cuentaID');

            //resultado esperado
            result = {
                nombre: 'text',
                numero: 'text',
                descripcion: 'text',
                direction: 'text',
                longitud: 1992321512.42563,
                latitud: 198728745872.123857129,
                logo: 'text',
            }

            return result;
        }

        expect(Be(Response)).toStrictEqual(Response)
    })

    test("GetAcademy", async() => {

        //resultado esperado
        result = {
            id: 8,
            nombre: 'text',
            numero: 'text',
            descripcion: 'text',
            direction: 'text',
            longitud: 1992321512.42563,
            latitud: 198728745872.123857129,
            logo: 'text',
            cuentaID: 8
        }

        //funcion
        let Response = await Academy.GetById(8);

        expect(Response).toStrictEqual(result)
    })

    test("UpdateAcademy", async() => {

        //se va actualizar
        param1 = {
            nombre: 'update',
            numero: 'text',
            descripcion: 'text',
            direction: 'text',
            longitud: 1992321512,
            latitud: 198728745872,
            logo: 'text'
        }

        let Response = await Academy.Update(59, param1);

        expect(true).toStrictEqual(Response)
    })

    test("DeleteAcademy", async() => {

        let Response = await Academy.Delete(6);
        //expect(true).toBe(Response)
    })

    test("consultar todas las academias", async () => {
        console.log(Academy.Get());
    }) 
})
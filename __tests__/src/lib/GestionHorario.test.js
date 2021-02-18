const Horarios = require('../../../src/lib/GestionHorario');

describe("Gestion y metodos de todos los horarios", () => {

    test("Transforma los horarios arrays en objetos y les da formata para enviar al api", () => {
        const toFormathorarios = {
            Id: ['1', '2'],
            days: ['Miercoles', 'Lunes'],
            Inicio: ['22:53', '22:53'],
            Cierre: ['22:53', '22:53']
        }

        const EqualFormat = [
            {
                id: 1,
                Apertura: "2019-07-26T22:53",
                Cierre: "2019-07-26T22:53",
                Dia: "Miercoles"
            },
            {
                id: 2,
                Apertura: "2019-07-26T22:53",
                Cierre: "2019-07-26T22:53",
                Dia: "Lunes",
            }
        ];

        const expectHorario = Horarios.ToFormat(toFormathorarios);
        expect(expectHorario).toStrictEqual(EqualFormat);
    })


    test("Eliminar una clase", () => {
        const expectHorario = Horarios.Delete(2);
        expect(expectHorario).toStrictEqual(true);
    })
    

})
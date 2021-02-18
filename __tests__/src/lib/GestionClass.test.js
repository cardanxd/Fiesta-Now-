const Classes = require('../../../src/lib/GestionClass');


describe("Class Gestion", () => {


    test("Update class with updates and without Deletes, New horarios", async () => {
        const Clase = {
            id: 1,
            Nombre: 'Clase 1',
            AlumnosMax: 50,
            CodigoBaileID: 1,
            AcademiaId: 1,
            NewHorarios: { days: undefined, Inicio: undefined, Cierre: undefined },
            UpdateHorarios:
            {
                Id: ['1', '2'],
                days: ['Miercoles', 'Lunes'],
                Inicio: ['22:53', '22:53'],
                Cierre: ['22:53', '22:53']
            },
            Delete: [undefined]
        }

        let restul = await Classes.Update(Clase);
        expect(restul).toBe(true);

    })

    test("Update class with New horarios and updates", async () => {
        const Clase = {
            id: 1,
            Nombre: 'Clase 1',
            AlumnosMax: 50,
            CodigoBaileID: 1,
            AcademiaId: 1,
            NewHorarios: {
                days: ['Miercoles', 'Lunes'],
                Inicio: ['22:53', '22:53'],
                Cierre: ['22:53', '22:53']
            },
            UpdateHorarios:
            {
                Id: ['1', '2'],
                days: ['Miercoles', 'Lunes'],
                Inicio: ['22:53', '22:53'],
                Cierre: ['22:53', '22:53']
            },
            Delete: [undefined]
        }

        let restul = await Classes.Update(Clase);
        expect(restul).toBe(true);

    })

    test("Update class with delete horarios", async () => {
        const Clase = {
            id: 1,
            Nombre: 'Clase 1',
            AlumnosMax: 50,
            CodigoBaileID: 1,
            AcademiaId: 1,
            NewHorarios: {
                days: undefined,
                Inicio: undefined,
                Cierre: undefined
            },
            UpdateHorarios:
            {
                Id: undefined,
                days: undefined,
                Inicio: undefined,
                Cierre: undefined
            },
            Delete: [1]
        }

        let restul = await Classes.Update(Clase);
        expect(restul).toBe(true);

    })
})
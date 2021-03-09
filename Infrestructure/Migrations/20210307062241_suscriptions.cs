using Microsoft.EntityFrameworkCore.Migrations;

namespace Infrestructure.Migrations
{
    public partial class suscriptions : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CodigoBailes_Academias_AcademiaId",
                table: "CodigoBailes");

            migrationBuilder.DropForeignKey(
                name: "FK_Suscripcions_Cuentas_CuentaId",
                table: "Suscripcions");

            /*migrationBuilder.DropIndex(
                name: "IX_CodigoBailes_AcademiaId",
                table: "CodigoBailes");*/

            migrationBuilder.DropColumn(
                name: "Detalles",
                table: "Suscripcions");

            /*migrationBuilder.DropColumn(
                name: "AcademiaId",
                table: "CodigoBailes");*/

            /*migrationBuilder.DropColumn(
                name: "ClaseID",
                table: "Clases");*/

            migrationBuilder.AlterColumn<int>(
                name: "CuentaId",
                table: "Suscripcions",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.CreateTable(
                name: "CodigoBaile_Academias",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CodigoBaileId = table.Column<int>(nullable: false),
                    AcademiaId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CodigoBaile_Academias", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CodigoBaile_Academias_Academias_AcademiaId",
                        column: x => x.AcademiaId,
                        principalTable: "Academias",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_CodigoBaile_Academias_CodigoBailes_CodigoBaileId",
                        column: x => x.CodigoBaileId,
                        principalTable: "CodigoBailes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_CodigoBaile_Academias_AcademiaId",
                table: "CodigoBaile_Academias",
                column: "AcademiaId");

            migrationBuilder.CreateIndex(
                name: "IX_CodigoBaile_Academias_CodigoBaileId",
                table: "CodigoBaile_Academias",
                column: "CodigoBaileId");

            migrationBuilder.AddForeignKey(
                name: "FK_Suscripcions_Cuentas_CuentaId",
                table: "Suscripcions",
                column: "CuentaId",
                principalTable: "Cuentas",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Suscripcions_Cuentas_CuentaId",
                table: "Suscripcions");

            migrationBuilder.DropTable(
                name: "CodigoBaile_Academias");

            migrationBuilder.AlterColumn<int>(
                name: "CuentaId",
                table: "Suscripcions",
                type: "int",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AddColumn<string>(
                name: "Detalles",
                table: "Suscripcions",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "AcademiaId",
                table: "CodigoBailes",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "ClaseID",
                table: "Clases",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_CodigoBailes_AcademiaId",
                table: "CodigoBailes",
                column: "AcademiaId");

            migrationBuilder.AddForeignKey(
                name: "FK_CodigoBailes_Academias_AcademiaId",
                table: "CodigoBailes",
                column: "AcademiaId",
                principalTable: "Academias",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Suscripcions_Cuentas_CuentaId",
                table: "Suscripcions",
                column: "CuentaId",
                principalTable: "Cuentas",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}

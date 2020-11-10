namespace Domain.DTOs
{
    public class AcademiaResponseDto
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public string Numero { get; set; }
        public string Descripcion { get; set; }
        public string Direction { get; set; }
        public float Longitud { get; set; }
        public float Latitud { get; set; }
        public string Logo { get; set; }
        public int CuentaID { get; set; }
    }
}

function calcularEdad(fecha) {
    let diferencia = Date.now() - fecha.getTime(); // A la fecha actual le resto la fecha dada

    fecha = new Date(diferencia); // Pasamos como argumento la diferencia

    return Math.abs(fecha.getUTCFullYear() - 1970); // Sobre fecha invocamos getUTCFullYear

}
document.write(calcularEdad(new Date(1975, 7 , 18)));

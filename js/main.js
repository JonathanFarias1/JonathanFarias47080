let montoInversion = 0;
let montoInversionInicial = 0;
let gananciaInversion = 0;
let montoAcumulado = 0;
let retornoCapital = 0;
let mesesInversion = 0;
let nombreUsuario;
let interesCompuesto = false;
let tasaInteresFija;
const impuestos = 0.12;
let inversiones = [];

function calcularGananciaMensual(monto, tasa) {
    return monto * tasa;
}

function calcularInversionesCompuestas(monto, meses, tasa) {
    let inversiones = [];
    for (let i = 0; i < meses; i++) {
        gananciaInversion = calcularGananciaMensual(monto, tasa);
        monto += gananciaInversion;
        montoAcumulado += gananciaInversion;
        retornoCapital = montoInversionInicial + montoAcumulado;
        inversiones.push({ Mes: i + 1, GananciaMensual: gananciaInversion, MontoAcumulado: montoAcumulado, RetornoCapital: retornoCapital });
    }
    return inversiones;
}

function obtenerInversionesConGananciaSuperior(inversiones, gananciaMinima) {
    return inversiones.filter(inversion => inversion.GananciaMensual > gananciaMinima);
}

alert("Bienvenido al inicio del Portal de Inversiones");
nombreUsuario = prompt("Hola, escribe tu nombre");
montoInversion = parseFloat(prompt("Gracias " + nombreUsuario + " Introduce tu monto a invertir en dólares"));
mesesInversion = parseInt(prompt("Gracias, para continuar coloca el número de meses de inversión. Puede ser 6 (tasa 2%), 12 (tasa 2.5%), o 24 (tasa 4.0%) meses."));
let compuesto = prompt("Gracias, nuestro modelo de inversión permite el interés compuesto. ¿Deseas aplicar interés compuesto? Escribe 'si' o 'no'");
alert("Trabajamos en tu tabla de amortización. Un momento, por favor.");
montoInversionInicial = montoInversion;

if (mesesInversion == 6) {
    tasaInteresFija = 0.02;
} else if (mesesInversion == 12) {
    tasaInteresFija = 0.025;
} else if (mesesInversion == 24) {
    tasaInteresFija = 0.04;
}

if (compuesto === "si") {
    interesCompuesto = true;
}

console.log("Interés Compuesto: " + interesCompuesto);

if (!interesCompuesto) {
    montoAcumulado = montoInversion * tasaInteresFija * mesesInversion;
    retornoCapital = montoInversion + montoAcumulado;
} else {
    inversiones = calcularInversionesCompuestas(montoInversion, mesesInversion, tasaInteresFija);
}

alert("Estimado " + nombreUsuario + ", tu tabla de amortización está lista:\n\n" +
    "Según los valores iniciales, al final del período tendrás un rendimiento de " + montoAcumulado.toFixed(2) + " USD.\n" +
    "Al final de " + mesesInversion + " meses, tendrás un monto total de " + retornoCapital.toFixed(2) + " USD");


const gananciaMinima = 100; 
const inversionesConGananciaSuperior = obtenerInversionesConGananciaSuperior(inversiones, gananciaMinima);
console.log("Inversiones con ganancia superior a " + gananciaMinima + ":");
console.log(inversionesConGananciaSuperior);
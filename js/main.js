
let montoInversion=0;
let montoinversionInicial=0;
let gananciaInversion=0;
let montoAcumulado=0;
let retornoCapital=0;
let mesesInversion=0;
let nombreUsuario;
let interesCompuesto=false;
let tasaInteresFija;
const impuestos=0.12;

alert("Bienvenido al inicio de Portal de Inversiones");
nombreUsuario= prompt("Hola Escribe tu nombre")
montoInversion= parseFloat(  prompt("Gracias " + nombreUsuario + " Introduze tu monto a invertir en dolares"))
mesesInversion= parseInt(prompt("Gracias, para continuar coloque el numero de meses de inversion, solo en numeros puede ser 6 (tasa 2%), 12 (tasa 2.5%), 24 (tasa 4.0%) meses, la tasa mostrada es mensual"));
let compuesto= prompt("Gracias, nuestro modelo de inversion permite realizar interes compuesto, lo cual nos permite tomar el interes generado el mes pasado y sumarlo a capital para invertir en el siguiente mes, desea que apliquemos interes compuesto?, solo escriba si o no")
alert("Trabajamos en su tabla de amortizacion un momento por favor.")
montoinversionInicial=montoInversion;
console.log("monto inversion "+ montoInversion);
console.log("meses inversion "+ mesesInversion);
console.log("compuesto "+ compuesto);

if(mesesInversion==6){
    tasaInteresFija=0.02
} else if(mesesInversion==12){
    tasaInteresFija=0.025
} else if(mesesInversion==24){
    tasaInteresFija=0.04
}

if(compuesto=="si"){
    interesCompuesto=true
}

console.log("Interes Compuesto: "+interesCompuesto)

if(interesCompuesto==false){

    montoAcumulado=montoInversion*tasaInteresFija*mesesInversion;
    console.log(montoAcumulado);
    retornoCapital=montoInversion+montoAcumulado;

}else{

   
    for(let i=0;i<mesesInversion;i++){

    montoInversion=montoInversion+gananciaInversion;
    console.log(montoInversion);
    gananciaInversion=(montoInversion*tasaInteresFija);
    console.log("Monto ganancia con Interes Compuesto " +gananciaInversion);
    montoAcumulado=montoAcumulado+gananciaInversion
    console.log("Monto Acumulado de Ganancias "+montoAcumulado)
    retornoCapital=montoinversionInicial+montoAcumulado;
    console.log("Monto retorno "+ retornoCapital);
 
} 


}

alert("Estimado "+nombreUsuario+"       Su tabla de amortizacion esta lista: en base a lo valores su inversion inicial tendra un rendimiento al final del periodo de " +montoAcumulado +" USD, Recibiendo al final del periodo de " +mesesInversion +" meses un monto total de "+retornoCapital+" USD")




document.addEventListener("DOMContentLoaded", function() {
    document.dispatchEvent(new Event("mostrarTablaResultado"));
});

document.addEventListener("mostrarTablaResultado", function() {
    const cantidadEquiposInput = document.getElementById("cantidadEquipos");
    const calcularButton = document.getElementById("calcular");
    const resultadoTable = document.getElementById("resultado");
    const resultadoBody = resultadoTable.querySelector("tbody");

    let costoEnergia = localStorage.getItem("costoEnergia") || 400;
    let costoRed = localStorage.getItem("costoRed") || 40;
    let costoManoObra = localStorage.getItem("costoManoObra") || 10;
    let costoPorTH = localStorage.getItem("costoPorTH") || 11.3;
    let terahashes = localStorage.getItem("terahashes") || 100;
    let precioEquipo = costoPorTH*terahashes;
    let valorBitcoin = localStorage.getItem("valorBitcoin") || 34000;
    let gananciaPorTH = localStorage.getItem("gananciaPorTH") || 0.00000215;
    let comisionHosting = localStorage.getItem("comisionHosting") || 0.20;
    let tipoCambio = localStorage.getItem("tipoCambio") || 18.13;


localStorage.setItem("costoEnergia", costoEnergia);
localStorage.setItem("costoRed", costoRed);
localStorage.setItem("costoManoObra", costoManoObra);
localStorage.setItem("costoPorTH", costoPorTH);
localStorage.setItem("terahashes", terahashes);
localStorage.setItem("valorBitcoin", valorBitcoin);
localStorage.setItem("gananciaPorTH", gananciaPorTH);
localStorage.setItem("comisionHosting", comisionHosting);
localStorage.setItem("tipoCambio", tipoCambio);



    const costoPorTHValor = document.getElementById("costoPorTHValor");
    const costoPorEquipo = document.getElementById("costoEquipo");
    const costoEnergiaPorEquipo = document.getElementById("costoEnergiaEquipo");
    const costoManoObraPorEquipo = document.getElementById("costoManoObraEquipo");
    const costoRedPorEquipo = document.getElementById("costoRedEquipo");
    const valorBTC = document.getElementById("valorBTC");
    const tcDolar = document.getElementById("tcDolar");


    costoPorTHValor.textContent = costoPorTH;
    costoPorEquipo.textContent =  precioEquipo.toLocaleString();
    costoEnergiaPorEquipo.textContent =  costoEnergia.toLocaleString();
    costoManoObraPorEquipo.textContent =  costoManoObra.toLocaleString();
    costoRedPorEquipo.textContent =  costoRed.toLocaleString();
    valorBTC.textContent =  valorBitcoin.toLocaleString();
    tcDolar.textContent =  tipoCambio.toLocaleString();






    calcularButton.addEventListener("click", function() {

        const cantidadEquipos = parseInt(cantidadEquiposInput.value);
        if (cantidadEquipos >= 1) {
            const totalPrecioEquipo = precioEquipo * cantidadEquipos;
            const totalCostoEnergetico = costoEnergia * cantidadEquipos;
            const totalCostoRed = costoRed * cantidadEquipos;
            const totalCostoManoObra = costoManoObra * cantidadEquipos;
            const totalCostoTotal = totalPrecioEquipo + totalCostoEnergetico + totalCostoRed + totalCostoManoObra;



            resultadoBody.innerHTML = `<tr>
                    <td>${cantidadEquipos.toLocaleString()}</td>
                    <td>$${totalPrecioEquipo.toLocaleString()}</td>
                    <td>$${totalCostoEnergetico.toLocaleString()}</td>
                    <td>$${totalCostoRed.toLocaleString()}</td>
                    <td>$${totalCostoManoObra.toLocaleString()}</td>
                    <td>$${totalCostoTotal.toLocaleString()}</td>
                </tr> `;

                resultadoTable.classList.remove("d-none");

                const gananciasDiario = cantidadEquipos * gananciaPorTH * terahashes;
                const comisionHostDiario = gananciasDiario * comisionHosting;
                const gananciasNetasDiario = gananciasDiario - comisionHostDiario;
    
                const gananciasSemanal = gananciasDiario * 7;
                const comisionHostSemanal = comisionHostDiario * 7;
                const gananciasNetasSemanal = gananciasSemanal - comisionHostSemanal;
    
                const gananciasMensual = gananciasDiario * 30;
                const comisionHostMensual = comisionHostDiario * 30;
                const gananciasNetasMensual = gananciasMensual - comisionHostMensual;
    
            const tablaGanancias = document.getElementById("tablaGanancias");
            tablaGanancias.classList.remove("d-none");

            const tablaGananciasBody = tablaGanancias.querySelector("tbody");
            tablaGananciasBody.innerHTML = `<tr>
                    <td>Diario</td>
                    <td>${gananciasDiario.toFixed(5)}</td>
                    <td>${comisionHostDiario.toFixed(5)}</td>
                    <td>${gananciasNetasDiario.toFixed(5)}</td>
                </tr>
                <tr>
                    <td>Semanal</td>
                    <td>${gananciasSemanal.toFixed(5)}</td>
                    <td>${comisionHostSemanal.toFixed(5)}</td>
                    <td>${gananciasNetasSemanal.toFixed(5)}</td>
                </tr>
                <tr>
                    <td>Mensual</td>
                    <td>${gananciasMensual.toFixed(5)}</td>
                    <td>${comisionHostMensual.toFixed(5)}</td>
                    <td>${gananciasNetasMensual.toFixed(5)}</td>
                </tr> `;

              
                const gananciasDiarioDolares = gananciasDiario * valorBitcoin;
                const comisionHostDiarioDolares = comisionHostDiario * valorBitcoin;
                const gananciasNetasDiarioDolares = gananciasNetasDiario * valorBitcoin;
    
                const gananciasSemanalDolares = gananciasSemanal * valorBitcoin;
                const comisionHostSemanalDolares = comisionHostSemanal * valorBitcoin;
                const gananciasNetasSemanalDolares = gananciasNetasSemanal * valorBitcoin;
    
                const gananciasMensualDolares = gananciasMensual * valorBitcoin;
                const comisionHostMensualDolares = comisionHostMensual * valorBitcoin;
                const gananciasNetasMensualDolares = gananciasNetasMensual * valorBitcoin;
    
                const tablaGananciasDolares = document.getElementById("tablaGananciasDolares");
                tablaGananciasDolares.classList.remove("d-none");
    
                const tablaGananciasDolaresBody = tablaGananciasDolares.querySelector("tbody");
                tablaGananciasDolaresBody.innerHTML = ` <tr>
                        <td>Diario</td>
                        <td>$${gananciasDiarioDolares.toLocaleString()}</td>
                        <td>$${comisionHostDiarioDolares.toLocaleString()}</td>
                        <td>$${gananciasNetasDiarioDolares.toLocaleString()}</td>
                    </tr>
                    <tr>
                        <td>Semanal</td>
                        <td>$${gananciasSemanalDolares.toLocaleString()}</td>
                        <td>$${comisionHostSemanalDolares.toLocaleString()}</td>
                        <td>$${gananciasNetasSemanalDolares.toLocaleString()}</td>
                    </tr>
                    <tr>
                        <td>Mensual</td>
                        <td>$${gananciasMensualDolares.toLocaleString()}</td>
                        <td>$${comisionHostMensualDolares.toLocaleString()}</td>
                        <td>$${gananciasNetasMensualDolares.toLocaleString()}</td>
                    </tr>    `;

                    const gananciasDiarioPesos = gananciasDiarioDolares * tipoCambio;
                    const comisionHostDiarioPesos = comisionHostDiarioDolares * tipoCambio;
                    const gananciasNetasDiarioPesos = gananciasNetasDiarioDolares * tipoCambio;
        
                    const gananciasSemanalPesos = gananciasSemanalDolares * tipoCambio;
                    const comisionHostSemanalPesos = comisionHostSemanalDolares * tipoCambio;
                    const gananciasNetasSemanalPesos = gananciasNetasSemanalDolares * tipoCambio;
        
                    const gananciasMensualPesos = gananciasMensualDolares * tipoCambio;
                    const comisionHostMensualPesos = comisionHostMensualDolares * tipoCambio;
                    const gananciasNetasMensualPesos = gananciasNetasMensualDolares * tipoCambio;

            const tablaGananciasPesos = document.getElementById("tablaGananciasPesos");
            tablaGananciasPesos.classList.remove("d-none");

            const tablaGananciasPesosBody = tablaGananciasPesos.querySelector("tbody");
            tablaGananciasPesosBody.innerHTML = ` <tr>
                    <td>Diario</td>
                    <td>$${gananciasDiarioPesos.toLocaleString()}</td>
                    <td>$${comisionHostDiarioPesos.toLocaleString()}</td>
                    <td>$${gananciasNetasDiarioPesos.toLocaleString()}</td>
                </tr>
                <tr>
                    <td>Semanal</td>
                    <td>$${gananciasSemanalPesos.toLocaleString()}</td>
                    <td>$${comisionHostSemanalPesos.toLocaleString()}</td>
                    <td>$${gananciasNetasSemanalPesos.toLocaleString()}</td>
                </tr>
                <tr>
                    <td>Mensual</td>
                    <td>$${gananciasMensualPesos.toLocaleString()}</td>
                    <td>$${comisionHostMensualPesos.toLocaleString()}</td>
                    <td>$${gananciasNetasMensualPesos.toLocaleString()}</td>
                </tr>`;

                const utilidadMensual = ((gananciasNetasMensualDolares / totalCostoTotal)*100).toFixed(2);
                const mesesRecuperacion = (totalCostoTotal/gananciasNetasMensualDolares).toFixed(0)

                const tablaUtilidades = document.getElementById("tablaUtilidades");
                tablaUtilidades.classList.remove("d-none");

                const tablaUtilidadesBody = tablaUtilidades.querySelector("tbody");
                tablaUtilidadesBody.innerHTML = ` <tr>
                <td>${utilidadMensual}%</td>
                <td>${mesesRecuperacion}</td>
            </tr>`




                const cotizacion = {
                    cantidadEquipos,
                    totalPrecioEquipo,
                    totalCostoEnergetico,
                    totalCostoRed,
                    totalCostoManoObra,
                    totalCostoTotal,
                    utilidadMensual,
                    mesesRecuperacion,
                    ganancias: {
                        diario: {
                            gananciasDiario,
                            comisionHostDiario,
                            gananciasNetasDiario
                        },
                        semanal: {
                            gananciasSemanal,
                            comisionHostSemanal,
                            gananciasNetasSemanal
                        },
                        mensual: {
                            gananciasMensual,
                            comisionHostMensual,
                            gananciasNetasMensual
                        }
                    },
                    gananciasDolares: {
                        diario: {
                            gananciasDiarioDolares,
                            comisionHostDiarioDolares,
                            gananciasNetasDiarioDolares
                        },
                        semanal: {
                            gananciasSemanalDolares,
                            comisionHostSemanalDolares,
                            gananciasNetasSemanalDolares
                        },
                        mensual: {
                            gananciasMensualDolares,
                            comisionHostMensualDolares,
                            gananciasNetasMensualDolares
                        }
                    },
                    gananciasPesos: {
                        diario: {
                            gananciasDiarioPesos,
                            comisionHostDiarioPesos,
                            gananciasNetasDiarioPesos
                        },
                        semanal: {
                            gananciasSemanalPesos,
                            comisionHostSemanalPesos,
                            gananciasNetasSemanalPesos
                        },
                        mensual: {
                            gananciasMensualPesos,
                            comisionHostMensualPesos,
                            gananciasNetasMensualPesos
                        }
                    }

                };

                const cotizacionJSON = JSON.stringify(cotizacion);

        localStorage.setItem("ultimaCotizacion", cotizacionJSON);



        } else {
            alert("Ingresa una cantidad válida de equipos.");
        }
    });
});


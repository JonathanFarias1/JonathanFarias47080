document.addEventListener("DOMContentLoaded", function() {
    const ultimaCotizacion = localStorage.getItem("ultimaCotizacion");

    if (ultimaCotizacion) {
        const cotizacion = JSON.parse(ultimaCotizacion);

        const cantidadEquipos = cotizacion.cantidadEquipos;
        const totalPrecioEquipo = cotizacion.totalPrecioEquipo;
        const totalCostoEnergetico = cotizacion.totalCostoEnergetico;
        const totalCostoRed = cotizacion.totalCostoRed;
        const totalCostoManoObra = cotizacion.totalCostoManoObra;
        const totalCostoTotal = cotizacion.totalCostoTotal;

        const utilidadMensual = cotizacion.utilidadMensual;
        const mesesRecuperacion = cotizacion.mesesRecuperacion;

        const gananciasDiario = cotizacion.ganancias.diario.gananciasDiario;
        const comisionHostDiario = cotizacion.ganancias.diario.comisionHostDiario;
        const gananciasNetasDiario = cotizacion.ganancias.diario.gananciasNetasDiario;

        const gananciasSemanal = cotizacion.ganancias.semanal.gananciasSemanal;
        const comisionHostSemanal = cotizacion.ganancias.semanal.comisionHostSemanal;
        const gananciasNetasSemanal = cotizacion.ganancias.semanal.gananciasNetasSemanal;

        const gananciasMensual = cotizacion.ganancias.mensual.gananciasMensual;
        const comisionHostMensual = cotizacion.ganancias.mensual.comisionHostMensual;
        const gananciasNetasMensual = cotizacion.ganancias.mensual.gananciasNetasMensual;

        const gananciasDiarioDolares = cotizacion.gananciasDolares.diario.gananciasDiarioDolares;
        const comisionHostDiarioDolares = cotizacion.gananciasDolares.diario.comisionHostDiarioDolares;
        const gananciasNetasDiarioDolares = cotizacion.gananciasDolares.diario.gananciasNetasDiarioDolares;

        const gananciasSemanalDolares = cotizacion.gananciasDolares.semanal.gananciasSemanalDolares;
        const comisionHostSemanalDolares = cotizacion.gananciasDolares.semanal.comisionHostSemanalDolares;
        const gananciasNetasSemanalDolares = cotizacion.gananciasDolares.semanal.gananciasNetasSemanalDolares;

        const gananciasMensualDolares = cotizacion.gananciasDolares.mensual.gananciasMensualDolares;
        const comisionHostMensualDolares = cotizacion.gananciasDolares.mensual.comisionHostMensualDolares;
        const gananciasNetasMensualDolares = cotizacion.gananciasDolares.mensual.gananciasNetasMensualDolares;

        const gananciasDiarioPesos = cotizacion.gananciasPesos.diario.gananciasDiarioPesos;
        const comisionHostDiarioPesos = cotizacion.gananciasPesos.diario.comisionHostDiarioPesos;
        const gananciasNetasDiarioPesos = cotizacion.gananciasPesos.diario.gananciasNetasDiarioPesos;

        const gananciasSemanalPesos = cotizacion.gananciasPesos.semanal.gananciasSemanalPesos;
        const comisionHostSemanalPesos = cotizacion.gananciasPesos.semanal.comisionHostSemanalPesos;
        const gananciasNetasSemanalPesos = cotizacion.gananciasPesos.semanal.gananciasNetasSemanalPesos;

        const gananciasMensualPesos = cotizacion.gananciasPesos.mensual.gananciasMensualPesos;
        const comisionHostMensualPesos = cotizacion.gananciasPesos.mensual.comisionHostMensualPesos;
        const gananciasNetasMensualPesos = cotizacion.gananciasPesos.mensual.gananciasNetasMensualPesos;


        let costoPorTH = localStorage.getItem("costoPorTH");
        let terahashes = localStorage.getItem("terahashes");
        let precioEquipo = costoPorTH*terahashes;
        let costoEnergia = localStorage.getItem("costoEnergia");
        let costoRed = localStorage.getItem("costoRed");
        let costoManoObra = localStorage.getItem("costoManoObra");
        let valorBitcoin = localStorage.getItem("valorBitcoin");
        let tipoCambio = localStorage.getItem("tipoCambio");


        document.getElementById("costoPorTHValor").textContent = costoPorTH;
        document.getElementById("costoEquipo").textContent = precioEquipo.toLocaleString();
        document.getElementById("costoEnergiaEquipo").textContent = costoEnergia;
        document.getElementById("costoManoObraEquipo").textContent = costoManoObra;
        document.getElementById("costoRedEquipo").textContent = costoRed;
        document.getElementById("valorBTC").textContent = valorBitcoin;
        document.getElementById("tcDolar").textContent = tipoCambio;
        

        const resultadoTable = document.getElementById("resultado");
        resultadoTable.classList.remove("d-none");
        const resultadoBody = resultadoTable.querySelector("tbody");
        resultadoBody.innerHTML = `<tr>
            <td>${cantidadEquipos}</td>
            <td>$${totalPrecioEquipo.toLocaleString()}</td>
            <td>$${totalCostoEnergetico.toLocaleString()}</td>
            <td>$${totalCostoRed.toLocaleString()}</td>
            <td>$${totalCostoManoObra.toLocaleString()}</td>
            <td>$${totalCostoTotal.toLocaleString()}</td>
        </tr> `;

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

        const tablaGananciasDolares = document.getElementById("tablaGananciasDolares");
        tablaGananciasDolares.classList.remove("d-none");
        const tablaGananciasDolaresBody = tablaGananciasDolares.querySelector("tbody");
        tablaGananciasDolaresBody.innerHTML = `<tr>
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
        </tr> `;

        const tablaGananciasPesos = document.getElementById("tablaGananciasPesos");
        tablaGananciasPesos.classList.remove("d-none");
        const tablaGananciasPesosBody = tablaGananciasPesos.querySelector("tbody");
        tablaGananciasPesosBody.innerHTML = `<tr>
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
        </tr> `;

        const tablaUtilidades = document.getElementById("tablaUtilidades");
        tablaUtilidades.classList.remove("d-none");

        const tablaUtilidadesBody = tablaUtilidades.querySelector("tbody");
        tablaUtilidadesBody.innerHTML = ` <tr>
        <td>${utilidadMensual}%</td>
        <td>${mesesRecuperacion}</td>
    </tr>`
    }
});

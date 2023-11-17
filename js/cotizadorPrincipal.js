

function calcularInversion() {
    const nombreUsuario = document.getElementById('nombre').value;
    const montoInversion = parseFloat(document.getElementById('montoInversion').value);
    const mesesInversion = parseInt(document.getElementById('mesesInversion').value);
    const compuesto = document.getElementById('compuesto').value;

    let interesCompuesto = false;
    let tasaInteresFija;

    if (mesesInversion === 6) {
        tasaInteresFija = 0.02;
    } else if (mesesInversion === 12) {
        tasaInteresFija = 0.025;
    } else if (mesesInversion === 24) {
        tasaInteresFija = 0.04;
    }

    if (compuesto === 'si') {
        interesCompuesto = true;
    }

    let montoAcumulado = 0;
    let retornoCapital = 0;

    if (!interesCompuesto) {
        montoAcumulado = montoInversion * tasaInteresFija * mesesInversion;
        retornoCapital = montoInversion + montoAcumulado;
    } else {
        let inversiones = [];
        let monto = montoInversion;

        for (let i = 0; i < mesesInversion; i++) {
            let gananciaInversion = monto * tasaInteresFija;
            monto += gananciaInversion;
            montoAcumulado += gananciaInversion;
            retornoCapital = montoInversion + montoAcumulado;
            inversiones.push({ Mes: i + 1,GananciaMensual: gananciaInversion, MontoAcumulado: montoAcumulado, RetornoCapital: retornoCapital });
        }

        console.log('Inversiones con interés compuesto:', inversiones);


        console.log('Estimado ' + nombreUsuario + ', al final del período tendrás un rendimiento de ' + montoAcumulado.toFixed(2) + ' USD.');
        console.log('Al final de ' + mesesInversion + ' meses, tendrás un monto total de ' + retornoCapital.toFixed(2) + ' USD.');
    

        

        const tablaAmortizacionDiv = document.getElementById('tablaAmortizacion');

        const table = document.createElement('table');
        table.classList.add('table');
        table.classList.add('table', 'table-striped', 'table-bordered');

    
        const thead = document.createElement('thead');
        thead.classList.add('thead-dark');

        const trHead = document.createElement('tr');
        trHead.innerHTML = '<th>Mes</th><th>Ganancia Mensual</th><th>Monto Acumulado</th><th>Retorno de Capital</th>';
        thead.appendChild(trHead);
        table.appendChild(thead);
    
        const tbody = document.createElement('tbody');
        inversiones.forEach(inversion => {
            const tr = document.createElement('tr');
            tr.innerHTML = `<td>${inversion.Mes}</td><td>${numeroComas(inversion.GananciaMensual.toFixed(2).toLocaleString())}</td><td>${numeroComas(inversion.MontoAcumulado.toFixed(2).toLocaleString())}</td><td>${numeroComas(inversion.RetornoCapital.toFixed(2).toLocaleString())}</td>`;
            tbody.appendChild(tr);
        });
    
        table.appendChild(tbody);
    
        tablaAmortizacionDiv.innerHTML = ''; 
        tablaAmortizacionDiv.appendChild(table);



    console.log(retornoCapital);
    console.log(montoInversion);
    

    const resultadoTable = document.getElementById("bases");
    resultadoTable.classList.remove("d-none");
    const resultadoBody = resultadoTable.querySelector("tbody");
    resultadoBody.innerHTML = `<tr>
        <td>$${montoInversion.toLocaleString()}</td>
        <td>$${retornoCapital.toLocaleString()}</td>
    </tr> `;

    }
}



function numeroComas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


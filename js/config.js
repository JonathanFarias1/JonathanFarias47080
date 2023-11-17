document.addEventListener("DOMContentLoaded", function() {
    const contenidoActualizacion = document.getElementById("contenidoActualizacion");

 

    let valoresLocalStorage = {
        costoEnergia: localStorage.getItem("costoEnergia"),
        costoRed: localStorage.getItem("costoRed"),
        costoManoObra: localStorage.getItem("costoManoObra"),
        costoPorTH: localStorage.getItem("costoPorTH"),
        terahashes: localStorage.getItem("terahashes"),
        valorBitcoin: localStorage.getItem("valorBitcoin"),
        gananciaPorTH: localStorage.getItem("gananciaPorTH"),
        comisionHosting: localStorage.getItem("comisionHosting"),
        tipoCambio: localStorage.getItem("tipoCambio")
    };


    const clearLocalStorage = () => {
        Object.keys(valoresLocalStorage).forEach(key => {
            if (valoresLocalStorage[key] === 'null' || valoresLocalStorage[key] === null || isNaN(valoresLocalStorage[key])) {
                localStorage.removeItem(key);
            }
        });
    };

    clearLocalStorage(); 

    const formularios = {
        costoEnergia: document.getElementById("costoEnergia"),
        costoRed: document.getElementById("costoRed"),
        costoManoObra: document.getElementById("costoManoObra"),
        costoPorTH: document.getElementById("costoPorTH"),
        terahashes: document.getElementById("terahashes"),
        valorBitcoin: document.getElementById("valorBitcoin"),
        gananciaPorTH: document.getElementById("gananciaPorTH"),
        comisionHosting: document.getElementById("comisionHosting"),
        tipoCambio: document.getElementById("tipoCambio")
    };

    contenidoActualizacion.addEventListener("submit", function(evento) {
        evento.preventDefault();

        Object.keys(valoresLocalStorage).forEach(key => {
            valoresLocalStorage[key] = formularios[key].value;
            localStorage.setItem(key, valoresLocalStorage[key]);
        });

        alert("Valores guardados correctamente.");
        window.location.href = "../pages/cotizadorMaquinas.html";
    });


    Object.keys(valoresLocalStorage).forEach(key => {
        if (!valoresLocalStorage[key]) {
            fetch('../config.json')
                .then(response => response.json())
                .then(data => {
                    valoresLocalStorage[key] = parseFloat(data[key]);
                    formularios[key].value = valoresLocalStorage[key];
                    localStorage.setItem(key, valoresLocalStorage[key]);
                })
                .catch(error => console.log('Error al obtener el archivo JSON:', error));
        } else {
            valoresLocalStorage[key] = parseFloat(valoresLocalStorage[key]);
            formularios[key].value = valoresLocalStorage[key];
        }
    }); 

    
});

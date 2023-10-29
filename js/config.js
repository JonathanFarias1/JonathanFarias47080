
document.addEventListener("DOMContentLoaded", function() {
    const contenidoActualizacion = document.getElementById("contenidoActualizacion");

        let costoEnergia = localStorage.getItem("costoEnergia") || 400;
        let costoRed = localStorage.getItem("costoRed") || 40;
        let costoManoObra = localStorage.getItem("costoManoObra") || 10;
        let costoPorTH = localStorage.getItem("costoPorTH") || 11.3;
        let terahashes = localStorage.getItem("terahashes") || 100;
        let valorBitcoin = localStorage.getItem("valorBitcoin") || 34000;
        let gananciaPorTH = localStorage.getItem("gananciaPorTH") || 0.00000215;
        let comisionHosting = localStorage.getItem("comisionHosting") || 0.0;
        let tipoCambio = localStorage.getItem("tipoCambio") || 18.13;

        const costoEnergiaForm = document.getElementById("costoEnergia");
        const costoRedForm = document.getElementById("costoRed");
        const costoManoObraForm = document.getElementById("costoManoObra");
        const costoPorTHForm = document.getElementById("costoPorTH");
        const terahashesForm = document.getElementById("terahashes");
        const valorBitcoinForm = document.getElementById("valorBitcoin");
        const gananciaPorTHForm = document.getElementById("gananciaPorTH");
        const comisionHostingForm = document.getElementById("comisionHosting");
        const tipoCambioForm = document.getElementById("tipoCambio");


        costoEnergiaForm.value = costoEnergia;
        costoRedForm.value = costoRed;
        costoManoObraForm.value = costoManoObra;
        costoPorTHForm.value = costoPorTH;
        terahashesForm.value = terahashes;
        valorBitcoinForm.value = valorBitcoin;
        gananciaPorTHForm.value = gananciaPorTH;
        comisionHostingForm.value = comisionHosting;
        tipoCambioForm.value = tipoCambio;


        contenidoActualizacion.addEventListener("submit", function(evento) {
        evento.preventDefault();

        costoEnergia = costoEnergiaForm.value;
        costoRed = costoRedForm.value;
        costoManoObra = costoManoObraForm.value;
        costoPorTH = costoPorTHForm.value;
        terahashes = terahashesForm.value;
        valorBitcoin = valorBitcoinForm.value;
        gananciaPorTH = gananciaPorTHForm.value;
        comisionHosting = comisionHostingForm.value;
        tipoCambio = tipoCambioForm.value;


        localStorage.setItem("costoEnergia", costoEnergia);
        localStorage.setItem("costoRed", costoRed);
        localStorage.setItem("costoManoObra", costoManoObra);
        localStorage.setItem("costoPorTH", costoPorTH);
        localStorage.setItem("terahashes", terahashes);
        localStorage.setItem("valorBitcoin", valorBitcoin);
        localStorage.setItem("gananciaPorTH", gananciaPorTH);
        localStorage.setItem("comisionHosting", comisionHosting);
        localStorage.setItem("tipoCambio", tipoCambio);

        alert("Valores guardados correctamente.");

            window.location.href = "../pages/cotizadorMaquinas.html"; 

    });
});


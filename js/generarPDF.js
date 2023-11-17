const botonGenerarPDF = document.getElementById('generar-pdf');

botonGenerarPDF.addEventListener('click', () => {
  const elementoParaConvertir = document.body;
  const opciones = {
    margin: 5,
    filename: 'mi-documento.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };

  html2pdf()
    .from(elementoParaConvertir)
    .set(opciones)
    .toPdf()
    .get('pdf')
    .then(pdf => {
      const blob = new Blob([pdf.output('blob')], { type: 'application/pdf' });

      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = opciones.filename;
      link.click();
    });
});
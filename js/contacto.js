const formulario = document.querySelector('#formulario');
const mailDefault = document.querySelector('#mailDefault')

formulario.addEventListener('submit',enviar)

function enviar(evento){

    evento.preventDefault();
    const form = new FormData(this);
    console.log(form.get('nombreCompleto'));
    mailDefault.setAttribute('href',`mailto:jfarias@dssayhello.com?subject= nombre: ${form.get('nombreCompleto')} correo:  ${form.get('correoElectronico')}&body=${form.get('mensaje')}`)
    mailDefault.click();
    formulario.reset();

}
const $form = document.getElementById('form')
const $notificacion = document.getElementById('notificacion')

$form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    if (!$form.nombre.value || !$form.correo.value || !$form.celular.value) {
        $notificacion.classList.add('warning')
    } 
    else {
        const nombre = $form.nombre.value;
        const correo = $form.correo.value;
        const mensaje = $form.celular.value;
    
        localStorage.setItem('nomnbre', nombre)
        localStorage.setItem('correo', correo)
        localStorage.setItem('mensaje', celular)

        $form.reset();
    }  
}
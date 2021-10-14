$(document).ready( () => {
    $('#input-tarea').trigger('focus')
})

let contadorTareas = 1

$('#form-tareas').submit( (event) => {
    event.preventDefault()

    const val = $('#input-tarea').val().trim()
    const fyh = new Date().toLocaleString()

    if (val.length > 3) {

        $('#listado').prepend(`
            <li id="tarea${contadorTareas}">
                <h4>Tarea: ${val}</h4>
                <p>Creada el: ${fyh}</p>
                <button id="eliminar${contadorTareas}">Eliminar</button>
            </li>
        `)

        const li = $(`#tarea${contadorTareas}`)

        $(`#eliminar${contadorTareas}`).click( () => {
            li.remove()
        })


        $('#input-tarea').val('')
        $('#input-tarea').trigger('focus')

        contadorTareas++
    }

} )


$('#input-tarea').on('input', () => {
    const val = $('#input-tarea').val().trim()

    if ( val.length <= 3 ) {
        $('#input-tarea').addClass('invalido')
        $('#input-tarea').removeClass('valido')
    } else {
        $('#input-tarea').addClass('valido')
        $('#input-tarea').removeClass('invalido')
    }

})
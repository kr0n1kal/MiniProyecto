document.addEventListener('DOMContentLoaded', () => {
    const bookingForm = document.querySelector('.booking-form');
    const reservasLista = document.querySelector('.reservas-list');
    const statDisponibles = document.querySelector('.stat-box.available .stat-number');
    const statActivas = document.querySelector('.stat-box.active .stat-number');

    // Estado inicial basado en el HTML
    let aulasDisponibles = 15;
    let reservasActivas = 3;

    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Evita que la página se recargue

        // Obtener los valores seleccionados en el formulario
        const aulaSelect = document.getElementById('aula');
        const aulaNombre = aulaSelect.options[aulaSelect.selectedIndex].text;
        const fecha = document.getElementById('fecha').value;
        const hora = document.getElementById('hora').value;

        // Validar que los campos no estén vacíos
        if (!fecha || !hora) {
            alert('Por favor, completa la fecha y la hora para la reservación.');
            return;
        }

        // Crear el nuevo elemento de lista para "Mis Reservas"
        const nuevoLi = document.createElement('li');
        nuevoLi.innerHTML = `
            <span class="reserva-aula">${aulaNombre}</span>
            <span class="reserva-fecha">Fecha: ${fecha}</span>
            <span class="reserva-hora">Horario: ${hora}</span>
        `;

        // Agregar la reserva a la lista
        reservasLista.appendChild(nuevoLi);

        // Actualizar contadores del Dashboard de forma dinámica
        reservasActivas++;
        aulasDisponibles = Math.max(0, aulasDisponibles - 1);

        statActivas.textContent = reservasActivas;
        statDisponibles.textContent = aulasDisponibles;

        // Limpiar formulario y dar aviso de éxito
        bookingForm.reset();
        alert('¡Reserva realizada con éxito!');
    });
});
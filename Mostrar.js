function mostrarDatos() {
    const nombres = document.getElementById('nombres').value;
    const apellidos = document.getElementById('apellidos').value;
    const celular = document.getElementById('celular').value;
    const email = document.getElementById('email').value;
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;
    const mensaje = document.getElementById('mensaje').value;

    alert(`Nombres: ${nombres}\nApellidos: ${apellidos}\nCelular: ${celular}\nCorreo Electrónico: ${email}\nFecha de Nacimiento: ${fechaNacimiento}\nMensaje: ${mensaje}`);
}

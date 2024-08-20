
let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contrasena = document.getElementById('contrasena');

const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+abcdefghijklmnopqrstuvwxyz0123456789';


function generar(){

    let numeroDigitado = parseInt(cantidad.value);
    console.log(numeroDigitado);
    
    if (isNaN(numeroDigitado)) {
        alert('Debe ingresar un número válido');
        return;
    }

    if (numeroDigitado < 6) {
        alert('La contraseña debe tener 6 o más caracteres');
        return;
    }

    
    let password = '';
    for(let i = 0; i < numeroDigitado; i++ ) {

        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        
        password += caracterAleatorio;
        console.log('Contraseña construida: ' + password);
    
    }
    contrasena.value = password;
} 










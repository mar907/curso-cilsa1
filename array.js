var persona = {
    nombre: 'Maria  Veronica',
    apellido: 'Ferandez',
    edad: 31,
    ciudad: 'Mar del Plata'
};
const { nombre, apellido, edad, ciudad} = persona

frase = ` Mi nombre es: ${nombre} <br>
Mi apellido es: ${apellido} <br>
Mi edad es: ${edad}<br>
Mi ciudad es: ${ciudad}`


document.write (frase);

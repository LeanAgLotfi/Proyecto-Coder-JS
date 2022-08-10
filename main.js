
let usuario = prompt("Ingrese un Nombre:")

function ingresarUsuario() {
    
    alert('El usuario ingresado es: '+ usuario)
}
ingresarUsuario()

function saludo() {
    alert('Bienvenido '+ usuario)
}

function usuarioCorrecto(){
    alert('Es correcto su nombre de usuario?')
        let decision = prompt("si o no")

    while (decision == "no"){
        let pregunta = prompt("Cual es tu nombre?:")
        alert("Bienvenido "+ pregunta)
        break;
    }
    if(decision == "si"){
        saludo()
    }
}

usuarioCorrecto()
//ARRAY
const arrayProductos = ['don quijote', 'moby dick', 'fantasma de la opera', 'it', 'harry potter', 'el señor de los anillos',  'orgullo y prejuicio', 'bajo la misma estrella', 'crimen de la calle morgue', 'sherlock holmes']


const aventura = arrayProductos.slice(0, 2);
console.log(aventura);

const terror = arrayProductos.slice(2, 4);
console.log(terror);

const fantasia = arrayProductos.slice(4, 6);
console.log(fantasia);

const romance = arrayProductos.slice(6, 8);
console.log(romance);

const misterio = arrayProductos.slice(8, 9);
console.log(misterio);

//CLASS
class Producto {
    constructor(nombre, precio){
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        
    }
    sumaIva(){
        this.precio = this.precio * 1.21;
    }
}
//OBJETOS
const pruducto1 = new Producto("don quijote", "300");
const pruducto2 = new Producto("harry potter", "400");
const pruducto3 = new Producto("fantasma de la opera", "150");
const pruducto4 = new Producto("sherlok holmes", "100");
console.log(pruducto1.sumaIva());
console.log(pruducto2.sumaIva());
console.log(pruducto3.sumaIva());

console.table(arrayProductos);

//FOREACH
arrayProductos.forEach( (books)=>{
    console.log(books);
})

//MAP
const biblioteca = [
    {nombre: 'don quijote', precio:200},
    {nombre: 'moby dick', precio:120},
    {nombre: 'fantasma de la opera', precio:100},
    {nombre: 'it', precio:700},
    {nombre: 'harry potter', precio:800},
    {nombre: 'el señor de los anillos', precio:500},
    {nombre: 'orgullo y prejuicio', precio:250},
    {nombre: 'bajo la misma estrella', precio:120},
    {nombre: 'crimen de la calle morgue', precio:400},
    {nombre: 'sherlock holmes', precio:250},
]

const libros = biblioteca.map((el) => el.libros)
console.log(libros);

const actualizado = biblioteca.map((el) => { 
    return {
        nombre: el.nombre,
        precio: el.precio * 1.25
    }
})

console.log(actualizado);



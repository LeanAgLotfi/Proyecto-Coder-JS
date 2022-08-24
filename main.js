const ulFiltro = document.getElementById('filtros');

//ARRAY DE OBJETOS
const arrayDelibros = []

const arrayLibros = [
    {   nombre: 'don quijote',
        precio:200,
        id:1,
    },

    {   nombre: 'moby dick', 
        precio:120,
        id:2
    },

    {   nombre: 'fantasma de la opera',
        precio:100,
        id:3,
    },

    {   nombre: 'it', 
        precio:700,
        id:4,
    },

    {   nombre: 'harry potter',
        precio:800,
        id:5,
    },

    {   nombre: 'el señor de los anillos',
        precio:500,
        id:6,
    },

    {   nombre: 'orgullo y prejuicio', 
        precio:250,
        id:7,
    },

    {   nombre: 'bajo la misma estrella', 
        precio:120,
        id:8,
    },

    {   nombre: 'crimen de la calle morgue', 
        precio:400,
        id:9,
    },

    {   nombre: 'sherlock holmes', 
        precio:250,
        id: 10,
    },
]

const libros = ['don quijote', 'moby dick', 'fantasma de la opera', 'it', 'harry potter', 'el señor de los anillos',  'orgullo y prejuicio', 'bajo la misma estrella', 'crimen de la calle morgue', 'sherlock holmes']


const fragment = document.createDocumentFragment()


libros.forEach( (libro) => {
    const li = document.createElement('li')
    li.textContent = libro
    fragment.appendChild(li)
})

ulFiltro.appendChild(fragment);

const contenido = document.querySelector(".contenido");
const carritoDiv = document.getElementById("carrito");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function contenidoCarta() {
    arrayLibros.forEach((prod) => {
        contenido.innerHTML += `<div id="libros" style="padding: 20px; background-color:orange; border: 2px solid black;">
        <h4>${prod.nombre}</h4>
        <p>$${prod.precio}</p>
        <button class="btnCarrito" id="btn-agregar${prod.id}">Agregar</button>
        </div>`;
    });
}


contenidoCarta();

    const productos = [
        {   nombre: 'don quijote',
            precio:200,
            id:1,
        },
    
        {   nombre: 'moby dick', 
            precio:120,
            id:2
        },
    
        {   nombre: 'fantasma de la opera',
            precio:100,
            id:3,
        },
    
        {   nombre: 'it', 
            precio:700,
            id:4,
        },
    
        {   nombre: 'harry potter',
            precio:800,
            id:5,
        },
    
        {   nombre: 'el señor de los anillos',
            precio:500,
            id:6,
        },
    
        {   nombre: 'orgullo y prejuicio', 
            precio:250,
            id:7,
        },
    
        {   nombre: 'bajo la misma estrella', 
            precio:120,
            id:8,
        },
    
        {   nombre: 'crimen de la calle morgue', 
            precio:400,
            id:9,
        },
    
        {   nombre: 'sherlock holmes', 
            precio:250,
            id: 10,
        },
    ]
     /* 
      const containerDiv = document.getElementById("conteiner");
      const carritoDiv = document.getElementById("carrito");
      
      let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
      
      function crearCards() {
        productos.forEach((prod) => {
          containerDiv.innerHTML += `<div style="padding: 20px; background-color:orange; border: 2px solid black;">
              <h4>${prod.nombre}</h4>
              <p>$${prod.precio}</p>
              <button class="btnCarrito" id="btn-agregar${prod.id}">Agregar</button>
              </div>`;
        });
        agregarFuncionalidad();
      }
      
      function agregarFuncionalidad() {
        productos.forEach((prod) => {
          document
            .querySelector(`#btn-agregar${prod.id}`)
            .addEventListener("click", () => {
              console.log(prod);
              agregarAlCarrito(prod);
            });
        });
      }
      
      function agregarAlCarrito(prod) {
        let existe = carrito.some((productoSome) => productoSome.id === prod.id);
        if (existe === false) {
          prod.cantidad = 1;
          carrito.push(prod);
        } else {
          let prodFind = carrito.find((productoFind) => productoFind.id === prod.id);
          prodFind.cantidad++;
          //prod.cantidad++
        }
        //carrito.push(prod);
        console.log(carrito);
        renderizarCarrito();
      }
      
      function renderizarCarrito() {
        carritoDiv.innerHTML = "";
        carrito.forEach((prod) => {
          carritoDiv.innerHTML += `<div style="padding: 20px; background-color:green; border: 2px solid black;">
              <h4>${prod.nombre}</h4>
              <p>CANTIDAD: ${prod.cantidad}</p>
              <button class="btnCarrito" id="btn-borrar${prod.id}">Borrar</button>
              <button class="btnCarrito" id="btn-menos${prod.id}">-</button>
              </div>`;
        });
        localStorage.setItem("carrito", JSON.stringify(carrito));
        borrarProducto();
      }
      
      function borrarProducto() {
        carrito.forEach((prod) => {
          document
            .querySelector(`#btn-borrar${prod.id}`)
            .addEventListener("click", () => {
              carrito = carrito.filter(
                (productoFilter) => productoFilter.id !== prod.id
              );
              renderizarCarrito();
            });
        });
      }
      
      crearCards();
      renderizarCarrito();*/







/*let usuario = prompt("Ingrese un Nombre:")

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

let counter = 1;

setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4){
        counter = 1; 
    }
}, 5000);

function verificar(){
    for(let i = 0; i < 20; i++)
    document.getElementById('btn$')
    alert(`seleccionaste ${i} de elementos`)
}*/












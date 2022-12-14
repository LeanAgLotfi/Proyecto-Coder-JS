const stockProductos= 
[
    {   nombre: 'don quijote',
        precio:200,
        desc:'Las aventuras de Don quijote y Sancho panza en una encrucijada por la mancha',
        genero:'Aventura',
        img:'./imagenes/libro-1-array.png',
        id:1,
    },

    {   nombre: 'moby dick', 
        precio:120,
        desc:'Una historia de marinos en busca del tesoro mas grande, capturar a "la gran ballena blanca"',
        genero:'Aventura',
        img:'./imagenes/libro-2-array.png',
        id:2
    },

    {   nombre: 'fantasma de la opera',
        precio:100,
        desc:'Un hombre atormentado cuyo rostro, deformado de nacimiento, le otorgaba el aspecto de una verdadera aparición en el subterraneo de la opera',
        genero:'Terror',
        img:'./imagenes/libro-3-array.png',
        cantidad:1,
        id:3,
    },

    {   nombre: 'it', 
        precio:700,
        desc:'El payaso maligno venido del espacio solo para aterrorizar y deborar',
        genero:'Terror',
        img:'./imagenes/libro-4-array.png',
        cantidad:1,
        id:4,
    },

    {   nombre: 'harry potter',
        precio:800,
        desc:'La historia del gran mago Harry Potter y sus aventuras por Howards',
        genero:'Fantasia',
        img:'./imagenes/libro-5-array.png',
        cantidad:1,
        id:5,
    },

    {   nombre: 'el señor de los anillos',
        precio:500,
        desc:'La encrucijada mas grande y la posible guerra por el poder del anillo y su deseo de poseerlo!',
        genero:'Fantasia',
        img:'./imagenes/libro-6-array.png',
        cantidad:1,
        id:6,
    },

    {   nombre: 'orgullo y prejuicio', 
        precio:250,
        desc:'Narra las aventuras y desventuras amorosas de las hermanas Bennet, centrándose en el personaje de Elizabeth',
        genero:'Romance',
        img:'./imagenes/libro-7-array.png',
        id:7,
    },

    {   nombre: 'bajo la misma estrella', 
        precio:120,
        desc:' Una adolescente de 16 años de edad llamada Hazel Grace Lancaster, quien padece cáncer de tiroides, se enamora de un ex jugador de basquet que reside en el mismo hospital',
        genero:'Romance',
        img:'./imagenes/libro-8-array.png',
        id:8,
    },

    {   nombre: 'crimen de la calle morgue', 
        precio:400,
        desc:'Un joven francés le llama la atención un informe periodístico sobre un misterioso doble asesinato en París. Junto con un amigo, estudia todos los testimonios y examina la escena del crimen.',
        genero:'Policial',
        img:'./imagenes/libro-9-array.png',
        id:9,
    },

    {   nombre: 'sherlock holmes', 
        precio:250,
        desc:'Las Grandes aventuras de Sherlock y Watson resolviendo misterios por las calles de Londres',
        genero:'Policial',
        img:'./imagenes/libro-10-array.png',
        id: 10,
    }
];
const body = document.getElementById('contenedorPrincipal');
const productoCarrito = document.getElementById("contenido");

const contenedorCarrito = document.getElementsByClassName("carrito-contenedor");
const contadorCarrito = document.querySelector('.spanC');
const precioTotal = document.getElementById("precioTotal");
const modal = document.getElementsByClassName('modal-container');
//const open = document.getElementsByClassName('boton-agregar')
//const close = document.getElementById('close');
let carrito = [];


function stock(){
    stockProductos.forEach((productos) => {
        const div = document.createElement('div')
         div.classList.add('producto')
         div.innerHTML += `
                <img  class="imgLibros" src="${productos.img}" alt="">
                <h3>${productos.nombre}</h3>
                <p>${productos.desc}</p>
                <p>${productos.genero}</p>
                <p class="precioProductos">Precio:$${productos.precio}</p>
                <button id="agregarBtn${productos.id}" class="boton-agregar">Agregar</button>
                `
           productoCarrito.appendChild(div);
           //document.querySelector(`#agregarBtn${productos.id}`).addEventListener('click', () =>{
            //modal.classList.add('show');
        // });
    });
     funcionBoton();
}

function modalStock() {
    stockProductos.forEach((productos) => {
        const div = document.createElement('div')
        div.classList.add('modal-container')
        div.innerHTML += `
        <div class="modal">
          <h1>${productos.nombre} Libro</h1>
          <img src="${productos.img}" class="imgLibros" alt="">
          <p></p>
          <button class="boton-agregar" id="cerrar${productos.id}">CERRAR</button>
        `
        productoCarrito.appendChild(div);
            document.querySelector(`#cerrar${productos.id}`).addEventListener('click', () =>{
               modal.classList.remove('show');
            });
    });
   
}

let total = 0;

const pagar = document.getElementById('pagar');
//boton cerrar

//abrir
//open.addEventListener('click', () =>{
    //  modal.classList.add('show');});

function funcionBoton(){
    stockProductos.forEach((productos) => {
        document
          .querySelector(`#agregarBtn${productos.id}`)
          .addEventListener("click", () => {
            console.log(productos);
            
           agregarAlCarrito(productos);
          });
      })
    }

function agregarAlCarrito(productos) {
   let existe = carrito.some(prodSome => prodSome.id === productos.id) 
   if(existe === false){
    productos.cantidad = 1;
    carrito.push(productos);
   }else{
    let prodFind = carrito.find(productosFind => productosFind.id === productos.id)
    prodFind.cantidad++
   }
   contadorCarrito.innerText = carrito.length; 
   localStorage.setItem("carrito", JSON.stringify(carrito));
}



//modalStock();
stock();





const Clickbutton = document.querySelectorAll('.button');
const tbody = document.querySelector('.tbody')
let carrito = []


Clickbutton.forEach(btn =>{
    btn.addEventListener('click', addCarritoItem)
})

Clickbutton.forEach(btn => {
        btn.addEventListener('click', () =>{
    Toastify({

        text: "Agregado al carrito!",
        
        duration: 3000
        
        }).showToast();
    })
})

function addCarritoItem(e){
    const button = e.target
    const item = button.closest('.card')
    const itemTitle = item.querySelector('.card-title').textContent;
    const itemPrice = item.querySelector('.precio').textContent;
    const itemImg = item.querySelector('.card-img-top').src;

    const newItem = {
        title : itemTitle,
        precio :itemPrice,
        img : itemImg,
        cantidad : 1,
    }

    addItemCarrito(newItem)
}

function addItemCarrito(newItem){

    const InputElemento = tbody.getElementsByClassName('input__elemento')

for(let i =0; i < carrito.length; i++){
    if(carrito[i].title.trim() === newItem.title.trim()){
      carrito[i].cantidad ++;
        const InputValue = InputElemento[i]
        InputValue.value++;
        CarritoTotal()
      return null;
    }
}

    carrito.push(newItem)
    renderCarrito()
}

function renderCarrito(){
    tbody.innerHTML = ''
    carrito.map(item  =>{
        const tr = document.createElement('tr')
        tr.classList.add('ItemCarrito')
        const Content = `
        <th scope="row">1</th>
        <td class="table__producto">
            <img src=${item.img} alt="">
            <h6 class="title">${item.title}</h6>
        </td>
        <td class="table__precio"><p>${item.precio}</p></td>
        <td class="table__cantidad">
            <input type="number" min="1" value="${item.cantidad}" class="input__elemento">
            <button class="delete btn btn-danger">X</button>
        </td>`

        tr.innerHTML = Content;
        tbody.appendChild(tr)

        tr.querySelector('.delete').addEventListener('click', removeItemCarrito)
        tr.querySelector('.input__elemento').addEventListener('change', sumaCantidad)
    })
    CarritoTotal()
}


function CarritoTotal(){
let Total = 0;
const itemCartTotal = document.querySelector('.itemCartTotal')
carrito.forEach((item) =>{
    const precio = Number(item.precio.replace("$", ''))
    Total = Total + precio*item.cantidad
})

itemCartTotal.innerHTML = `Total $${Total}`
esLocalStorage()

}

function removeItemCarrito(e){
    const buttonDelete = e.target
    const tr = buttonDelete.closest(".ItemCarrito")
    const title = tr.querySelector('.title').textContent;
    for(let i=0; i<carrito.length ; i++){
  
      if(carrito[i].title.trim() === title.trim()){
        carrito.splice(i, 1)
      }
    }
    tr.remove()
    CarritoTotal()
}

function sumaCantidad(e){
    const suma = e.target
    const tr = suma.closest(".ItemCarrito")
    const title = tr.querySelector('.title').textContent;
    carrito.forEach(item =>{
        if(item.title.trim() === title){
            suma.value < 1 ? (suma.value = 1) : suma.value;
            item.cantidad = suma.value;
            CarritoTotal()
        }
    })

}

function esLocalStorage(){
    localStorage.setItem('carrito', JSON.stringify(carrito))
}


window.onload = function(){
    const storage = JSON.parse(localStorage.getItem('carrito'));
    if(storage){
        carrito = storage;
        renderCarrito()
    }
}

Toastify({

    text: "This is a toast",
    
    duration: 3000
    
    }).showToast();





















const stockProductos= 
[
    {   nombre: ' don quijote',
        precio:200,
        desc:'Las aventuras de Don quijote y Sancho panza en una encrucijada por la mancha',
        genero:'Aventura',
        img:'./imagenes/libro-1-array.png',
        id:1,
    },

    {   nombre: ' moby dick', 
        precio:120,
        desc:'Una historia de marinos en busca del tesoro mas grande, capturar a "la gran ballena blanca"',
        genero:'Aventura',
        img:'./imagenes/libro-2-array.png',
        id:2
    },

    {   nombre: ' fantasma de la opera',
        precio:100,
        desc:'Un hombre atormentado cuyo rostro, deformado de nacimiento, le otorgaba el aspecto de una verdadera aparición en el subterraneo de la opera',
        genero:'Terror',
        img:'./imagenes/libro-3-array.png',
        cantidad:1,
        id:3,
    },

    {   nombre: ' it', 
        precio:700,
        desc:'El payaso maligno venido del espacio solo para aterrorizar y deborar',
        genero:'Terror',
        img:'./imagenes/libro-4-array.png',
        cantidad:1,
        id:4,
    },

    {   nombre: ' harry potter',
        precio:800,
        desc:'La historia del gran mago Harry Potter y sus aventuras por Howards',
        genero:'Fantasia',
        img:'./imagenes/libro-5-array.png',
        cantidad:1,
        id:5,
    },

    {   nombre: ' el señor de los anillos',
        precio:500,
        desc:'La encrucijada mas grande y la posible guerra por el poder del anillo y su deseo de poseerlo!',
        genero:'Fantasia',
        img:'./imagenes/libro-6-array.png',
        cantidad:1,
        id:6,
    },

    {   nombre: ' orgullo y prejuicio', 
        precio:250,
        desc:'Narra las aventuras y desventuras amorosas de las hermanas Bennet, centrándose en el personaje de Elizabeth',
        genero:'Romance',
        img:'./imagenes/libro-7-array.png',
        id:7,
    },

    {   nombre: ' bajo la misma estrella', 
        precio:120,
        desc:' Una adolescente de 16 años de edad llamada Hazel Grace Lancaster, quien padece cáncer de tiroides, se enamora de un ex jugador de basquet que reside en el mismo hospital',
        genero:'Romance',
        img:'./imagenes/libro-8-array.png',
        id:8,
    },

    {   nombre: ' crimen de la calle morgue', 
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

const nuevoArray = ['don quijote', 'moby dick', 'fantasma de la opera', 'it', 'harry potter', 'el señor de los anillos', 'orgullo y prejuicio', 'bajo la misma estrella', 'crimen de la calle morgue', 'sherlock holmes'];
// const nombresLibros = document.getElementsByClassName('nombreLibro');
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
}

function algo(){
    stockProductos.forEach(elemento => {
        document.getElementsByClassName("nombreLibro").innerHTML = `${elemento.nombre}`
    });
}
 algo();
/*const productoCarrito = document.querySelector("#cabeza");
let cartita = document.getElementById('cartita')


function stock(){
    stockProductos.forEach((productos) => {
       cartita.innerHTML += 
   `<div class="col d-flex justify-content-center-ab-4">
       <div class="card shadow mb-1 bg-warning rounded" style="width: 20rem;">
           <h5 class="card-title pt-2 text-center text-dark">${productos.nombre}</h5>
           <img src="./imagenes/libro-1-array.png" class="card-img-top" alt="...">
           <div class="card-body">
             <p class="card-text text-dark-50 description">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
             <h5 class="text-dark">Precio: <span class="precio">$ 5</span></h5>
             <div class="d-grid gap-2">
               <button class="btn btn-primary button">Añadir al Carrito</button>
             </div>
           </div>
         </div>
   </div>`
    });
}

stock();*/

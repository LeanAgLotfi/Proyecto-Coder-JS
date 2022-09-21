    Swal.fire({
    title: 'Bienvenido',
    position: 'center',
    text:'Bienvenido a la tienda de libros L&L, espero te guste nuestro catalogo!',
    background:'#1e1e1e',
    showConfirmButton: true,
    confirmButtonText:'A Leer!',
    confirmButtonColor:'goldenrod',
    width: 800,
    timer: 5000,
    padding: '1em',
    color:'white',
    customClass:{
        title: 'alertaInicio',
    },
  });

const tbody = document.querySelector('.tbody');
const cart = document.querySelector("#cartita");
const comprar = document.querySelector('.comprar');
const home = document.querySelector(".bi-house");
const navcarrito = document.querySelector(".bi-cart-check");
const biblioteca =document.querySelector(".bibli");
const logo = document.querySelector(".show");
let carrito = []


function crearCart(){
    fetch  ('https://631f4b3758a1c0fe9f65bc11.mockapi.io/api/v1/stats')
    // ('/stock.json') este es el fetch si se abre con mi json que cree por defecto de un array con mis libros seleccionados!
    .then((response) => response.json())
    .then((json)=> {

        json.forEach((carta)=>{
            
            const div = document.createElement('div')
            div.classList.add('d-flex')
            div.classList.add('justify-content-center')
            div.classList.add('ab-4')
            div.innerHTML = `
            <div class="card shadow mb-1 BGdoc rounded" style="width: 20rem">
            <h5 class="card-title pt-2 text-center text-dark nombreLibro">${carta.nombre}</h5>
            <img src="${carta.img}" class="card-img-top" alt="${carta.nombre}"/>
            <div class="card-body">
            <p class="card-text text-dark-50 description">
            ${carta.desc}
            </p>
            <h5 class="text-dark">Precio: <span class="precio">$${carta.precio}</span> </h5>
            <div class="d-grid gap-2 botonArmado">
                <button class="btn boton" id="btn">
                <div class="icono">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </svg>
                <div/>
                <span class="botonspan">Añadir<span/>
                </button>
            </div>
            </div>
      </div>
            `
            cart.appendChild(div)

           //BOTON FUNCIONAL NUEVO ARREGLO SIN CONSTANTE 
            div.querySelector(".boton").addEventListener('click', addCarritoItem)
                        
           //EL TOSTIFY "LIBRERIA DE AVISO DE BOTON"
            div.querySelector(".boton").addEventListener('click', () =>{
            Toastify({
        
                text: "Agregado al carrito!",
                
                duration: 3000,
                
                style: {
                    background: "linear-gradient(to right, goldenrod, #141414)",
                  },

                gravity: "bottom", 

                position: "right",
                
                }).showToast();
            })
        
        })
    });
}

crearCart()


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
        <th scope="row ">1</th>
        <td class="table__producto text-warning">
            <img src=${item.img} alt="">
            <h6 class="title text-warning">${item.title}</h6>
        </td>
        <td class="table__precio text-warning"><p>${item.precio}</p></td>
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

// home.addEventListener("click", ()=>{
//     logo.classList.remove('imgcontenedorLogo')
// });

// navcarrito.addEventListener("click", ()=>{
//     logo.classList.remove('imgcontenedorLogo')
// });

// biblioteca.addEventListener("click", ()=>{
// logo.classList.add('imgcontenedorLogo')
// });
 
function botonComprar(){
    comprar.innerHTML = `<button class="btn btn-success abrirCompra">COMPRAR</button>`
    
    comprar.querySelector(".abrirCompra").addEventListener('click', estoyComprando)

}

function estoyComprando(){ 
    carrito.length = 0
    renderCarrito()
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Compra Realizada!',
        text:'Recibimos correctamente el pago de tu compra, ya esta todo listo para que enviemos tus libros',
        showConfirmButton: true,
        confirmButtonText:'Seguir Comprando!',
        confirmButtonColor:'goldenrod',
        background:'#1e1e1e',
        customClass:{
            title:'tituloAlerta',
        },
      })
}

botonComprar()

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

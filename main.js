const tbody = document.querySelector('.tbody');
const cart = document.querySelector("#cartita");
let carrito = []


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

function crearCart(){
    fetch('https://631f4b3758a1c0fe9f65bc11.mockapi.io/api/v1/stats') //('/stock.json')
    .then((response) => response.json())
    .then((json)=> {

        json.forEach((carta)=>{
            
            const div = document.createElement('div')
            div.classList.add('d-flex')
            div.classList.add('justify-content-center')
            div.classList.add('ab-4')
            div.innerHTML = `
            <div class="card shadow mb-1 bg-warning rounded" style="width: 20rem">
            <h5 class="card-title pt-2 text-center text-dark nombreLibro">${carta.nombre}</h5>
            <img src="${carta.img}" class="card-img-top" alt="${carta.nombre}"/>
            <div class="card-body">
            <p class="card-text text-dark-50 description">
            ${carta.desc}
            </p>
            <h5 class="text-dark">Precio: <span class="precio">$${carta.precio}</span> </h5>
            <div class="d-grid gap-2">
                <button class="btn btn-primary boton">
                Añadir al Carrito
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
                
                }).showToast();
            })
        
        })
    });
}

crearCart()

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

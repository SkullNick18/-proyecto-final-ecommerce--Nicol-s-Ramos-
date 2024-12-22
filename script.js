var si = 0;

const openModal = document.getElementById('hero_cta');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal_close');

openModal.addEventListener('click', () => {

   if (si == 1) {
      modal.classList.add('modal--show')
   }
});

closeModal.addEventListener('click', () => {

   modal.classList.remove('modal--show')
});

let total = 0;
let productos = [];
id = 0;

cart = JSON.parse(localStorage.getItem('carrito')) || [];


function agregar(producto, precio){

   console.log(producto, precio);

   var producItem = document.createElement('p');
   producItem.textContent = producto;


   total += parseFloat(precio);
   console.log(total);

   productos.push({
      id : id++,
      nombre : producto,
      valor : precio});
   
   localStorage.setItem("carrito", JSON.stringify(productos));
   localStorage.setItem('total', total);
   
   document.getElementsByClassName('count')[0].innerText = productos.length;


}

function handleCart() {

   const cart = JSON.parse(localStorage.getItem('carrito')) || [];
   const total = localStorage.getItem('total') || 0;


let div = document.getElementById("contenido");

   if (cart.length === 0) {
      alert("No hay productos")
      console.log(cart);
      return;
   }



   let cuerpo = '<p>';
   cart.forEach(item => {

      if (cart.length >= 0) {
      si=1;
      cuerpo += `
         <p id="fondouser"><i id="cosa" class="fa-solid fa-user"></i>${item.nombre} - $${item.valor} </p>
         `;
      }
   });

   cuerpo += '</p>';
   
   div.innerHTML = cuerpo;

   let precioFinal = document.createElement('p')
   precioFinal.innerText = `Total a pagar: $${total}`;

   div.appendChild(precioFinal);
}


function removeFromCart(id) {
   localStorage.removeItem('carrito');
   localStorage.removeItem('total');
   location. reload()
}


function desc1(){
   let primerParrafo = document.querySelector(".card .texto1");
   console.log(primerParrafo);
   primerParrafo.textContent = "Herramienta profesional que se dedica a unir piezas de metal o materiales termoplásticos mediante la aplicación de calor intenso.";
}

function desc2(){
   let primerParrafo = document.querySelector(".card .texto2");
   console.log(primerParrafo);
// Podemos cambiar su contenido:
   primerParrafo.textContent = "Herramienta para cortar madera, piedra u otros objetos duros, que generalmente consiste en una hoja de acero dentada sujeta a una empuñadura, bastidor o armazón.";
}

function desc3(){
   let primerParrafo = document.querySelector(".card .texto3");
   console.log(primerParrafo);
// Podemos cambiar su contenido:
   primerParrafo.textContent = "Taladro con percusión mucho más potente que versiones anteriores, concebido para perforar materiales muy duros";
}

function desc4(){
   let primerParrafo = document.querySelector(".card .texto4");
   console.log(primerParrafo);
// Podemos cambiar su contenido:
   primerParrafo.textContent = "Máquina que se utiliza para cortar y mantener el césped, los arbustos y las ramas de los árboles";
}

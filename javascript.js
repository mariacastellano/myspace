
var a;
var promedio = document.getElementById("promedio");
var lugar_promedio = document.createElement("p");
promedio.appendChild(lugar_promedio);
    

const nombres = [];
const montos = [];
const boton = document.getElementById("boton");
const mostrar = document.getElementById("mostrar");
boton.addEventListener("click",function(){
    let nombre= document.getElementById("nombre").value;
    nombres.push(nombre);
    let gasto= document.getElementById("gasto").value;
    
    montos.push(parseInt(gasto));
    var name = document.createElement("p");
    var expense = document.createElement("p");
    name.className = "nombre";

   console.log(gasto.length);
   console.log(montos);
   console.log(a);

a = ArrayAvg();

    for (let index = 0; index < nombres.length; index++) {
        const element = nombres[index];
        name.innerHTML =  nombres[index];
        mostrar.appendChild(name);
    }



    lugar_promedio.innerHTML = a;
})
    function ArrayAvg() {
      var j = 0;
      var summ = 0;
    
      for (j = 0; j <= montos.length - 1; j++) {
        summ = summ + montos[j];
      } 
      console.log("summ", summ);
      return summ / montos.length;
    }

    boton.addEventListener("click", (boton) )
    
      
 

    








/*
const nombres = document.getElementById("Maru").value

if(nombre = "Maru")

var maleparticipant = "Fede"

const nombres = document.getElementById("Fede").value
    var montomaleparticipant = $625

var monto = "$2500"


function nombres(mensaje,Maru){
    let mensajeCompleto = mensaje + nombre 
    console.log(mensajeCompleto)
}

nombres("Ingrese nombre", "Maru")

function monto(numero,$2500){
    let montoCompleto = numero + $2500
    console.log(montoCompleto)
}

monto("Ingrese monto", "$2500")

function calculo(numero,$625){
    let calculoCompleto = numero + $625
    console.log(calculoCompleto)
}

calculo("Resultado de calculo", "$625")

// 2500 % 4 = 625

let a = $2500;
let b = $625;

let modulo = a % b
console.log(modulo);

b = $625;
modulo = a % b;
console.log(modulo);

let nombres = ['Maru', 'Fede', 'Connie', 'Martu'];

let nombres



function obtenerDatosDelUsuario(nombre) {
    Maru.nombre = window.prompt('Quien pago?');
    Maru. $2500 = window.prompt('Cuanto pago?');
  
  }
  
  
  function renderizarDatosUsuario(nombre) {
    obtenerDatosDelUsuario();
    document.getElementById('Quien pago?').innerText = Maru;
    document.getElementById('Cuanto pago?').innerText = $2500;

  }

  function obtenerDatosDelUsuario(montomaleparticipant) {
    Fede.nombre = window.prompt('Fede');
    Fede. $625 = window.prompt('Fede');
  
  }
  
  
  function renderizarDatosUsuario(montomaleparticipant){
    obtenerDatosDelUsuario();
    document.getElementById('Fede').innerText = Fede;
    document.getElementById('Fede').innerText = $625;

  }

*/
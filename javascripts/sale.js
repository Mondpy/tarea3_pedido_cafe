const productos = [
  {
    id: 1,
    nombre: "Mezcla Original 200g",
    precio: 500,
  },
  {
    id: 2,
    nombre: "Mezcla Original 500g",
    precio: 900,
  },
  {
    id: 3,
    nombre: "Mezcla Especial 200g",
    precio: 700,
  },
  {
    id: 4,
    nombre: "Mezcla Original 200g",
    precio: 1200,
  },
]
const btnCalc = document.getElementById("btnCalc")
const btnAdd = document.getElementById("btnAdd")
const elementoPrecio = document.getElementById("producto");
const elementoNumero = document.getElementById("numero");
let compras = [];
function agregar() {
  console.log("se esta agregando")
  const idObjetivo  = parseInt(elementoPrecio.value);
  console.log(idObjetivo)
  const producto = productos.find(item => item.id == idObjetivo);
  const numero = elementoNumero.value;

  let compra = {
    producto: producto,
    numero: parseInt(numero),
  };

  const nuevaCompra = compras.findIndex((item) => item.producto.id === compra.producto.id)
  if(compras.length < 1 || nuevaCompra === -1) {
    compras.push(compra)
  } else {
    compras[nuevaCompra].numero += compra.numero
  }

  window.alert(`${mostrar()}\nSubtotal ${subtotal()} yen`);
  elementoPrecio.value = "";
  elementoNumero.value = "";
}

function subtotal() {
  return compras.reduce((prev, compra) => {
    return prev + compra.producto.precio * compra.numero;
  }, 0)
}

function mostrar() {
  return compras.map(compra => {
    return `${compra.producto.nombre} ${compra.producto.precio} yen: ${compra.numero} unidades\n`;
  }).join("")
};

function calcularEnvioDesdeCompra(total) {
  if (total == 0 || total >= 3000) {
    return 0
  } else if (total < 1000){
    return 500
  } else {
    return 250
  }
}

function calcular() {
  const total = subtotal();
  const envio = calcularEnvioDesdeCompra(total);
  window.alert(`${mostrar()}\nSubtotal es ${total} yen, el envío es ${envio} yen. El total es ${total + envio} yen`);
  compras = [];
  elementoPrecio.value= "";
  elementoNumero.value = "";
}

/*btnCalc.addEventListener("click",)*/

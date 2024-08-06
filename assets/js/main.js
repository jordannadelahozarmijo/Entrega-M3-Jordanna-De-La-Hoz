// 
//  En este archivo se encuentran las funciones que permiten al carro:
//  - Almacenar productos
//  - Agregar productos al carro
//  - Calcular la compra total
//  - Mostrar detalles de la compra
//  - Finalizar compra


/*---------- Clase que contiene a los productos ----------*/

class Productos {
    nombre = '';
    precio = 0;

    mostrarDetalles() {
      console.log(`Nombre: ${this.nombre}, Precio: ${this.precio}`);
    }
}


// En algún lado debo preguntarle al usuario donde debo ingresar los productos

/*---------- Clase con array vacío para almacenar productos ----------*/
class Carrito {
    constructor(){
        this.productos = [];
    }
};




/*---------- Función que permite agregar productos al carrito ----------*/
function agregarProductoCarro () {
    if (Productos.venta == true) {

    }
}

/*---------- Función que permite calcular el total de toda la compra ----------*/
function calcularTotalCompra (){

}


/*---------- Función que permite mostrar los detalles de la compra ----------*/
function mostrarDetallesCompra () {

}

/*---------- Función que permite finalizar la compra ----------*/
function finalizarCompra (){

}
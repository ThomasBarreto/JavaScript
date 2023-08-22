// let opciones = parseInt(prompt('Elija una opcion:\n1-Ingresar Producto\n2-Consultar Stock\n3-Salir'));

// //declaracion
// function pedirNombre(){
//     let nombreProducto = prompt('Ingresa el Nombre del Producto');
//     console.log(nombreProducto);
// }

// function elegirOpciones(){
//     switch (opciones) {
//         case 1:
//             pedirNombre();
//             break;
//         case 2:
//             alert('Este es el stock disponible');
//             break;
//         case 3:
//             opciones = false;
//             break;
//         default:
//             alert('Error, opción incorrecta');
//             break;
//     }
// }
// elegirOpciones();



//PRE ENTREGA N-1 Barreto Thomas

//OPCIONES
let producto = parseInt(prompt('Sneakers Store\n1-Adidas BadBunny... $500\n2-Nike Jordan Retro 4... $650\n3-Vans Knu Skool... $300\n0-Salir'))

//TOTAL Y SUMAR TOTAL
let total = 0;
function sumarTotal (precioSneaker){
    total = total + precioSneaker;
    console.log('El Total a pagar es de $' + total)
}

//Bucle para Aniadir y Sumar productos
while (producto != 0) {
    switch (producto) {
        case 1:
            alert('Agregaste Adidas BadBunny... $500 al carrito de compras')
            sumarTotal(500);
            break;  

        case 2:
            alert('Agregaste Nike Jordan Retro 4... $650 al carrito de compras')
            sumarTotal(650);
            break;
    
        case 3:
            alert('Agregaste Vans Knu Skool... $300 al carrito de compras')
            sumarTotal(300);
            break;

        default:
            alert('Error!')
            break;
    }
    producto = parseInt(prompt('Sneakers Store\n1-Adidas BadBunny... $500\n2-Nike Jordan Retro 4... $650\n3-Vans Knu Skool... $300\n0-Salir'))
}


alert('El monto Total del Carrito es de $' +total)
if (total != 0) {
    //Opciones de como Pagar
    let opcionesPago = parseInt(prompt('Como va a Pagar:\n1-Efectivo\n2-Debito\n3-Credito'))
    //Validaciones pagos
    if (opcionesPago == 1) {
        alert('Tienes un descuento del 10 %, el Total ahora es de $' + descuentoEfectivo(total));
    }else if (opcionesPago == 2){
        alert('Tienes un descuento del 20 %, el Total ahora es de $' + descuentoDebito(total));
    }else if(opcionesPago == 3){
        let cuotas = parseFloat(prompt('Al abonar con Targeta de Credito no hay descuento, pero te ofrecemos pagar en cuotas.\n1-3 cuotas sin interes\n2-6 cuotas sin interes\n3-12 cuotas con un recargo del 10 %'));
        if (cuotas == 1) {
            alert('Al abonar en 3 cuotas sin interes el monto Total es de $' +  pagoTresCuotas(total) + ' por mes')
        }else if (cuotas == 2){
            alert('Al abonar en 6 cuotas sin interes el monto Total es de $' +  pagoSeisCuotas(total) + ' por mes')
        }else{
            alert('Al abonar en 12 cuotas sin interes el monto Total es de $' + pagoDoceCuotas(total) + ' por mes')
        }
    }else{
        alert('Debes seleccionar un metodo de pago')
    }
}

//Aplicar Descuentos
//Pago con Efectivo
function descuentoEfectivo (montoTotal){
    return montoTotal * 0.90;
}

//Pago con Debito
function descuentoDebito (montoTotal){
    return montoTotal * 0.80;
}

//Pago en 3 cuotas
function pagoTresCuotas(montoTotal){
    return montoTotal / 3;
}

//Pago en 6 cuotas
function pagoSeisCuotas(montoTotal){
    return montoTotal / 6;
}

//Pago en 12 cuotas
function pagoDoceCuotas(montoTotal){
    return (montoTotal * 1.10) / 12;
}

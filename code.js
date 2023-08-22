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
let producto = parseInt(prompt('Sneakers Store\n1-Adidas BadBunny - $600\n2-Nike Air Jordan 4 Retro - $450\n3-Vans Knu Skool - $300\n4-Adidas Superstar - $200\n5-Nike Air Jordan 1 Low - $350\n6-Vans U SK8-HI - $170\n0-Salir'))

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
            alert('Agregaste Adidas BadBunny - $600 al carrito de compras')
            sumarTotal(600);
            break;  
        case 2:
            alert('Agregaste Nike Jordan 4 Retro - $450 al carrito de compras')
            sumarTotal(450);
            break;
    
        case 3:
            alert('Agregaste Vans Knu Skool - $300 al carrito de compras')
            sumarTotal(300);
            break;
        case 4:
            alert('Agregaste Adidas Superstar - $200 al carrito de compras')
            sumarTotal(200);
            break;  
        case 5:
            alert('Agregaste Nike Air Jordan 1 Low - $350 al carrito de compras')
            sumarTotal(350);
            break;
        case 6:
            alert('Agregaste Vans U SK8-HI - $170 al carrito de compras')
            sumarTotal(170);
            break;
        default:
            alert('Error!')
            break;
    }
    producto = parseInt(prompt('Sneakers Store\n1-Adidas BadBunny - $600\n2-Nike Air Jordan 4 Retro - $450\n3-Vans Knu Skool - $300\n4-Adidas Superstar - $200\n5-Nike Air Jordan 1 Low - $350\n6-Vans U SK8-HI - $170\n0-Salir'))
}


alert('El monto Total del Carrito es de $' +total)
if (total != 0) {
    //Opciones de como Pagar
    let opcionesPago = parseInt(prompt('Como va a Pagar:\n1-Efectivo\n2-Debito\n3-Credito'))
    //Validaciones pagos
    if (opcionesPago == 1) {
        alert('Tienes un descuento del 10 %, el Total ahora es de $' + descuentoEfectivo(total));
        alert('Gracias por tu Compra!')
    }else if (opcionesPago == 2){
        alert('Tienes un descuento del 20 %, el Total ahora es de $' + descuentoDebito(total));
        alert('Gracias por tu Compra!')
    }else if(opcionesPago == 3){
        let cuotas = parseFloat(prompt('Al abonar con Targeta de Credito no hay descuento, pero te ofrecemos pagar en cuotas.\n1-3 cuotas sin interes\n2-6 cuotas sin interes\n3-12 cuotas con un recargo del 10 %'));
        if (cuotas == 1) {
            alert('Al abonar en 3 cuotas sin interes el monto Total es de $' +  pagoTresCuotas(total) + ' por mes')
            alert('Gracias por tu Compra!')
        }else if (cuotas == 2){
            alert('Al abonar en 6 cuotas sin interes el monto Total es de $' +  pagoSeisCuotas(total) + ' por mes')
            alert('Gracias por tu Compra!')
        }else{
            alert('Al abonar en 12 cuotas sin interes el monto Total es de $' + pagoDoceCuotas(total) + ' por mes')
            alert('Gracias por tu Compra!')
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

//Pago con credito en 3 cuotas
function pagoTresCuotas(montoTotal){
    return montoTotal / 3;
}

//Pago con credito en 6 cuotas
function pagoSeisCuotas(montoTotal){
    return montoTotal / 6;
}

//Pago con credito en 12 cuotas
function pagoDoceCuotas(montoTotal){
    return (montoTotal * 1.10) / 12;
}

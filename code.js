//PRE ENTREGA Nº2
let opcion;

do {
    opcion = parseInt(prompt('Elija una opción:\n1 - Añadir productos al stock\n2 - Simulación de compra y descuentos\n3 - Filtros Sneakers\n4 - Salir'));

    switch (opcion) {
    case 1:
        // Lógica para añadir productos al stock
        //Aniadir nuevo sneaker al array de objetos

        let agregarSneaker = true;

        while (agregarSneaker) {
            // let pedirIdProducto = parseInt(prompt('Escribe el ID de 6 digitos del Producto'));
            let pedirIdProducto = prompt('Escribe el ID del Producto');
            let pedirMarca = prompt('Escribe la Marca del Sneaker');
            let pedirNombre = prompt('Escribe el Nombre del Sneaker');
            let pedirTalle = prompt('Escribe el Talle del Sneaker');
            let pedirPrecio = parseInt(prompt('Escribe el Precio del Sneaker'));

            const nuevoSneaker = {idProducto:pedirIdProducto, marca:pedirMarca, nombre:pedirNombre, talle:pedirTalle, precio:pedirPrecio}
            sneakers.push(nuevoSneaker);

            console.table(sneakers);

            let opcionesSiNo = prompt('¿Quieres agregar otro sneaker? (Sí/No)').toLowerCase();
            if (opcionesSiNo !== 'si') {
                agregarSneaker = false;
            }
        }

        console.log('Gracias por agregar los sneakers.');
        break;
    case 2:
        // Lógica para la simulación de compra y descuentos
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

        break;
    case 3:
        //Filtros  
        let opcionesFiltro = parseInt(prompt('Filtros:\n1 - Por Talle\n2 - Por Marca\n3 - Por Nombre\n4 - Por Precio\n5 - Salir'))
        while (opcionesFiltro != 5) {
            switch (opcionesFiltro) {
                case 1:
                    const talleFiltros = parseInt(prompt('Escribe el Talle de los Sneakers que queres filtrar:'));
                    const sneakerPorTalle = sneakers.filter(sneaker => sneaker.talle === talleFiltros);
                    if (sneakerPorTalle.length > 0) {
                        console.table(sneakerPorTalle);
                    } else {
                        alert('No se encontraron sneakers con ese talle.');
                    }
                    break;
                case 2:
                    const marcaFiltros = prompt('Escribe la Marca de los Sneakers que queres filtrar:');
                    const sneakerPorMarca = sneakers.filter(sneaker => sneaker.marca.toLowerCase() === marcaFiltros.toLowerCase());
                    if (sneakerPorMarca.length > 0) {
                        console.table(sneakerPorMarca);
                    } else {
                        alert('No se encontraron sneakers de esa marca.');
                    }
                    break;
                case 3:
                    const nombreFiltros = prompt('Escribe el Nombre de los Sneakers que queres filtrar:');
                    const sneakerPorNombre = sneakers.filter(sneaker => sneaker.nombre.toLowerCase().includes(nombreFiltros));
                    if (sneakerPorNombre.length > 0) {
                        console.table(sneakerPorNombre);
                    } else {
                        alert('No se encontraron sneakers con ese nombre.');
                    }
                    break;
                case 4:
                    const precioMinFiltros = parseInt(prompt('Escribe el Precio Minimo que queres filtrar:'));
                    const precioMaxFiltros = parseInt(prompt('Escribe el Precio Maximo que queres filtrar:'));
                    const sneakerPorPrecio = sneakers.filter(sneaker => sneaker.precio >= precioMinFiltros && sneaker.precio <= precioMaxFiltros );
                    if (sneakerPorPrecio.length > 0) {
                        console.table(sneakerPorPrecio);
                    } else {
                        alert('No se encontraron sneakers en ese rango de precios.');
                    }
                    break;
                default:
                    alert('Opción no válida. Por favor, seleccione una opción válida.');
                    break;
            }
            opcionesFiltro = parseInt(prompt('Filtros:\n1 - Por Talle\n2 - Por Marca\n3 - Por Nombre\n4 - Por Precio\n5 - Salir'))
        }
        break;
    case 4:
        alert('Gracias por usar la aplicación.');
        break;
    default:
        alert('Opción no válida. Por favor, seleccione una opción válida.');
        break;
    }
} while (opcion !== 4);
//FIN PRE ENTREGA Nº2

//----------------------------------------------------------------------------------

//PRACTICANDO DOM Y EVENTOS SIMULANDO UN CARRITO
let carrito = [];
const tablaSneakers = document.getElementById('tabla');

sneakers.forEach((prod) => {
    let contenido = document.createElement('tr');
    contenido.className = 'card'
    contenido.innerHTML += `
        <th>${prod.idProducto}</th>
        <th>${prod.marca}</th>
        <th>${prod.nombre}</th>
        <th>${prod.talle}</th>
        <th>${prod.precio}</th>
    `;

    tablaSneakers.append(contenido);

    let botonComprar = document.createElement('button')
    botonComprar.innerText = 'Comprar'
    botonComprar.className = 'comprar'

    contenido.appendChild(botonComprar)

    botonComprar.addEventListener('click', () => {
        carrito.push({
            id: prod.idProducto,
            marca: prod.marca,
            nombre: prod.nombre,
            talle: prod.talle,
            precio: prod.precio,
        })
        console.log(modalContainer)
    });
});


const modalContainer = document.getElementById('modal__container')
verCarrito.addEventListener('click', () => {
    modalContainer.style.display = 'flex'
    const modalHeader = document.createElement('div');
    modalHeader.className = 'modal__header'
    modalHeader.innerHTML =`
    <h1 class='modal__header__titel'>Carrito de Compras</h1>
    `;
    modalContainer.append(modalHeader);

    const modalbutton = document.createElement('button')
    modalbutton.innerText = 'X';
    modalbutton.className = 'modal__button'
    modalbutton.addEventListener('click', () =>{
    modalContainer.style.display = 'none'
    })

    modalContainer.append(modalbutton);

    carrito.forEach((prod) =>{
        let carritoContent = document.createElement ('div');
        carritoContent.className = 'modal__carrito__content'
        carritoContent.innerHTML = `
        <tr>
            <th>${prod.idProducto}</th>
            <th>${prod.marca}</th>
            <th>${prod.nombre}</th>
            <th>${prod.talle}</th>
            <th>${prod.precio}</th>
        </tr>
        `;

        modalContainer.append(carritoContent);
    })
})
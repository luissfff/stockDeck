const formulario = document.getElementById('item-form');

let inventario = [];


formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    console.log('Guardando');


    const nombre = document.getElementById('nombre-articulo').value;
    const categoria = document.getElementById('categoria-articulo').value;
    const precio = Number(document.getElementById('precio-articulo').value);
    const cantidad = Number(document.getElementById('cantidad-articulo').value);

    const nuevoArticulo = {
        nombre: nombre,
        categoria: categoria,
        precio: precio,
        cantidad: cantidad
    };  

    inventario.push(nuevoArticulo);

    console.log(typeof precio);
    console.log(inventario);


});
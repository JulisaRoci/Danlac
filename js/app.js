document.addEventListener('DOMContentLoaded', () => {
    fetch('../productos.json')
    .then(response => response.json())
    .then(data => {
        const listaProductos = document.getElementById('lista-productos');
        data.productos.forEach(producto => {
            const listItem = document.createElement('li');
            listItem.innerHTML = 
            
            `
            <div class="center">
                <img src="${producto.imagen}" alt="Imagen de ${producto.nombre}" width="80">
            </div>

            <div class="between">
                <p>${producto.nombre}</p>
                <p class="precio">${producto.precio} </p>
            </div>            
            
            <p>Disponibilidad: ${producto.stock}</p>
            <p>Categoría: ${producto.categoría}</p>
            <p>Descripción: ${producto.descripción}</p>
            <iframe src="${producto.video}" alt="Video de${producto.nombre}" width="250" height="140"> </iframe>

            <div class="btn-center">
            <button class="btn-comprar" type="button">Comprar Ahora</button>
            </div>
            `;

            //<ul>                    li
            listaProductos.appendChild(listItem);
        });

        const itemProducto = document.getElementById('producto-solo');
        data.productoSolo.forEach(producto => {
            const productItem = document.createElement('p');
            productItem.innerHTML =

            `
            <div class="between2">
                <div>
                    <img class="mantequilla" src="${producto.imagen}" alt="Imagen de ${producto.nombre}" width="300">
                </div>

                <div>
                    <p>${producto.nombre}</p>
                    <p>Descripción: ${producto.descripción}</p>
                </div>
            </div>
            `;

            itemProducto.appendChild(productItem);
        });

    })

    .catch(error => console.error('Error', error));
});
const API = 'https://storejr.azurewebsites.net/api';
const contenedor = null || document.querySelector('.cards-container');

const options = {
    method: 'GET'
};

async function fetchData(apiUrl){
    const response = await fetch(apiUrl,options);
    const data = response.json();
    return data;
};

//autoFuncion
(async () =>{
    try{
        const productos = await fetchData(`${API}/Producto`);
        let view = `
            ${productos.map(producto => `
                <div class="product-card">
                    <img src="${producto.imagenes[0]}" alt="">
                    <div class="product-info">
                        <div>
                            <p>$${producto.precio}</p>
                            <p>${producto.nombre}</p>
                        </div>
                        <figure>
                            <img src="./Assets/icons/bt_add_to_cart.svg" alt="">
                        </figure>
                    </div>
                </div>
            `).join('')}
                    
        `
        contenedor.innerHTML = view;
    }catch(error){
        console.log(error);
    }
})();


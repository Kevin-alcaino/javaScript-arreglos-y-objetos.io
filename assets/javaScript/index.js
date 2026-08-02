
import { propiedades_venta } from "./venta.js";
import { propiedades_alquiler } from "./alquiler.js";

const contenedor = document.querySelector("#venta");
const contenedorAlquiler = document.querySelector("#alquiler");

function mostrarVentas() {
    let html = '<div class="row">';

    for (const propiedad of propiedades_venta) {
        html += `
        
        
        <div class="col-md-4 mb-4">
            <div class="card h-100">
                <img src="${propiedad.src}" class="card-img-top" alt="${propiedad.nombre}">
                <div class="card-body">
                    <h5 class="card-title">${propiedad.nombre}</h5>
                    <p class="card-text">${propiedad.descripcion}</p>
                    <p>
                        <i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}
                    </p>
                    <p>
                        <i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones |
                        <i class="fas fa-bath"></i> ${propiedad.baños} Baños
                    </p>
                    <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
                    
                    <p class="${propiedad.smoke ? 'text-success' : 'text-danger'}">
                        <i class="${propiedad.smoke ? 'fas fa-smoking' : 'fas fa-smoking-ban'}"></i> 
                        ${propiedad.smoke ? 'Permitido fumar' : 'No se permite fumar'}
                    </p>
                    <p class="${propiedad.pets ? 'text-success' : 'text-danger'}">
                        <i class="${propiedad.pets ? 'fas fa-paw' : 'fa-solid fa-ban'}"></i> 
                        ${propiedad.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}
                    </p>
                </div>
            </div>
        </div>
        
        `;
    }
    contenedor.innerHTML = html;
}
function mostrarAlquileres() {
    let html = '<div class="row">';

    for (const propiedad of propiedades_alquiler.slice(0, 3)) {
        html += `
        <div class="col-md-4 mb-4">
            <div class="card h-100">
                <img src="${propiedad.src}" class="card-img-top" alt="${propiedad.nombre}">
                <div class="card-body">
                    <h5 class="card-title">${propiedad.nombre}</h5>
                    <p class="card-text">${propiedad.descripcion}</p>
                    <p>
                        <i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}
                    </p>
                    <p>
                        <i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones |
                        <i class="fas fa-bath"></i> ${propiedad.baños} Baños
                    </p>
                    <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
                    
                    <p class="${propiedad.smoke ? 'text-success' : 'text-danger'}">
                        <i class="${propiedad.smoke ? 'fas fa-smoking' : 'fas fa-smoking-ban'}"></i> 
                        ${propiedad.smoke ? 'Permitido fumar' : 'No se permite fumar'}
                    </p>
                    <p class="${propiedad.pets ? 'text-success' : 'text-danger'}">
                        <i class="${propiedad.pets ? 'fas fa-paw' : 'fa-solid fa-ban'}"></i> 
                        ${propiedad.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}
                    </p>
                </div>
            </div>
        </div>
        `;
    }
    html += '</div>';
    contenedorAlquiler.innerHTML = html;
}

mostrarVentas();
mostrarAlquileres();
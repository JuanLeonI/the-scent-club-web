// Número de teléfono de tu negocio (formato internacional sin signos ni espacios)
const TELEFONO_WHATSAPP = "662420369";

// 1. Catálogo de perfumes
const productos = [
  {
    id: 1,
    nombre: "Rasasi Hawas Ice",
    marca: "Rasasi",
    imagen: "img/hawas-ice.avif",
    estado: "disponible",
    opciones: [
      { tamano: "3 ml", precio: 50 },
      { tamano: "5 ml", precio: 75 },
      { tamano: "10 ml", precio: 135 }
    ]
  },
  {
    id: 2,
    nombre: "Rasasi Hawas For Him",
    marca: "Rasasi",
    imagen: "img/hawas-for-him.avif",
    estado: "agotado",
    opciones: []
  },
  {
    id: 3,
    nombre: "Rasasi Hawas Tropical",
    marca: "Rasasi",
    imagen: "img/hawas-tropical.avif",
    estado: "disponible",
    opciones: [
      { tamano: "3 ml", precio: 55 },
      { tamano: "5 ml", precio: 80 },
      { tamano: "10 ml", precio: 140 }
    ]
  },
  {
    id: 4,
    nombre: "Rasasi Hawas Malibu",
    marca: "Rasasi",
    imagen: "img/hawas-malibu.avif",
    estado: "disponible",
    opciones: [
      { tamano: "3 ml", precio: 55 },
      { tamano: "5 ml", precio: 80 },
      { tamano: "10 ml", precio: 145 }
    ]
  },
  {
    id: 5,
    nombre: "Rasasi Hawas Fire",
    marca: "Rasasi",
    imagen: "img/hawas-fire.avif",
    estado: "nuevo",
    opciones: [
      { tamano: "3 ml", precio: 55 },
      { tamano: "5 ml", precio: 80 },
      { tamano: "10 ml", precio: 140 }
    ]
  },
  {
    id: 6,
    nombre: "Armaf Club De Nuit Blue Iconic",
    marca: "Armaf",
    imagen: "img/cdn-blue-iconic.avif",
    estado: "disponible",
    opciones: [
      { tamano: "3 ml", precio: 50 },
      { tamano: "5 ml", precio: 70 },
      { tamano: "10 ml", precio: 130 }
    ]
  },
  {
    id: 7,
    nombre: "Armaf Club De Nuit Urban Man Elixir",
    marca: "Armaf",
    imagen: "img/cdn-urban.avif",
    estado: "disponible",
    opciones: [
      { tamano: "3 ml", precio: 50 },
      { tamano: "5 ml", precio: 70 },
      { tamano: "10 ml", precio: 130 }
    ]
  },
  {
    id: 8,
    nombre: "Armaf Odyssey Nexus",
    marca: "Armaf",
    imagen: "img/odyssey-nexus.avif",
    estado: "disponible",
    opciones: [
      { tamano: "3 ml", precio: 55 },
      { tamano: "5 ml", precio: 85 },
      { tamano: "10 ml", precio: 150 }
    ]
  },
  {
    id: 9,
    nombre: "Armaf Arabian Sky",
    marca: "Armaf",
    imagen: "img/arabian-sky.avif",
    estado: "disponible",
    opciones: [
      { tamano: "3 ml", precio: 65 },
      { tamano: "5 ml", precio: 95 },
      { tamano: "10 ml", precio: 175 }
    ]
  },
  {
    id: 10,
    nombre: "Armaf Odyssey Aqua",
    marca: "Armaf",
    imagen: "img/odyssey-aqua.avif",
    estado: "disponible",
    opciones: [
      { tamano: "3 ml", precio: 45 },
      { tamano: "5 ml", precio: 65 },
      { tamano: "10 ml", precio: 110 }
    ]
  },
  {
    id: 11,
    nombre: "Afnan 9AM Dive",
    marca: "Afnan",
    imagen: "img/9-am.avif",
    estado: "disponible",
    opciones: [
      { tamano: "3 ml", precio: 45 },
      { tamano: "5 ml", precio: 65 },
      { tamano: "10 ml", precio: 110 }
    ]
  },
  {
    id: 12,
    nombre: "Afnan 9PM",
    marca: "Afnan",
    imagen: "img/9-pm.avif",
    estado: "disponible",
    opciones: [
      { tamano: "3 ml", precio: 45 },
      { tamano: "5 ml", precio: 65 },
      { tamano: "10 ml", precio: 110 }
    ]
  },
  {
    id: 13,
    nombre: "Al Haramain Amber Oud Aqua Dubai",
    marca: "Al Haramain",
    imagen: "img/aqua-dubai.avif",
    estado: "disponible",
    opciones: [
      { tamano: "3 ml", precio: 65 },
      { tamano: "5 ml", precio: 100 },
      { tamano: "10 ml", precio: 185 }
    ]
  },
  {
    id: 14,
    nombre: "Emper Stallion 53",
    marca: "Emper",
    imagen: "img/stallion-53.avif",
    estado: "disponible",
    opciones: [
      { tamano: "3 ml", precio: 45 },
      { tamano: "5 ml", precio: 65 },
      { tamano: "10 ml", precio: 110 }
    ]
  },
  {
    id: 15,
    nombre: "Bharara King",
    marca: "Bharara",
    imagen: "img/bharara-king.avif",
    estado: "disponible",
    opciones: [
      { tamano: "3 ml", precio: 65 },
      { tamano: "5 ml", precio: 95 },
      { tamano: "10 ml", precio: 175 }
    ]
  },
  {
    id: 16,
    nombre: "Lattafa Yara Rosa",
    marca: "Lattafa",
    imagen: "img/yara-rosa.avif",
    estado: "agotado",
    opciones: []
  },
  {
    id: 17,
    nombre: "Lattafa Pride Art Of Universe",
    marca: "Lattafa",
    imagen: "img/art-of-universe.avif",
    estado: "disponible",
    opciones: [
      { tamano: "3 ml", precio: 60 },
      { tamano: "5 ml", precio: 90 },
      { tamano: "10 ml", precio: 160 }
    ]
  },
  {
    id: 18,
    nombre: "Armaf Odyssey Mandarin Sky",
    marca: "Armaf",
    imagen: "img/odyssey-mandarin-sky.avif",
    estado: "disponible",
    opciones: [
      { tamano: "3 ml", precio: 45 },
      { tamano: "5 ml", precio: 65 },
      { tamano: "10 ml", precio: 110 }
    ]
  },
  {
    id: 19,
    nombre: "Tag Him Uomo Rosso",
    marca: "Armaf",
    imagen: "img/tag-him-uomo-rosso.avif",
    estado: "agotado",
    opciones: []
  },
  {
    id: 20,
    nombre: "B.A.D. Femme",
    marca: "Maison Alhambra",
    imagen: "img/bad-femme.avif",
    estado: "agotado",
    opciones: []
  },
  {
    id: 21,
    nombre: "Armaf Club De Nuit Woman",
    marca: "Armaf",
    imagen: "img/cdn-woman.avif",
    estado: "disponible",
    opciones: [
      { tamano: "3 ml", precio: 45 },
      { tamano: "5 ml", precio: 65 },
      { tamano: "10 ml", precio: 110 }
    ]
  }
];

// Carrito de compras en memoria
let carrito = [];

// 2. Cargar los productos dinámicamente en la página
document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("grid-productos");
  if (!contenedor) return;

  contenedor.innerHTML = "";

  productos.forEach(prod => {
    let badgeHTML = "";
    let esAgotado = prod.estado === "agotado";

    if (prod.estado === "nuevo") {
      badgeHTML = `<span class="badge nuevo">¡Nuevo!</span>`;
    } else if (esAgotado) {
      badgeHTML = `<span class="badge agotado">Agotado</span>`;
    }

    let opcionesHTML = "";
    if (!esAgotado) {
      opcionesHTML = prod.opciones.map((op, index) => 
        `<option value="${index}">${op.tamano} - $${op.precio} MXN</option>`
      ).join('');
    } else {
      opcionesHTML = `<option value="">No disponible</option>`;
    }

    const card = document.createElement("div");
    card.className = `card-producto ${esAgotado ? 'producto-agotado' : ''}`;
    card.innerHTML = `
      <div class="imagen-container">
        ${badgeHTML}
        <img src="${prod.imagen}" alt="${prod.nombre}">
      </div>
      <h3>${prod.nombre}</h3>
      <p><small>${prod.marca}</small></p>
      
      <select id="select-${prod.id}" ${esAgotado ? 'disabled' : ''}>
        ${opcionesHTML}
      </select>

      <button 
        onclick="agregarAlCarrito(${prod.id})" 
        ${esAgotado ? 'disabled' : ''}>
        ${esAgotado ? 'Agotado' : 'Agregar al Carrito'}
      </button>
    `;
    contenedor.appendChild(card);
  });
});

// 3. Función para agregar un producto al carrito
function agregarAlCarrito(idProducto) {
  const producto = productos.find(p => p.id === idProducto);
  const select = document.getElementById(`select-${idProducto}`);
  const opcionSeleccionada = producto.opciones[select.value];

  if (!opcionSeleccionada) return;

  carrito.push({
    nombre: producto.nombre,
    tamano: opcionSeleccionada.tamano,
    precio: opcionSeleccionada.precio
  });

  actualizarCarritoUI();
  mostrarNotificacion(`¡${producto.nombre} agregado!`);
}

// 4. Actualizar la interfaz del carrito y contador flotante
function actualizarCarritoUI() {
  const itemsContainer = document.getElementById("items-carrito");
  const totalElemento = document.getElementById("total-precio");
  const btnWhatsApp = document.getElementById("btn-whatsapp");
  const contadorFlotante = document.getElementById("contador-flotante");

  // Actualizar contador flotante móvil si existe
  if (contadorFlotante) {
    contadorFlotante.innerText = carrito.length;
  }

  if (!itemsContainer || !totalElemento) return;

  if (carrito.length === 0) {
    itemsContainer.innerHTML = '<p class="carrito-vacio">El carrito está vacío</p>';
    totalElemento.innerText = "0";
    if (btnWhatsApp) btnWhatsApp.disabled = true;
    return;
  }

  itemsContainer.innerHTML = "";
  let total = 0;

  carrito.forEach((item, index) => {
    total += item.precio;
    const div = document.createElement("div");
    div.className = "item-carrito";
    div.innerHTML = `
      <div>
        <strong>${item.nombre}</strong><br>
        <small>${item.tamano} - $${item.precio} MXN</small>
      </div>
      <button onclick="eliminarDelCarrito(${index})">❌</button>
    `;
    itemsContainer.appendChild(div);
  });

  totalElemento.innerText = total;
  if (btnWhatsApp) btnWhatsApp.disabled = false;
}

// 5. Eliminar un elemento del carrito
function eliminarDelCarrito(index) {
  carrito.splice(index, 1);
  actualizarCarritoUI();
}

// 6. Enviar mensaje formateado a WhatsApp
function enviarPedidoWhatsApp() {
  if (carrito.length === 0) return;

  let mensaje = "¡Hola! Me gustaría hacer el siguiente pedido en *The Scent Club*:\n\n";
  let total = 0;

  carrito.forEach(item => {
    mensaje += `• *${item.nombre}* (${item.tamano}) - $${item.precio} MXN\n`;
    total += item.precio;
  });

  mensaje += `\n*Total a pagar:* $${total} MXN\n\n`;
  mensaje += "¿Tienen disponibilidad para entrega?";

  const mensajeEncoded = encodeURIComponent(mensaje);
  const url = `https://wa.me/${TELEFONO_WHATSAPP}?text=${mensajeEncoded}`;

  window.open(url, '_blank');
}

// 7. Funciones auxiliares para el Toast Notificación y el Botón Flotante
function mostrarNotificacion(mensaje) {
  const toast = document.getElementById("notificacion");
  if (!toast) return;

  toast.innerText = mensaje;
  toast.classList.add("visible");

  setTimeout(() => {
    toast.classList.remove("visible");
  }, 2000);
}

function irAlCarrito() {
  const seccionCarrito = document.getElementById("seccion-carrito") || document.querySelector(".carrito-container");
  if (seccionCarrito) {
    seccionCarrito.scrollIntoView({ behavior: "smooth" });
  }
}
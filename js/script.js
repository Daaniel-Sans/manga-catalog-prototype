let dbMangas = {};

async function cargarDatos() {
    try {
        const respuesta = await fetch('data/mangas.json'); 
        if (!respuesta.ok) throw new Error("No se pudo cargar el archivo JSON");
        
        dbMangas = await respuesta.json();
        console.log("Base de datos de mangas cargada con éxito");
    } catch (error) {
        console.error("Error crítico:", error);
    }
}

cargarDatos();

const modal = document.getElementById('modal-galeria');
const modalContenido = document.getElementById('modal-contenido');
const modalTitulo = document.getElementById('modal-titulo');
const lightbox = document.getElementById('modal-lightbox');
const lightboxImg = document.getElementById('lightbox-img');

function obtenerUrlOptimizada(url, ancho = 1000) {
    if (!url) return "";
    return url.replace(/\/upload\/(v\d+\/)?/, `/upload/f_auto,q_auto,w_${ancho}/`);
}

function cambiarPortada(nuevaRuta, idManga) {
    const panel = document.querySelector(`.manga-panel.${idManga === 'ippo' ? 'oscuro' : 'claro'}`);
    const imagenPrincipal = panel.querySelector('.manga-visual img');
    
    if (imagenPrincipal) {
        imagenPrincipal.src = obtenerUrlOptimizada(nuevaRuta, 1000);
        imagenPrincipal.classList.remove('espejo');
    }
}

function abrirGaleria(idManga) {
    const manga = dbMangas[idManga];
    
    if (!manga) {
        console.error("El manga solicitado no existe en el JSON. ID buscado:", idManga);
        return;
    }

    modalTitulo.textContent = manga.titulo;
    
    let htmlGrid = '<div class="grid-modal">';
    manga.portadas.forEach((url) => {
        const urlMini = obtenerUrlOptimizada(url, 250);
        htmlGrid += `
            <img src="${urlMini}" 
                 alt="Portada" 
                 loading="lazy" 
                 onclick="verImagenGrande('${url}')">`;
    });
    htmlGrid += '</div>';
    
    modalContenido.innerHTML = htmlGrid;
    modal.showModal();
}

function verImagenGrande(urlImagen) {
    lightboxImg.src = obtenerUrlOptimizada(urlImagen, 1200);
    lightbox.showModal();
}

function cerrarGaleria() {
    modal.close();
    modalContenido.innerHTML = "";
}

function cerrarLightbox(evento) {
    if (evento.target === lightbox) {
        lightbox.close();
    }
}
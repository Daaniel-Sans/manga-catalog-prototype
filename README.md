# SHISEN 視線 | Manga Gallery Prototype

**SHISEN 視線** es un prototipo de interfaz web para explorar un catálogo de manga. El proyecto se centra en una experiencia de usuario fluida en la que se optimizan el rendimiento de imágenes en tiempo real.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white)

## ✨ Características

- **Diseño Editorial:** Estética inspirada en revistas de manga con tipografía *Anton* para títulos de gran impacto.
- **Galería Dinámica:** Sistema de carga de portadas mediante archivos de datos externos.
- **Optimización con Cloudinary:** Las imágenes se transforman automáticamente mediante URL (`f_auto, q_auto`) para mejorar los tiempos de carga.
- **Modales Nativos:** Uso de la API `<dialog>` de HTML5 para una navegación limpia y accesible.
- **Arquitectura de Datos Híbrida:** Uso de JSON para la lógica de la aplicación y XML para metadatos descriptivos.

## 📂 Estructura del Proyecto

```text
├── index.html          # Estructura principal
├── css/
│   └── styles.css      # Estilos, animaciones y Media Queries
├── js/
│   └── script.js       # Lógica de carga, modales y optimización
├── data/
│   ├── mangas.json     # Base de datos de imágenes (Cloudinary)
│   └── coleccion.xml   # Metadatos y ficha técnica de las obras
└── assets/
    └── img/            # Recursos visuales locales
```
## ✒️ Autor

- **Daniel Pavón**


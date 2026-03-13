# SHISEN 視線 | Manga Gallery Prototype

**SHISEN 視線** is a web interface prototype designed for exploring a manga catalog. The project focuses on providing a seamless user experience by optimizing real-time image rendering and performance.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white)

## 📸 Screenshots

**(Home View)**

<img width="1894" height="904" alt="image" src="https://github.com/user-attachments/assets/afe5f732-dd2d-4944-b0de-3a05c43bbd73" />

<img width="1899" height="909" alt="image" src="https://github.com/user-attachments/assets/524e5503-db65-4734-afb9-95eeb3530150" />

<img width="1893" height="905" alt="image" src="https://github.com/user-attachments/assets/6cec443f-f098-4f65-ae9d-c27ee91e9d5b" />

**(Details Modal)**

<img width="1894" height="903" alt="image" src="https://github.com/user-attachments/assets/70b8aade-9ad7-4451-b345-34bd4bed7d4a" />

<img width="1898" height="902" alt="image" src="https://github.com/user-attachments/assets/2eeb583c-27c0-4a1f-9234-67274d782f92" />

<img width="1898" height="907" alt="image" src="https://github.com/user-attachments/assets/c36a8a47-acae-48c3-9d21-1f9ab471e305" />

<img width="1898" height="902" alt="image" src="https://github.com/user-attachments/assets/4c16490f-a9fb-48a1-b1d0-57ee675cf3a3" />






## ✨ Features

- **Dynamic Gallery:** Cover loading system driven by external data files.
- **Cloudinary Optimization:** Images are automatically transformed via URL parameters (`f_auto, q_auto`) to significantly improve loading times and save bandwidth.
- **Native Modals:** Implementation of the HTML5 `<dialog>` API for a clean, accessible, and native navigation experience.
- **Hybrid Data Architecture:** Utilizes JSON for application logic and routing, alongside XML for comprehensive descriptive metadata.

## 📂 Project Structure

```text
├── index.html          # Main HTML structure
├── css/
│   └── styles.css      # Styles, animations, and Media Queries
├── js/
│   └── script.js       # Loading logic, modal handling, and optimization
├── data/
│   ├── mangas.json     # Image database (Cloudinary URLs)
│   └── coleccion.xml   # Metadata and technical details of the mangas
└── assets/
    └── img/            # Local visual assets (logos, icons, placeholders)

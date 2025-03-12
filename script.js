// =============================================
// Menú Hamburguesa (Responsive)
// =============================================
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    // Alternar visibilidad del menú al hacer clic en el botón de hamburguesa
    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('active');
        menuToggle.setAttribute('aria-expanded', menu.classList.contains('active'));
    });

    // Cerrar el menú al hacer clic en un enlace (útil para móviles)
    menu.querySelectorAll('a').forEach(function(link) {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) { // Solo para móviles
                menu.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', false);
            }
        });
    });

    // Cerrar el menú al hacer clic fuera de él
    document.addEventListener('click', function(event) {
        if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
            menu.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', false);
        }
    });
});

// =============================================
// Formulario de Reservas
// =============================================
document.getElementById('reservaForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const servicio = document.getElementById('servicio').value;
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;

    // Validar que todos los campos estén llenos
    if (nombre && email && telefono && servicio && fecha && hora) {
        // Simular envío de datos al backend
        console.log('Reserva enviada:', { nombre, email, telefono, servicio, fecha, hora });

        // Mostrar mensaje de éxito
        alert('Reserva realizada con éxito. Nos pondremos en contacto contigo pronto.');

        // Limpiar el formulario
        document.getElementById('reservaForm').reset();
    } else {
        alert('Por favor, completa todos los campos del formulario.');
    }
});

// =============================================
// Formulario de FAQs
// =============================================
let faqs = [
    {
        pregunta: "¿Qué es el visagismo?",
        respuesta: "El visagismo es una técnica que estudia las formas del rostro para realzar la belleza natural de cada persona.",
        fecha: "2023-10-01"
    },
    {
        pregunta: "¿Cómo elijo el color de cabello adecuado?",
        respuesta: "La colorimetría te ayuda a seleccionar el tono que mejor se adapta a tu piel y estilo.",
        fecha: "2023-10-05"
    }
];

// Función para mostrar las FAQs
function mostrarFAQs() {
    const faqList = document.getElementById('faqList');
    if (faqList) {
        faqList.innerHTML = '';

        faqs.forEach((faq, index) => {
            const faqItem = document.createElement('div');
            faqItem.classList.add('faq-item');
            faqItem.innerHTML = `
                <h3>${faq.pregunta}</h3>
                <p>${faq.respuesta}</p>
                <p><em>Publicado el: ${faq.fecha}</em></p>
            `;
            faqList.appendChild(faqItem);
        });
    }
}

// Función para agregar una nueva pregunta
document.getElementById('preguntaForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const pregunta = document.getElementById('pregunta').value;

    if (pregunta) {
        // Simular envío de la pregunta (aquí podrías enviarla a un backend)
        const nuevaPregunta = {
            pregunta: pregunta,
            respuesta: "La profesional responderá pronto...",
            fecha: new Date().toISOString().split('T')[0] // Fecha actual
        };

        faqs.push(nuevaPregunta);
        mostrarFAQs();

        // Limpiar el formulario
        document.getElementById('preguntaForm').reset();
        alert('Tu pregunta ha sido enviada. ¡Gracias!');
    } else {
        alert('Por favor, escribe tu pregunta.');
    }
});

// Mostrar FAQs al cargar la página
document.addEventListener('DOMContentLoaded', mostrarFAQs);

// =============================================
// Galería Interactiva
// =============================================
document.addEventListener('DOMContentLoaded', function() {
    const galeriaItems = document.querySelectorAll('.galeria-item img');

    galeriaItems.forEach(item => {
        item.addEventListener('click', function() {
            alert('Has seleccionado: ' + item.alt);
        });
    });
});

// =============================================
// Carga Dinámica de Contenido (Opcional)
// =============================================
document.addEventListener('DOMContentLoaded', function() {
    // Simular carga de contenido dinámico (por ejemplo, desde una API)
    const blogSection = document.getElementById('blog');

    if (blogSection) {
        const blogPosts = [
            { title: 'Tendencias de Visagismo 2023', content: 'Descubre las últimas tendencias en visagismo para este año.' },
            { title: 'Cómo elegir el color perfecto', content: 'Aprende a seleccionar el tono de cabello que mejor se adapta a ti.' },
            { title: 'Consejos para cuidar tu cabello', content: 'Tips esenciales para mantener tu cabello saludable y brillante.' }
        ];

        blogPosts.forEach(post => {
            const article = document.createElement('article');
            article.innerHTML = `
                <h2>${post.title}</h2>
                <p>${post.content}</p>
                <a href="#" class="btn">Leer más</a>
            `;
            blogSection.appendChild(article);
        });
    }
});

// =============================================
// Scroll Suave para Enlaces Internos
// =============================================
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// =============================================
// Validación de Formularios
// =============================================
document.addEventListener('DOMContentLoaded', function() {
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        form.addEventListener('submit', function(event) {
            let valid = true;
            form.querySelectorAll('input, textarea, select').forEach(input => {
                if (!input.value.trim()) {
                    valid = false;
                    input.classList.add('error');
                } else {
                    input.classList.remove('error');
                }
            });

            if (!valid) {
                event.preventDefault();
                alert('Por favor, completa todos los campos requeridos.');
            }
        });
    });
});
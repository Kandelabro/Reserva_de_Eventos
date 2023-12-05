function abrirWhatsApp() {
    var numeroTelefono = '7713836272'; // Reemplaza con tu número de teléfono
    var mensaje = 'Hola,necesito mas informacion sobre los conciertos que ofrece LuminaryTickets.';

    // Construye el enlace de WhatsApp con el número y el mensaje predefinidos
    var urlWhatsApp = 'https://api.whatsapp.com/send?phone=' + numeroTelefono + '&text=' + encodeURIComponent(mensaje);

    // Abre una nueva ventana o pestaña del navegador con el enlace de WhatsApp
    window.open(urlWhatsApp, '_blank');
}
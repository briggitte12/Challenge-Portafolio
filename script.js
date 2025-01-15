document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".contact-form");

    form.addEventListener("submit", event => {
        event.preventDefault();

        const nombre = form.elements["nombre"].value;
        const email = form.elements["email"].value;
        const mensaje = form.elements["mensaje"].value;

        if (!nombre || !email || !mensaje) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        console.log("Parámetros antes de enviar:", {
            to_email: email, 
            from_name: nombre,
            from_email: "briggittemartinezvidaurre@gmail.com",
            mensaje: mensaje,
            subject: "Interés en tu perfil por tu portafolio"
        });

        emailjs.init("4iHVgJpJkhBwjjKfn");

        const templateParams = {
            to_email: "briggittemartinezvidaurre@gmail.com",
            from_name: nombre,
            from_email: "briggittemartinezvidaurre@gmail.com",
            reply_to: email,
            mensaje: mensaje,
            subject: "Interés en tu perfil por tu portafolio"
        };

        console.log("Parámetros enviados:", JSON.stringify(templateParams, null, 2));

        emailjs.send("service_jqts81v", "template_ks71041", templateParams)
            .then((response) => {
                console.log("Correo enviado exitosamente:", response);
                alert(`Gracias ${nombre}, tu mensaje ha sido enviado correctamente.`);
                form.reset();
            })
            .catch((error) => {
                console.error("Error al enviar el correo:", error);
                alert("Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.");
            });
    });
});

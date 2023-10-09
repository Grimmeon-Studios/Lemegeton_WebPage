function openModal(element) {
    const modal = document.getElementById("myModal");
    modal.style.display = "block";

    // Obtiene el número del atributo personalizado data-modal-number
    const modalNumber = element.getAttribute("data-modal-number");

    // Utiliza el número para determinar qué contenido mostrar
    if (modalNumber === "1") {
        document.getElementById("modalTitle").textContent = "El Vestíbulo de los Condenados";
        document.getElementById("modalContent").textContent = "Contenido único para el elemento 1.";
      
 document.getElementById("modalImage").src = "imagen1.jpg";
    } else if (modalNumber === "2") {
        document.getElementById("modalTitle").textContent = "Infierno de las Llamas";
        document.getElementById("modalContent").textContent = "Contenido único para el elemento 2.";
      
 document.getElementById("modalImage").src = "imagen1.jpg";
    } else if (modalNumber === "3") {
        document.getElementById("modalTitle").textContent = "Infierno de la escarcha";
        document.getElementById("modalContent").textContent = "Contenido único para el elemento 3.";
      
 document.getElementById("modalImage").src = "imagen1.jpg";
    } else if (modalNumber === "4") {
        document.getElementById("modalTitle").textContent = "Infierno de la soledad";
        document.getElementById("modalContent").textContent = "Una enorme bestia que habita entre los círculos de la ira y la violencia, está bajo el mando de Satanás y es el encargado de mantener en sufrimiento las almas de ambos círculos. Es fuerte, resistente y altamente agresivo, por lo que debe combatirse con astucia y agilidad.";
    } else if (modalNumber === "5") {
        document.getElementById("modalTitle").textContent = "Infierno de la soberbia";
        document.getElementById("modalContent").textContent = "Contenido único para el elemento 2.";
        // Agrega condiciones para otros números de modal si es necesario
        document.getElementById("modalImage").src = "imagen1.jpg";
    }
}

// Cierra el modal
function closeModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
}

// Cierra el modal si se hace clic fuera de él (opcional)
window.onclick = function(event) {
    const modal = document.getElementById("myModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
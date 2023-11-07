function openModal(element) {
    const modal = document.getElementById("myModal");
    modal.style.display = "block";
    // Obtiene el número del atributo personalizado data-modal-number
    const modalNumber = element.getAttribute("data-modal-number");
    // Utiliza el número para determinar qué contenido mostrar
    if (modalNumber === "1") {
        document.getElementById("modalTitle").textContent = "El Vest\xedbulo de los Condenados";
        document.getElementById("modalContent").textContent = "El 0vest\xedbulo de los condenados es un concepto que proviene de la literatura y la religi\xf3n, y no tiene una base s\xf3lida en las ense\xf1anzas religiosas principales, como la Biblia. Se refiere a un espacio o lugar imaginario donde se cree que las almas de los pecadores o los no redimidos esperan su destino despu\xe9s de la muerte. En la literatura y la cultura popular, se ha utilizado en varias obras para describir un lugar donde las almas est\xe1n en una especie de limbo o estado intermedio antes de ser juzgadas o enviadas al Infierno.";
        document.getElementById("modalImage").src = "https://github.com/Grimmeon-Studios/Lemegeton_WebPage/blob/main/NamelssSite/src/imgs/elVestibulo.jpg?raw=true";
    } else if (modalNumber === "2") {
        document.getElementById("modalTitle").textContent = "Infierno de las Llamas";
        document.getElementById("modalContent").textContent = "La conjunci\xf3n de los tres primeros c\xedrculos del infierno: limbo, lujuria y gula. Es la primera de las tres partes del infierno, siendo la m\xe1s com\xfanmente conocida. Su color principal es el rojo vivo, est\xe1 lleno de naranjas y toques amarillos, contrastados por grises oscuros para los detalles. El suelo parece hecho de carne viva y roca, las paredes son roca pura. No hay nada humano aqu\xed, parece un entramado de cuevas ardientes.";
        document.getElementById("modalImage").src = "https://github.com/Grimmeon-Studios/Lemegeton_WebPage/blob/main/NamelssSite/src/imgs/llamas.jpg?raw=true";
    } else if (modalNumber === "3") {
        document.getElementById("modalTitle").textContent = "Infierno de la escarcha";
        document.getElementById("modalContent").textContent = "La conjunci\xf3n de los tres \xfaltimos c\xedrculos del infierno: violencia, fraude y traici\xf3n, est\xe1 ampliamente basado en este \xfaltimo. Cuando El Diablo fue expulsado del cielo y toc\xf3 la tierra, dej\xf3 a su paso una grieta f\xedsica y et\xe9rica enorme, esos son los c\xedrculos del infierno. Esta \xfaltima parte es el hogar de El Diablo, cuyas alas son tan fuertes y poderosas que un m\xednimo movimiento destruye todo a su paso y congela lo que se atraviese, por eso toda esta \xfaltima parte est\xe1 sumergida en un hielo eterno e imposible de derretir. Los colores son azules muy cercanos al blanco, las paredes y el suelo est\xe1n hechas de hielo eterno, se ven a\xfan las grietas de c\xf3mo fue creado por el batir de las enormes alas, por lo que se ven las marcas de la tormenta, creando pinchos y surcos. ";
        document.getElementById("modalImage").src = "https://github.com/Grimmeon-Studios/Lemegeton_WebPage/blob/main/NamelssSite/src/imgs/escarcha.jpg?raw=true";
    } else if (modalNumber === "4") {
        document.getElementById("modalTitle").textContent = "Infierno de la soledad";
        document.getElementById("modalContent").textContent = "La conjunci\xf3n de los tres c\xedrculos del infierno que siguen: codicia, ira y herej\xeda. Es la segunda parte del infierno, y est\xe1 basado en el concepto de la soledad eterna, la quietud, la nada. Su paleta de color se basa en el negro para casi todo, con unas paredes de m\xe1rmol pulido. El suelo es de m\xe1rmol derruido y quebrantado por el tiempo, aunque a\xfan se ven un poco las l\xedneas de los baldosines. Este m\xe1rmol es de un color amarillo p\xe1lido, casi blanco, y contrasta con algunas l\xe1mparas de fuego morado que hay en las paredes.";
        document.getElementById("modalImage").src = "https://github.com/Grimmeon-Studios/Lemegeton_WebPage/blob/main/NamelssSite/src/imgs/FrostBitting.jpg?raw=true";
    } else if (modalNumber === "5") {
        document.getElementById("modalTitle").textContent = "Infierno de la soberbia";
        document.getElementById("modalContent").textContent = "La conjunci\xf3n de los tres c\xedrculos del infierno que siguen: codicia, ira y herej\xeda. Es la segunda parte del infierno, y est\xe1 basado en el concepto de la soledad eterna, la quietud, la nada. Su paleta de color se basa en el negro para casi todo, con unas paredes de m\xe1rmol pulido. El suelo es de m\xe1rmol derruido y quebrantado por el tiempo, aunque a\xfan se ven un poco las l\xedneas de los baldosines. Este m\xe1rmol es de un color amarillo p\xe1lido, casi blanco, y contrasta con algunas l\xe1mparas de fuego morado que hay en las paredes. ";
        // Agrega condiciones para otros números de modal si es necesario
        document.getElementById("modalImage").src = "https://github.com/Grimmeon-Studios/Lemegeton_WebPage/blob/main/NamelssSite/src/imgs/kingambit.png?raw=true";
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
    if (event.target == modal) modal.style.display = "none";
};

//# sourceMappingURL=Infierno.596c22bc.js.map

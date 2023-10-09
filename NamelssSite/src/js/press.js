var cursor = document.getElementById('cursor');
let cursorIsExpanded = true;

cursor.addEventListener('mousedown', function () {
    setTimeout(function () {
        cursorIsExpanded = true;
    }, 500); 

    if (cursorIsExpanded) {
        fetch('creditos.html')
            .then(response => response.text())
            .then(data => {
                document.body.innerHTML = data;
            })
            .catch(error => console.error('Error al cargar el nuevo contenido', error));
    }
});

window.onmousemove = function(e){
  var x = e.clientX,
      y = e.clientY;
  cursor.style.left = x + 'px';
  cursor.style.top = y + 'px';
}


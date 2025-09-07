// 🌈 Variable global para guardar el color
    let color = 'white';

    // 🎹 Evento de teclado
    document.addEventListener("keydown", function(event) {
      switch (event.key) {
        case 'a':
          color = 'pink';
          break;
        case 's':
          color = 'orange';
          break;
        case 'd':
          color = 'skyblue';
          break;
        default:
          return; // Ignora otras teclas
      }

      // 🎨 Aplica el color al div con id "key"
      document.getElementById("key").style.backgroundColor = color;
    });

    // Crear nuevos divs con colores específicos
      else if (event.key === 'q') {
        crearDiv('purple');
      } else if (event.key === 'w') {
        crearDiv('gray');
      } else if (event.key === 'e') {
        crearDiv('brown');
      };

    // / 🧱 Función para crear un nuevo div con color dado
    function crearDiv(color) {
      const nuevoDiv = document.createElement("div");
      nuevoDiv.style.width = "200px";
      nuevoDiv.style.height = "200px";
      nuevoDiv.style.backgroundColor = color;
      nuevoDiv.style.border = "2px solid black";
      nuevoDiv.style.marginTop = "10px";
      document.body.appendChild(nuevoDiv);
    }

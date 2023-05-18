document.addEventListener('DOMContentLoaded', () => {
  const output = document.getElementById('output');
  const input = document.getElementById('input');
  const inputWrapper = document.querySelector('.input-wrapper');
  const text = "Bienvenido al portafolio de ZeldaMan3, porfavor escriba 'help' para ver los comandos disponibles. \n\nhttps://github.com/ZeldaMan3 \n\n";
  let index = 0;


  function typeWriter() {
    output.textContent += text[index];
    index++;

    if (index < text.length) {
      setTimeout(typeWriter, 25); // Velocidad de escritura (25 ms)
    }
  }

  typeWriter();

  input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Evitar el comportamiento predeterminado del Enter (nueva línea)

      const command = input.value.trim();

      // Limpiar el área de entrada de texto
      input.value = '';

      // Crear un nuevo elemento de salida con el comando
      const outputLine = document.createElement('div');
      const commandText = document.createElement('span');
      commandText.textContent = command;
      commandText.classList.add('command');
      commandText.style.marginBottom = '0.5em'; // Interlineado de 0.5em

      outputLine.appendChild(commandText);

      // Agregar el nuevo elemento de salida al área de salida
      output.appendChild(outputLine);

      // Hacer scroll hacia abajo para mostrar el nuevo texto
      output.scrollTop = output.scrollHeight;

      // Ejecutar comandos
      executeCommand(command);
    }

    
    



  });

  function clearOutput() {
    output.innerHTML = "";
  }

  
  
  function executeCommand(command) {
    switch (command) {
      case 'help':
        showAvailableCommands();
        break;
      case 'test':
        addOutputLine('Esto es una prueba');
        break;
      
      case 'career':
          addOutputLine('Poner cualquier cosa acá. Yo tenia mis datos personales:)');
          break; 
      case 'whoami':
          addOutputLine('Usuario');
          break; 
      case 'contact':
          contacto();
          break;   
      case 'sudo':
        addOutputLine('Only K3rnelman3/Zeldaman3 can get the superadmin perms. Permission denied.');
           break;       
      case 'whatisthis':
         addOutputLine('\nPrimero que nada: ¿Que es una terminal?\nUna terminal es una interfaz de línea de comandos (CLI, por sus siglas en inglés) que permite a los usuarios interactuar con un sistema operativo o ejecutar comandos y programas utilizando texto o comandos de texto plano.');
         setTimeout(() => {
          addOutputLine('Segundo: Catolica.');
    
        }, 7000);
        
         break;   
      case 'ip':
            fetch('https://api.ipify.org?format=json')
              .then(response => response.json())
              .then(data => {
                addOutputLine("Tu IP publica es: " + data.ip);
                
              })
              .catch(error => {
                addOutputLine("Hubo un error al encontrar tu IP :( ");
              });
              setTimeout(() => {
                addOutputLine("Esto es una API publica, yo no tengo tu IP ni nada, solo fue la API, lo prometo.");
              }, 5000);
              break;
            
      // Agrega más comandos aquí
      
      case 'clear':
        clearOutput();
        break;

      default:
        addOutputLine('Comando no válido');
        break;
    }
  }

  function showAvailableCommands() {
    const commands = [
      'help - Muestra los comandos disponibles',
      'whatisthis - Muestra que es una terminal y el porque utilizo esto.',
      'test - Ejecuta una prueba',
      'career - Muestra un resumen de los conocimientos que poseo',
      'whoami - ¿Quien es el usuario actual?',
      'contact - Ejecuta el comando para ver mis redes de contacto',
      'clear - Limpia la terminal',
      'sudo - Intentas convertirte en super usuario',
      'ip - BOOOOO',

      // Agrega más comandos aquí
    ];

    commands.forEach((command) => {
      addOutputLine(command);
    });
  }


  
  function contacto() {
    const commands = [
      'Github  - https://github.com/ZeldaMan3 (Aqui subo todas las cosas que hago y encuentro relevantes, pueden ser cosas interesantes hasta otras que son muy vagas)',
      // Agrega más comandos aquí
    ];

    commands.forEach((command) => {
      addOutputLine(command);
    });
  }

  function addOutputLine(text) {
    const outputLine = document.createElement('div');
    const outputText = document.createElement('span');
    outputLine.appendChild(outputText);
    outputLine.style.marginBottom = '0.5em'; // Interlineado de 0.5em
    output.appendChild(outputLine);
    output.scrollTop = output.scrollHeight;

    let index = 0;

    function typeWriter() {
      outputText.textContent += text[index];
      index++;

      if (index < text.length) {
        setTimeout(typeWriter, 25); // Velocidad de escritura (25 ms)
      }
    }

    typeWriter();

    
  }
});

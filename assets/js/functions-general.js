// Funcionamiento del Calendario Dinámico
document.addEventListener("DOMContentLoaded", function () {
  const dayNameElement = document.querySelector(".day-name");
  const fullDateElement = document.querySelector(".full-date");

  function updateDate() {
    const now = new Date();
    const Options = { weekday: "long" }; // 'long' para el nombre completo del día
    const T_Options = {
      day: "numeric",
      month: "long", // 'long' para el nombre completo del mes
      year: "numeric",
    };

    // Obtener el nombre del día en español y convertir a mayúsculas
    let dayName = now.toLocaleDateString("es-ES", Options);
    dayNameElement.textContent = dayName.toUpperCase();

    // Formatear la fecha como "DD, Mes AAAA"
    const day = now.getDate();
    const month = now.toLocaleDateString("es-ES", { month: "long" });
    const year = now.getFullYear();

    // Mayúsculas en la primera letra del mes
    const capitalizedMonth = month.charAt(0).toUpperCase() + month.slice(1);

    fullDateElement.textContent = `${day}, ${capitalizedMonth} ${year}`;
  }

  updateDate(); // Llama a la función una vez para establecer la fecha inicial
  // Opcional: Actualizar la fecha cada cierto tiempo (ej. cada minuto)
  // setInterval(updateDate, 60000);
});

//Funcionamiento de los botones de las APPS
document.addEventListener("DOMContentLoaded", function () {
  const btnArkova = document.getElementById("open-arkova");
  if (btnArkova) {
    btnArkova.addEventListener("click", function () {
      window.open("http://gtecnologia.bva.org.ve/arkova", "_blank");
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const btnInventrack = document.getElementById("open-inventrack");
  if (btnInventrack) {
    btnInventrack.addEventListener("click", function () {
      window.open("http://gtecnologia.bva.org.ve/invtrack", "_blank");
    });
  }
});

// Funciones del Contenido Dinámico
document.addEventListener("DOMContentLoaded", () => {
  const contentData = {
    descripcion: [
      { type: "h2", text: "DESCRIPCIÓN DEL DEPARTAMENTO" },
      {
        type: "h4",
        text: "La Gerencia de Tecnología de la Asociación Civil Bibliotecas Virtuales de Aragua se encarga primordialmente de la gestión del soporte técnico y la conectividad de los usuarios, asegurando la eficiencia operativa mediante la administración segura de dispositivos y plataformas tecnológicas."
      },
      {
        type: "h4",
        text: "En tal sentido se encarga de mantener conectados los diferentes departamentos de la institución o brindar apoyo a las diferentes sedes de A.C. BBVVA u otras instituciones externas que dependan de sus servicios y/o plataforma."
      }
    ],
    mision: [
      { type: "h2", text: "MISIÓN DE LA ASOCIACIÓN CIVIL BIBLIOTECAS VIRTUALES DE ARAGUA" },
      {
        type: "h4",
        text: "Satisfacer las necesidades de conocimiento tecnológico en el estado Aragua, implementando estrategias dirigidas para la socialización del conocimiento a las comunidades en su proceso permanente de formación tecnológica, a través de la implementación de políticas en el área de ciencia, tecnología y educación, con miras al establecimiento de un sociedad independiente, transparente y abierta que incorpore metodologías adquiridas en la búsqueda de la mayor suma de seguridad social, para el pueblo aragüeño."
      }
    ],
    vision: [
      { type: "h2", text: "VISIÓN DE LA ASOCIACIÓN CIVIL BIBLIOTECAS VIRTUALES DE ARAGUA"},
      {
        type: "h4",
        text: "Establecerse como un ente líder y referencia en el marco estadal, en la ejecución de políticas desarrolladas en el ámbito científico y tecnológico, a través del acceso permanente a los medios tecnológicos y de comunicación, como mecanismos fundamentales para lograr la independencia tecnológica y económica de la nación, bajo parámetros de eficiencia y participación, desarrollando la innovación en todos los sectores del poder popular y el colectivo en general."
      }
    ],
    objetivos: [
      { type: "h2", text: "OBJETIVOS DE LA ASOCIACIÓN CIVIL BIBLIOTECAS VIRTUALES DE ARAGUA" },
      {
        type: "h4",
        text: "Su objetivo general se enfoca en Gestionar el soporte técnico y conectividad a los usuarios mediante recursos tecnológicos y herramientas para la eficiencia de las operaciones dentro de la institución. El cual busca ser alcanzado mediante los siguientes objetivos específicos:"
      },
      {
        type: "ul",
        items: [
          "Diagnosticar fallas en los equipos informáticos de Bibliotecas Virtuales de Aragua mediante recursos tecnológicos, digitales y herramientas para solventar las averías.",
          "Determinar las variables cualitativas y cuantitativas mediante recolección de datos técnicos y generales para el conocimiento de las posibles causas de eventualidades dentro de la organización.",
          "Resolver las averías de forma inmediata mediante una planificación para mantener la continuidad de las operaciones de cada uno de las coordinaciones y gerencias de Bibliotecas Virtuales de Aragua en cada una de sus sedes.",
          "Estudiar la variabilidad financiera de nuevos recursos y tendencias tecnológicas mediante herramientas gerenciales y presupuesto para optimizar las operaciones en Bibliotecas Virtuales de Aragua.",
          "Evaluación de los resultados mediante recursos gerenciales e informes de gestión para medir el rendimiento de cada uno de los trabajadores de la Gerencia de Tecnología de Bibliotecas Virtuales de Aragua."
        ]
      }
    ],
    funciones: [
      { type: "h2", text: "FUNCIONES DEL DEPARTAMENTO" },
      { type: "ul",
        items: [
          "Proveer soporte técnico a usuarios de BVA.",
          "Administrar los dispositivos y plataformas tecnológicas presentes en BVA.",
          "Garantizar la conectividad entre las diferentes sedes u otras instituciones dependientes.",
          "Implementar controles de seguridad.",
          "Mantener la infraestructura tecnológica, (red de servidores).",
          "Optimizar el rendimiento de los sistemas.",
          "Capacitar al personal en el uso de tecnologías.",
          "Supervisar los proyectos tecnológicos de BVA.",
        ]
      }
    ],
    organigrama: [
      { type: "h2", text: "ORGANIGRAMA INTERNO DEL DEPARTAMENTO" },
      { type: "h4", text: "El organigrama del departamento está compuesto por el Gerente, el Coordinador Analista y los Técnicos Auxiliares / Soporte Administrativo enfocados en diferentes áreas." },
      {
        type: "img",
        src: "organigrama.jpg", // Debo reemplar acá con el organigrama cuando lo tenga.
        alt: "Organigrama del departamento"
      }
    ],
    contacto: [
      { type: "h2", text: "CONTACTO" },
      {
        type: "h4",
        text: 'Puedes comunicarte con nosotros a través del correo institucional: <a href="mailto:gtecnologia@bva.org.ve">gtecnologia@bva.org.ve</a> para reportar fallos o solicitar nuestros servicios de soporte y mantenimiento general. También puedes usarlo para enviarnos informes o instrucciones relacionadas con trabajos específicos del departamento.'
      },
      {
        type: "h4",
        text: 'Si deseas utilizar las pantallas de la Sala Multimedia Hugo Chávez, deberás enviar los recursos o enlaces que se mostrarán durante tu presentación al correo: <a href="mailto:gerenciadetecnologiabva@gmail.com">gerenciadetecnologiabva@gmail.com</a>.'
      },
      {
        type: "h4",
        text: "Para cualquier otra consulta o situación, puedes visitarnos en nuestra sede central: Av. Sucre, Edif. Biblioteca Virtual, N.º 26, Piso 2, Oficina Gerencia de Tecnología, Sala Master de Servidores. Urb. San Isidro, Maracay, Estado Aragua, Venezuela."
      }
    ]
  };

  const contentContainer = document.getElementById("dynamic-text");
  const buttons = document.querySelectorAll("[data-content]");

  function renderContent(key) {
    contentContainer.innerHTML = ""; // Limpia contenido actual

    contentData[key].forEach(element => {
      let node;

      switch (element.type) {
        case "h2":
        case "h4":
          node = document.createElement(element.type);
          //node.textContent = element.text;
          node.innerHTML = element.text;
          break;

        case "ul":
          node = document.createElement("ul");
          element.items.forEach(itemText => {
            const li = document.createElement("li");
            li.textContent = itemText;
            node.appendChild(li);
          });
          break;

        case "img":
          node = document.createElement("img");
          node.src = element.src;
          node.alt = element.alt;
          node.style.maxWidth = "100%";
          break;

        default:
          break;
      }

      if (node) contentContainer.appendChild(node);
    });
  }

  // Manejo de botones y clase activa
  buttons.forEach(button => {
    button.addEventListener("click", (event) => {
      event.preventDefault();

      // Quitar clase activa de todos los botones
      buttons.forEach(btn => btn.classList.remove("active"));

      // Añadir clase activa al botón clicado
      button.classList.add("active");

      // Mostrar contenido
      const key = button.getAttribute("data-content");
      renderContent(key);
    });
  });

  // Mostrar contenido inicial y marcar botón activo por defecto
  const initialKey = 'descripcion';
  renderContent(initialKey);
  const initialButton = document.querySelector(`[data-content="${initialKey}"]`);
  if (initialButton) initialButton.classList.add("active");
});
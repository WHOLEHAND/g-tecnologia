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


function actualizarReloj() {
  const fecha = new Date();
  
  let horas = fecha.getHours();
  let minutos = fecha.getMinutes();

  // Asegurar formato de dos dígitos (por ej: 09:05)
  horas = horas < 10 ? "0" + horas : horas;
  minutos = minutos < 10 ? "0" + minutos : minutos;

  // Imprimir en el elemento con id="reloj"
  document.getElementById("reloj").textContent = `${horas}:${minutos}`;
}

// Ejecutar al cargar la página para evitar retrasos de 1 segundo
actualizarReloj();

// Actualizar cada segundo para capturar el cambio exacto de minuto
setInterval(actualizarReloj, 1000);

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

document.addEventListener("DOMContentLoaded", function () {
  const btnInventrack = document.getElementById("open-Nube");
  if (btnInventrack) {
    btnInventrack.addEventListener("click", function () {
      window.open("http://cloud.bva.org.ve/", "_blank");
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const btnInventrack = document.getElementById("open-ManualBasic");
  if (btnInventrack) {
    btnInventrack.addEventListener("click", function () {
      window.open("http://gtecnologia.bva.org.ve/manual_basic/", "_blank");
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
      { type: "h2", text: "ORGANIGRAMA DE LA ASOCIACIÓN CIVIL BIBLIOTECAS VIRTUALES DE ARAGUA" },
      {
        type: "img",
        src: "assets/img/organigrama-act.jpeg", // Debo reemplar acá con el organigrama cuando lo tenga.
        alt: "Organigrama de la Asociación Civil Bibliotecas Virtuales de Aragua vigente 2014"
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
    ],

    Historia: [
      { type: "h2", text: "HISTORIA"},
      {
        type: "h4",
        text: "La Asociación Civil Bibliotecas Virtuales de Aragua (A.C.BBVVA), se encuentra ubicada en la Av. Sucre, complejo Cultural Santos Michelena. Edif. Bibliotecas Virtuales de Aragua., dirección de correo electrónico: bibliotecasvirtuales.org.ve; Maracay – Edo. Aragua. La Asociación Civil Bibliotecas Virtuales de Aragua (A.C.BBVVA), constituida en asamblea el 24 de Noviembre de 2000, es un proyecto creado por el Gobierno del Estado Aragua; respaldado por el Gobernador Didalco Bolívar, con el propósito de democratizar el acceso a las nuevas y cambiantes tecnologías digitales y asumir el reto de abrir las puertas de la participación a los ciudadanos colocando en sus manos las mejores herramientas para acelerar el desarrollo, la formación, el estudio, el entretenimiento y la comunicación del estado Aragua.",

      },
      {
        type: "h4",
        text: "Todo ello inspirado en lo establecido en el artículo 108, Capítulo VI De los Derechos Culturales y Educativos de la Constitución de la República Bolivariana de Venezuela, cuyo texto reza que “el Estado garantizará servicios públicos de informática, con el fin de permitir el acceso universal a la información”; el artículo 26 de la Declaración Universal de los Derechos Humanos, que expresa que toda persona tiene derecho a la educación; y la Declaración sobre la utilización del progreso científico y tecnológico en interés de la paz y en beneficio de la humanidad, la cual en líneas generales expone la importancia de la transferencia de la ciencia y la tecnología es uno los medios principales de acelerar el desarrollo económico de los países del tercer mundo."
      },

      {
        type: "h4",
        text: "Bibliotecas Virtuales de Aragua es un proyecto puesto en marcha por el Presidente de AC.BBVVA, el Ing. Rafael Mendoza; que cuenta con el apoyo de un equipo de trabajo coordinado por Rafael Roa, Director Ejecutivo de la Asociación, con el objeto de masificar el dominio de las herramientas tecnológicas en el estado Aragua, conformando la primera Intranet del conocimiento en el país, llamada INTRARAGUA.  "
      },
      {
        type: "h4",
        text: "Bibliotecas Virtuales de Aragua tiene como antecedente el Centro de Información Digital (CID), fundado en la ciudad de La Victoria en el año 1996, la misma ofrecía a la población acceso masivo a servicios y aprendizaje dentro del ramo de las más avanzadas técnicas de computación e investigación en red. Esta primera experiencia permitió evaluar los alcances que suponía para el desarrollo del Estado la creación de centros similares en el resto de los municipios.  "
      },
      {
        type: "h4",
        text: "Gracias a la experiencia del CID, se desprendió en 1997 el Centro de Formación Digital (CFD) Plusvalía, ubicado en el edificio de Solidaridad Social de Caña de Azúcar. En esta oportunidad las nuevas tecnologías son empleadas para luchar contra la discapacidad, tomando como elemento fundamental la educación. Plusvalía presta atención a personas con discapacidades, deficiencia auditiva, deficiencia visual y discapacidad invisible, a fin de potenciar recursos humanos, formarlos para el trabajo, en caso de discapacidad temprana; e insertarlos en el campo laboral en caso de discapacidad tardía.  "
      },
      {
        type: "h4",
        text: "Posteriormente, se dio apertura al Centro de Información Digital para Niños (CarriCIDto), el 8 de mayo de 1998, como un programa de la Fundación del Niño de Aragua. Ubicado en la sede de dicha fundación en la ciudad de Maracay, CarriCIDto se dedicó a potenciar y desarrollar las capacidades de los niños, niñas y adolescentes como individuos, grupos y organizaciones, suministrando servicios de alta calidad asociados a la Tele-información.  "
      },
      {
        type: "h4",
        text: "Dos años después, tan larga cadena de expansión tecnológica en Aragua se planteó un nuevo norte, nada más y nada menos que el más importante municipio del Estado: Girardot, y más específicamente en el corazón de la ciudad de Maracay donde actualmente se encuentra el edificio de la Asociación Civil Bibliotecas Virtuales de Aragua, sede principal de la red de Bibliotecas Virtuales disgregadas por todo el estado Aragua. La inauguración de la sede de Biblioteca Virtual Maracay fue el 18 de Mayo del año 2.000 con una moderna estructura ubicada en el área cultural de la Gobernación de Aragua, allí albergando a un sin número de clientes desde su fundación hasta la actualidad. Ésta Biblioteca Virtual se ha convertido en el primer centro integral de información compuesto por áreas de investigación, áreas infantiles Childware y Multikids, Área de Lectura, Área de Simuladores y la respectiva Unidad de Capacitación."
      },
      {
        type: "h4",
        text: "En estos espacios la población tiene a su disposición equipos y herramientas de última tecnología, permitiéndoles la entrada al proceso de capacitación en el sector informático y en diversas áreas del conocimiento, abriendo de esta manera nuevos horizontes a la investigación. Así mismo, días más tardes, continúo la provechosa expansión de la tecnología informática a lo largo del Estado y fue así como el 29 de Mayo de ese mismo año, ya se estaba inaugurando una nueva sede, la Biblioteca Virtual Francisco de Miranda, ubicada en el Municipio Linares Alcántara. Posteriormente, para el 11 de Julio de ese mismo año, el turno le correspondió al Municipio Mario Briceño Iragorry con la Biblioteca Virtual Caña de Azúcar. De esta manera, durante el primer semestre del año se lograron materializar tres de las más importantes sedes que han contribuido a la integración de las zonas y municipios más distantes del eje central aragüeño."
      },

      {
        type: "h4",
        text: "En vista de tan acelerado crecimiento, se le suma el 18 de Enero de 2001 el Municipio Ocumare de la Costa de Oro con la Biblioteca Virtual Ocumare de la Costa de Oro, la cual vendría a fungir como centro de comunicación directa entre dicho municipio y el resto del estado. Continuando con tan sorprendente crecimiento, los días 21 y 22 de febrero de ese mismo año se estrenaron dos nuevas bibliotecas, Biblioteca Virtual Villa de Cura en el municipio Zamora y la Biblioteca Virtual Hospital Central de Maracay en el municipio Girardot respectivamente.  "
      },

      {
        type: "h4",
        text: "Esta última pasa a ser de gran importancia para el desarrollo de una de las áreas más importantes dentro de cualquier sociedad: la salud, y permite a tan importante institución, mantenerse en contacto directo con diversas organizaciones a través de la red Intraragua que aporta un valioso servicio al Estado, logrando a vez la integración de las grandes organizaciones aragüeñas y la optimización de los servicios en el área hospitalaria.  "
      },

      {
        type: "h4",
        text: "La aspiraciones de la Red de Bibliotecas Virtuales de Aragua son mucho más amplias y van más allá de las sedes hasta entonces inauguradas en todo el territorio aragüeño, puesto que el 22 de julio de 2002, se suma a la red de Bibliotecas Virtuales, la Biblioteca Virtual Barrio el Carmen, con una asombrosa y gran aceptación por la comunidad donde se encuentra y sus adyacencias; el año siguiente le correspondería el turno a los militares, se inaugura el 21 de marzo, en el Servicio de Meteorología de las Fuerzas Aéreas Venezolanas, la Biblioteca Virtual Tiempo Meteorológico; meses más tardes (24 de mayo de 2003) le correspondió al Municipio Bolívar con la inauguración de Biblioteca Virtual San Mateo; en ese mismo año la red de Bibliotecas Virtuales se extendió al sur de Aragua donde existe carencia de recursos y herramientas de información así como el limitado acceso a Internet, por lo tanto se da origen a la Biblioteca Virtual Barbacoas inaugurada el 5 de junio de 2003, la red de Bibliotecas se quedó en el sur de Aragua con la inauguración de Biblioteca Virtual Chuao el 12 de agosto de 2003."
      },

      {
        type: "h4",
        text: "De tal forma que la AC Bibliotecas Virtuales de Aragua se expande cada día más por el resto del estado, con las aperturas un aproximado de 30 bibliotecas en todo el territorio del estado Aragua, avanzando a pasos gigantesco en lo que a tecnología se requiere, y continúa con proyectos a mediano plazo las sedes de BV Colonia Tovar, BV Cagua, BV 23 de Enero, BV El Limón y BV el Consejo que proyectarán la inversión tecnológica de Aragua, con el fin de regularizar y mantener con eficacia una estrecha comunicación entre cada rincón de la región e impulsar el desarrollo en cada uno de los municipios, extendiéndolos al resto del país.  "
      },

      {
        type: "h4",
        text: "Por tal motivo, el alcance de Bibliotecas Virtuales Aragua, crece aceleradamente orientándose a satisfacer a todos los sectores de la sociedad, es decir, la escuela, la universidad, el sector salud, gobierno regional, la pequeña y mediana empresa (PYME) y hasta las grandes corporaciones, con el fin de crear un vehículo de comunicación efectiva entre ciudadanos, gobierno y empresariado, con miras a establecer la sociedad del conocimiento."
      },


    ],

    
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
          node.style.maxHeight = "1000px";
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

// Funciones del comportamiento de descarga del Organigrama
document.addEventListener("DOMContentLoaded", () => {
  const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
      if (mutation.type === "childList") {
        mutation.addedNodes.forEach(node => {
          // Asegura que sea una imagen y sea la del organigrama
          if (
            node.tagName === "IMG" &&
            node.src.includes("organigrama-act.jpeg")
          ) {
            // Asegura que no se registre el evento múltiples veces
            node.style.cursor = "pointer";
            node.title = "Haz clic para descargar el archivo de alta calidad";
            node.addEventListener("click", () => {
              const link = document.createElement("a");
              link.href = "assets/img/organigrama-act.jpeg"; // Ruta de la imagen a descargar
              link.download = "organigrama-act.jpeg"; // Nombre sugerido para la descarga
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            });
          }
        });
      }
    }
  });

  const targetNode = document.getElementById("dynamic-text");

  if (targetNode) {
    observer.observe(targetNode, {
      childList: true,
      subtree: true,
    });
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const menuBarra = document.getElementById("menubarra");
  const leftPanel = document.getElementById("leftpanel");

  if (menuBarra && leftPanel) {
    menuBarra.addEventListener("click", function(e) {
      e.stopPropagation(); // Evita interferencias con otros clicks
      leftPanel.classList.toggle("activo");
    });

    // Opcional: Si quieres que el menú se cierre al hacer clic en uno de los botones de adentro
    const botones = leftPanel.querySelectorAll(".custom-button-link");
    botones.forEach(boton => {
      boton.addEventListener("click", function() {
        // Solo en móvil (si el ancho es menor o igual a 768px)
        if (window.innerWidth <= 768) {
          leftPanel.classList.remove("activo");
        }
      });
    });
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".left-panel-carrusel");
  if (!carousel) return;

  const cards = Array.from(carousel.querySelectorAll(".app-box"));
  const total = cards.length;
  if (total === 0) return;

  let currentIndex = 0;
  let autoPlayTimer = null;
  const intervalTime = 4000; // 4 segundos exactos entre cada tarjeta

  // Actualiza las clases 3D según la tarjeta activa
  function updateGallery() {
    const prevIndex = (currentIndex - 1 + total) % total;
    const nextIndex = (currentIndex + 1) % total;

    cards.forEach((card, index) => {
      card.classList.remove("active", "prev", "next");

      if (index === currentIndex) {
        card.classList.add("active");
      } else if (index === prevIndex) {
        card.classList.add("prev");
      } else if (index === nextIndex) {
        card.classList.add("next");
      }
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % total;
    updateGallery();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + total) % total;
    updateGallery();
  }

  // Control de reproducción automática (4 segundos)
  function startAutoPlay() {
    stopAutoPlay(); // Evita intervalos duplicados
    autoPlayTimer = setInterval(nextSlide, intervalTime);
  }

  function stopAutoPlay() {
    if (autoPlayTimer) {
      clearInterval(autoPlayTimer);
      autoPlayTimer = null;
    }
  }

  // Permitir clic en tarjetas laterales para traerlas al centro sin abrir el enlace por error
  cards.forEach((card) => {
    card.addEventListener("click", (e) => {
      if (card.classList.contains("prev")) {
        e.preventDefault();
        prevSlide();
        startAutoPlay();
      } else if (card.classList.contains("next")) {
        e.preventDefault();
        nextSlide();
        startAutoPlay();
      }
    });
  });



  // Soporte táctil (Swipe) con pausa durante el deslizamiento
  let touchStartX = 0;
  carousel.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
    stopAutoPlay();
  }, { passive: true });

  carousel.addEventListener("touchend", (e) => {
    const touchEndX = e.changedTouches[0].screenX;
    if (touchStartX - touchEndX > 40) nextSlide();
    if (touchEndX - touchStartX > 40) prevSlide();
    startAutoPlay();
  }, { passive: true });

  // Inicializar galería
  updateGallery();
  startAutoPlay();
});
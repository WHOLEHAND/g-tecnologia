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

    // Capitalizar la primera letra del mes
    const capitalizedMonth = month.charAt(0).toUpperCase() + month.slice(1);

    fullDateElement.textContent = `${day}, ${capitalizedMonth} ${year}`;
  }

  updateDate(); // Llama a la función una vez para establecer la fecha inicial
  // Opcional: Actualizar la fecha cada cierto tiempo (ej. cada minuto)
  // setInterval(updateDate, 60000);
});
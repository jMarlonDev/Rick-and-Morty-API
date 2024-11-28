import { sectionFilter } from "../js/characters.js";

const sectionInputs = document.querySelectorAll("#input");
// funcion que me va a permitir cargar toda la logica de mi pagina web despues de que se cargue todo el documento 
// html...
document.addEventListener("DOMContentLoaded", () => {
  markSection();
});

// funcion que se va a encargar de controlar la seccion la cual queremos filtrar los datos
function markSection() {
  sectionInputs.forEach((input) => {
    input.addEventListener("change", () => {
      if (input.checked) {
        const valueInput = input.name;
        //dataToSearch.placeholder = "Enter the name of the: " + valueInput;
        sectionFilter(valueInput);
      }
    });
  });
}

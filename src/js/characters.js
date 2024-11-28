
// aqui se llamara a la api de rick and morty para acceder solo a los personajes
const onlyCharacters = document.querySelector("#onlyCharacters");
const onlyLocations = document.querySelector("#onlyLocations");
const onlyEpisodes = document.querySelector("#onlyEpisodes");
let arrayCharacters = [];
let arrayLocations = [];
let arrayEpisodes = [];
export async function sectionFilter(nameInput) {
  onlyCharacters.innerHTML = "";
  onlyLocations.innerHTML = "";
  onlyEpisodes.innerHTML = "";
  switch (nameInput) {
    case "characters":
      const responseCharacters = await fetch("https://rickandmortyapi.com/api/character");
      const characthersJSON = await responseCharacters.json();
      arrayCharacters = characthersJSON.results;

      //Accediendo al DOM para mostrar los elementos en la pagina web
      arrayCharacters.forEach(character => {
        const cardCharacter = document.createElement("div");
        const nameCharacter = document.createElement("p");
        const imageCharacter = document.createElement("img");
        const statusCharacter = document.createElement("p");
        const specieCharacter = document.createElement("p");
        const status = document.createElement("p");
        const species = document.createElement("p");

        nameCharacter.textContent = character.name;
        nameCharacter.classList.add("text-xl");
        imageCharacter.src = character.image;
        imageCharacter.classList.add("w-3/4");
        status.textContent = "Health Status:";
        status.classList.add("text-[#0994ca]");
        species.textContent = "Specie:";
        species.classList.add("text-[#0994ca]");
        statusCharacter.textContent = character.status;
        specieCharacter.textContent = character.species;
        cardCharacter.classList.add("border-2", "border-[#E6E7D7]", "flex", "flex-col", "justify-center", "items-center", "gap-2", "p-2", "bg-[#3C3E44]", "rounded-md", "text-[#E6E7D7]");
        cardCharacter.appendChild(nameCharacter);
        cardCharacter.appendChild(imageCharacter);
        cardCharacter.appendChild(status);
        cardCharacter.appendChild(statusCharacter);
        cardCharacter.appendChild(species);
        cardCharacter.appendChild(specieCharacter);
        onlyCharacters.appendChild(cardCharacter);

      });
      break;

    case "sagaLocations":
      // accediendo a los lugares de la api de Rick and Morty
      const responseLocations = await fetch("https://rickandmortyapi.com/api/location");
      const locationsJSON = await responseLocations.json();
      arrayLocations = locationsJSON.results;
      arrayLocations.forEach((location) => {
        const cardLocation = document.createElement("p")
        const locationName = document.createElement("p");
        const typeLocation = document.createElement("p");
        const dimension = document.createElement("p");
        const iconPlanet = document.createElement("i");
        locationName.textContent = location.name;
        typeLocation.textContent = location.type;
        dimension.textContent = location.dimension;
        cardLocation.classList.add("border-2", "border-[#E6E7D7]", "flex", "flex-col", "justify-center", "items-center", "bg-[#3C3E44]", "gap-2", "p-2", "rounded-md");
        iconPlanet.classList.add("bi", "bi-box-fill", "text-[#0994ca]", "text-xl");
        locationName.classList.add("text-[#0994ca]", "text-xl");
        typeLocation.classList.add("text-[#E6E7D7]");
        dimension.classList.add("text-[#E6E7D7]");
        cardLocation.appendChild(locationName);
        cardLocation.appendChild(typeLocation);
        cardLocation.appendChild(iconPlanet);
        cardLocation.appendChild(dimension);
        onlyLocations.appendChild(cardLocation);
      });
      break;
    case "episodes":
      const responseEpisodes = await fetch("https://rickandmortyapi.com/api/episode");
      const episodesJSON = await responseEpisodes.json();
      arrayEpisodes = episodesJSON.results;
      arrayEpisodes.forEach((episode) => {
        const cardEpisodes = document.createElement("div");
        const episodeName = document.createElement("p");
        const episodeDate = document.createElement("p");
        const tittleEpisode = document.createElement("p");
        const publicationDate = document.createElement("p");
        tittleEpisode.textContent = "Tittle Episode:";
        publicationDate.textContent = "Publication Date:";
        episodeName.textContent = episode.name;
        episodeDate.textContent = episode.air_date;
        tittleEpisode.classList.add("text-xl", "text-[#0994ca]");
        episodeName.classList.add("text-[#E6E7D7]");
        publicationDate.classList.add("text-xl", "text-[#0994ca]");
        episodeDate.classList.add("text-[#E6E7D7]");
        cardEpisodes.classList.add("border-2", "border-[#E6E7D7]", "flex", "flex-col", "justify-center", "items-center", "gap-3", "p-2", "rounded-md", "bg-[#3C3E44]");
        cardEpisodes.appendChild(tittleEpisode);
        cardEpisodes.appendChild(episodeName);
        cardEpisodes.appendChild(publicationDate)
        cardEpisodes.appendChild(episodeDate);
        onlyEpisodes.appendChild(cardEpisodes);
      })
      break;
    default: console.log("Ha ocurrido un error");
      break;
  }
}

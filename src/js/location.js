
// funcion que me va a permitir acceder y traer los datos de la api de Rick y Morty pero solo para 
// traer los lugares que tiene para acceder esta api
export async function locationsAPI(){
  const responseLocations = await fetch("https://rickandmortyapi.com/api/location");
  const locationsJSON = await responseLocations.json();
  console.log(locationsJSON);
}

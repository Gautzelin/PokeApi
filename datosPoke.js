const consultaPoke = (id,number) => 
{
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((response) => {
      return response.json();
    })

    .then((data) => {
      //console.log(data);
      pintarPoke(data,number)
    })

    .catch((error) => {
      console.log(error);
    });
};

const btnSeleccionar = () => 
{
  let primerPokemon = Math.round(Math.random() * 150);
  let segundoPokemon = Math.round(Math.random() * 150);
  consultaPoke(primerPokemon,1);
  consultaPoke(segundoPokemon,2);
};

btnSeleccionar()

const lista = document.getElementById("pokes")

const pintarPoke = (data, id) =>
{
  let item = lista.querySelector(`#pika-${id}`);

  item.getElementsByTagName("img")[0].setAttribute("src", data.sprites.front_default);

  item.getElementsByTagName("div")[0].innerHTML = "<b>" + data.name+ "</b>";

let habilidades = item.getElementsByTagName("div")[1];

  let pokemon = ''

    for(let i=0; i<data.abilities.length;i++)
    {
        pokemon += `<li>${data.abilities[i].ability.name}</li>`
    }
    console.log(pokemon);
    habilidades.getElementsByTagName('ol')[0].innerHTML = pokemon
}
import { useNavigate } from "react-router-dom";

/**Este es un componente sencillo que recibe el id del pokemon y el nombre. Es todo lo que necesitamos para
 * crear el listado de pokemons.
 */
export default function PokemonListItem({ pokemonId, pokemonName }) {
  const navigate = useNavigate();//Aqui el navigate apra viajara dentro de la aplicacion.
  const handleDetailsClick = () => {
    navigate(`/pokemons/detail/${pokemonId}`);//En este caso navegamos a una ruta que recibe parametros.
  };
  return (
    <div className="flex flex-col  py-2 px-2">
      <p
        className="capitalize text-base"
      >
        {pokemonName}
      </p>
      <button
        onClick={handleDetailsClick}
        className="text-white rounded-full transition ease-in-out delay-150 bg-red-500 hover:translate-y-1 hover:scale-110 hover:bg-red-600 duration-300 mx-2"
      >
        Details
      </button>
    </div>
  );
}

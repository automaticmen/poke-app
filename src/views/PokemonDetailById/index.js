import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import credits from "../../assets/credits";
import PokemonGeneralInfo from "../PokemonDetail/components/PokemonGeneralInfo";
import PokemonStatsInfo from "../PokemonDetail/components/PokemonStatsInfo";
import Loading from "../../components/Loading";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { fetchPokeDataById } from "../../redux/actions/pokemon-by-id";


export default function PokemonDetailById() {

  /**Aqui el dispatch para poder hacer las llamadas a las actions y desencadenar el mecanismo redux */
  const dispatch = useDispatch();

  /**Aqui creando una variable de estado para poder utilizarla. Esta pertenece al estado del componente
   * como tal. No es algo almacenado en el store ni nada de eso. O si? tengo que verlo despues jajaja.
   * Fijate para esto es el useState. Que devuelve un puntero al valor y otro para la funcion setter del
   * estado. Se le pasa por parametros el valor inicial.
   */
  const [pokemonId, setPokemonId] = useState("1");

  /**Handle para el selector de Id del pokemon. Este selector lo estamos usando para que mediante la seleccion
   * del usuario pues se haga un llamado a la API y nos traiga los detalles del pokemon.
   * Haciendo uso del event pues sabemos cual es el valor que el usuario esta intentando recuperar.
   */
  const handlePokeIdSelectorChange = (event) => {
    /**A manera de proteccion solo estamos seteando la variable de estado cuando es un valor entre -1 y 500
     * el motivo por el cual hemos puesto el valor -1 es para que nos permita borrar el control commpletamente
     * de lo contraro no nos dejaba dejarlo vacio para poner un valor nuevo.
     */
    if (event.target.value < 501 && event.target.value > -1) {
      setPokemonId(event.target.value);
    }
  };

  /**Handle encargado de manejar cuando se le da click par abuscar la info del pokemon */
  const handleGetThisPokemonClick = () => {
    /**Si el Id del pokeon es difernte de 0 estamos bien. */
    if(pokemonId!=0){

      dispatch(fetchPokeDataById(pokemonId));//dispatch del action que busca el pokemon segun su Id.
    } else {//De lo contrario mostramos una alerta indicando que el Id no puede ser 0.
      alert("Pokemon Id can´t be 0")
      setPokemonId("1");//Poneindole el valor 1. Aqui lo que estamos es seteando la variable del estado.
    }
  };

  /**En este caso no hemos utilizado RTK query. Hemos hecho los reducers nosotros mismos mediante el uso
   * de Slices. etc etc. Entonces puedes acceder a los elementos del store mediante useSelector.
   */
  const {
    isFetchingPokemonData,
    isLoadingPokeData,
    errorFetchingPokemonData,
    successFetchingPokemonData,
    pokemonData,
  } = useSelector((state) => state.pokemonByIdReducer);

  /**Recuerda tambien tienes un reducer para el color de background. Aqui lo estas consumiendo mediante
   * useSelector also.
   */
  const { color } = useSelector((state) => state.themeReducerSlice);

  /**Aqui en dependencia de los diferentes estados pues iremos mostrando alguna u otra informacion. Es importante
   * que te fijes en como combinar los estados para saber que hacer en cada momento.
   */
  if (errorFetchingPokemonData) {
    return <p>Something really bad has happened :) ...</p>;
  } else if (isLoadingPokeData || isFetchingPokemonData) {
    return (
      <Loading message="We are searching for pokemon details, please wait :) ..." />
    );
  } else if (successFetchingPokemonData) {
    return (
      <div
        className="flex flex-col w-screen items-center"
        style={{ backgroundColor: color }}
      >
        <div className="h-2/5">
          <Banner />
        </div>
        <div className="flex flex-row items-center py-2">
          <button
            onClick={handleGetThisPokemonClick}
            className="text-white rounded-full bg-red-400 text-lg  px-1 py-1 hover:ring-2 hover:ring-red-600 mx-1"
          >
            Get This Pokémon
          </button>
          <input
            className="w-14 h-9 pl-2 mx-1 rounded-full border-2 border-red-500"
            type="number"
            min="1"
            max="500"
            value={pokemonId}
            onChange={handlePokeIdSelectorChange}
          />
        </div>
        <div className="h-1/5">
          <PokemonGeneralInfo
            pokemonName={pokemonData?.name}
            pokemonWeight={pokemonData?.weight}
            pokemonHeight={pokemonData?.height}
          />
        </div>
        <div>
          <PokemonStatsInfo pokemonStats={pokemonData?.stats} />
        </div>
        <div className="bg-slate-300 w-full">
          <Footer credits={credits} />
        </div>
      </div>
    );
  }
}

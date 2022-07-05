import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import credits from "../../assets/credits.js";
import PokemonListItem from "./components/PokemonListItem";
import { useFetchPokemonsQuery } from "../../redux/api/pokemons";
import Loading from "../../components/Loading";
import { useSelector } from "react-redux";

export default function PokemonList() {
  /**Mediante object destructuring y useSelector pues estoy tomando el valor de color del store */
  const {color} = useSelector((state)=>state.themeReducerSlice);
  /**En este caso estamos consumiendo la inforamcion de lo creacdo con RTK Query. Fijate que puedes hacer
   * object destructuring para obtener: data,isLoading,isSuccess,isError. Cuando trabajas con RTK query es
   * verdad que es mucho mas rapido todo pero solo tienes estas variables de estado. Que en ocasiones pudieran
   * no ser suficientes. Entonces quizas es mejor apredner a trbajar bien con redux y hacer tu mismo las cosas
   * a no ser que estes seguro desde el principio que esto es lo que quieres y no necesitas mas nada.
   */
  const {
    data: pokemons,
    isLoading,
    isSuccess,
    isFetching,
    isError,
  } = useFetchPokemonsQuery();

  /**Entonces aqui ya lo que tenemos es la logica para el renderizado condicional en dependencia del estado.
   * Se aconseja intentar trbajar de esta manera dado que son las cosas basicas que debes mostrar en una web
   * en dependecia de las situaciones que puedan haber.
   * 
   * Determinar si hay error, si se esta haciendo o cargando algo, y si todo esta correcto pues alante el
   * carro.
   * 
   * Como consejo cuando empieces una app. Crea componentes que sabes vas autilizar si o si. Por ejemplo:
   * - pantalla de Cargando
   * - panalla de error
   * - pantalla de 404.
   * 
   * PD en este proyecto no hice la del 404 but hay que hacerlo.
   * 
   * Fijate como aqui se llaman o renderizan diferentes componentes. Recuerda siempre pensar en compoonentes.
   * Aun cuando pienses que es algo facil de solucionar no importa. Pensar en componentes te ayuda a entender
   * mejor el codigo, organizarlo mejor, reutilizarlo.
   * 
   * Si puedes intenta que los valores que utilizas en el hijo del store sean pasados desde el padre como props.
   * Esto es mejor y aunque no lo creas tambien le da mas independencia a los componentes porque a la hora de
   * reutilizarlo pues vas a tener claro que ese componente recibe esos elementos y los necesita para trabajar.
  */
  if (isError) {
    return <p>Something really bad has happened :) ...</p>;
  } else if (isLoading || isFetching) {
    return (
      <Loading message="We are loading your pokemon list, please wait :) ..." />
    );
  } else if (isSuccess) {
    return (
      <div className="flex flex-col w-screen items-center" style={{backgroundColor:color}}>
        <div className="h-2/5">
          <Banner />
        </div>
        <div className="h-2/5 w-screen grid grid-cols-4 place-content-evenly">
          {/**Aqui tenemos el metdo map. El cual vamos a utilizar mucho por su facilidad para iterar los
           * elementos de un ARRAY. Lo pongo en mayusculas para que recuerdes que funciona con arrays. Por
           * lo tanto antes de iterar verifica que es un arreglo.
           * En este caso tenemos a pokemons el cual leimos del elemento de RTK Query. Tonces analizando la
           * estructura pues tienes el key results el cual es un arreglo con los pokemons. Fijate que map lo
           * que recibe es una funcion flecha que devuelve un objeto. Aunque a veces lo veas sin las llaves
           * es porqe le ponen el objeto directo entonces no necesitas return ni llaves.
           * 
           * OJO IMPORTANTE. React necesita una propiedad para poder identificar los elementos que se llama "key"
           * A lo mejor no la quieres poner cuando el componente es uno solo. Pero en este caso en el cual estas
           * generando componentes diferentes a tra ves del map, pues debes asignarles un key unico.
           */}
          {pokemons?.results.map((pokemon) => (
            <PokemonListItem
            key={pokemon.url.split("/")[6]}
              pokemonName={pokemon.name}
              pokemonId={pokemon.url.split("/")[6]}
            />
          ))}
        </div>
        <div className="bg-slate-300 w-full">
          <Footer credits={credits} />
        </div>
      </div>
    );
  }
}

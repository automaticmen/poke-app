import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import credits from "../../assets/credits.js";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setColorForAll } from "../../redux/actions/theme";
import { clearPokeData } from "../../redux/actions/pokemon-by-id";

export default function Home(params) {
  /**El nombre puede ser el que quieras pero bueno dispatch suena mas acorde con lo que vas a hacer. 
   * Estas usando useDispatch que es un hook que te permite hacer dispatch de las actions al store.*/
  const dispatch = useDispatch();

  /** Aqui estas haciendo object destructuring para leer los valores del store. Esto lo puedes hacer 
   * gracias al uso de useSelector. Fijate en la estructura. Utilza state para indicar que el estado
   * lo debe sacar del estado de un reducer. En este caso themeReducerSlice. Este es el que declaraste
   * en el store. */
  const { color } = useSelector((state) => state.themeReducerSlice);

  /**Este metodo es el handle del cambio de color en un input de tipo color. Recibe el event del cual
   * extraeremos el color seleccionado. Luego haremos el dispatch para que se desencadene todo el proceso
   * de actualizacion de los valores del store.
   */
  const handleColorChange = (event) => {
    /** Haciendo el dispatch de la action. Fijate es la que declaraste en el fichero de las actions. OJO
     *  No son los reducers, es la action como tal. La que exportas al final.
     */
    dispatch(setColorForAll(event.target.value));
  };

  /**useNavigate es para simular la navegacion en el sitio. Recuerda como tal esto es una Single Page Application
   * pero bueno con el uso de rutas pues debes ir navegando a los diferentes views de la misma. Para esto es
   * que se usa este hook. 
   */
  const navigate = useNavigate();

  /**Handle del boton para seleccionar el pokemon de una lista. */
  const handlePickFromListClick = () => {
    navigate("/pokemons");//El navigate lo que recibes es la ruta. Mas nada. ocn esto te lleva al lugar.
  };

  /**Handle del boton para seleccionar el pokemon mediante su ID. */
  const handlePickByIdClick = () => {
    /**Como la data de los detalles del pokemon se encuentra en el store pues si habia accedido a los datos
     * de un pokemon con anterioridad pues se me mostraban en la vista. Por lo tanto se crea el metdo para
     * limpiar esta data. Claro la data no se limpia asi como asi. Todo esto es median reducers. Es por ello
     * que se hicieron las implementaciones necesairas para poder desencadenar el proceso de redux.
     */
    dispatch(clearPokeData());
    navigate("/pokemons/detailbyid");//Recuerda el navigate recibe la ruta.
  };

  return (
    <div
      className="flex flex-col w-screen items-center h-screen"
      style={{ backgroundColor: color }}//Fijate que como usaste useSelector pues tienes el color del store disponible
    >
      <div className="h-2/5">
        <Banner />
      </div>
      <div className="h-2/5">
        <div className="flex flex-row w-screen justify-center">
          <button
            onClick={handlePickFromListClick}
            className=" text-white rounded-full bg-red-400 text-xl py-2 px-2 mx-2 my-10 hover:ring-2 hover:ring-red-600"
          >
            Pokémon From List
          </button>
          <button
            onClick={handlePickByIdClick}
            className=" text-white rounded-full bg-red-400 text-xl py-2 px-2 mx-2 my-10 hover:ring-2 hover:ring-red-600"
          >
            Pokémon By Id
          </button>
        </div>
        <div className="">
          <p className="text-xl mt-30">
            Una aplicación de demostración que muestra un listado de Pokemons.
            Luego podremos ver los detalles de cada uno en una vista de
            detalles. También tiene como objetivo demostrar el uso de Redux para
            el manejo de los estados. Utilizaremos Redux Toolkit, en particular
            RTK Query.
          </p>
        </div>
      </div>
      <div className="bg-slate-300 w-full">
        <Footer appName="PokeApp" credits={credits} />
        <input type="color" onChange={handleColorChange} value={color}></input>
      </div>
    </div>
  );
}

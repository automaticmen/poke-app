/**Este fichero store se crea automaticamente cuando utilizas create react app pero ademas
 * le sumas un template para el trabajo con Redux Toolkit. El comando completo seria el siguiente:
 * 
 * npx create-react-app your-app-name --template redux. 
 * 
 * Aqui en este fichero es donde vamos a declarar los reducers que vamos a utilizar para el desarrollo 
 * de la aplicacion.
 * 
 * Por ejemplo en este caso especifico tenemos 5 reducers:
 * counterReducer: este reducer viene como ejemplo cuando creas el proyecto
 * pokemonsApi.reducer: este ha sido creado utilizando RTK Query
 * pokemonDetailApi.reducer: este ha sido creado utilizando RTK Query
 * themeReducerSlice: ha sido creado mediante Slices y la creacion manual de actions
 * pokemonByIdReducer: ha sido creado mediante Slices y la creacion manual de actions
 * 
 * Para la creacion del store se utiliza configureStore. Esto aunque no lo hiciste tu porque utilizaste
 * el template de ReduxToolkit es bueno que lo sepas. Recibe un objeto en el cual se le declaran los 
 * reducers, los middlewares etc.
 * 
 * Para poder utilizar estos reducers pues debes haberlos exportado anteriormente en tus ficheros de
 * Slices para poderlos imnportar aqui.*/
import { configureStore } from '@reduxjs/toolkit';//Esto lo añade el template pero si lo fueras a hacer tu mismo pues sabes tienes que importarlo tu mismo.
import counterReducer from '../features/counter/counterSlice';//Este viene en el ejemplo
import { pokemonDetailApi, pokemonsApi } from '../redux/api/pokemons';//Importando los reducers para poder utilizarlos
import themeReducerSlice from "../redux/slices/theme";//Importando los reducers para poder utilizarlos
import pokemonByIdReducer from "../redux/slices/pokemon-by-id"//Importando los reducers para poder utilizarlos

/**Esta store fue creada por el template. como se ha explicado arriba recibe un objeto con los reducers, 
 * middleware, etc.
 */
export const store = configureStore({
  reducer: {
    counter: counterReducer,//reducer del ejemplo
    [pokemonsApi.reducerPath]: pokemonsApi.reducer,//reducer creado con RTK Query
    [pokemonDetailApi.reducerPath]:pokemonDetailApi.reducer,//reducer creado con RTK Query
    themeReducerSlice,//reducer creado con Slices
    pokemonByIdReducer,//reducer creado con Slices

  },
  /**Aqui estamos tomando el default middleware para que sea utilizado. Esto tengo que ver si es 
   * necesario o no. Cuando haga un ejemplo en el cual no use RTK Query. */
  middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(pokemonsApi.middleware),
});
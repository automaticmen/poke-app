import {BrowserRouter,Routes,Route} from "react-router-dom";

import Home from "../views/Home";
import PokemonList from "../views/PokemonList";
import PokemonDetail from "../views/PokemonDetail";
import PokemonDetailById from "../views/PokemonDetailById";

/**Aqui estamos en la parte del ruteo. Esto cuando lo haces con el template ya te lo pone. Solo tienes que
 * irle ponendo las rutas en el interior.
 * Dentro de BrowserRouter estan las Routes. Cada ruta se declara con Route que recibe el path y el element.
 * fijate que el elemente va entre {<Componente />}.
 * Ahora si una ruta lleva parametros solo debes agregar ":" por ejemplo: /pokemons/detail/:pokemonId
 */
export default function RoutesComponent() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/pokemons" element={<PokemonList/>}/>
            <Route path="/pokemons/detail/:pokemonId" element={<PokemonDetail/>}/>
            <Route path="/pokemons/detailbyid" element={<PokemonDetailById/>}/>
        </Routes>
        </BrowserRouter>
    );
}
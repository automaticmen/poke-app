import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import credits from "../../assets/credits";
import PokemonGeneralInfo from "./components/PokemonGeneralInfo";
import { useFetchPokemonDetailQuery } from "../../redux/api/pokemons";
import { useParams } from "react-router-dom";
import PokemonStatsInfo from "./components/PokemonStatsInfo";
import Loading from "../../components/Loading";
import { useSelector } from "react-redux";

export default function PokemonDetail() {
  const { pokemonId } = useParams();
  const {color} = useSelector((state)=>state.themeReducerSlice);
  const {
    data: pokemonDetail,
    isLoading,
    isSuccess,
    isFetching,
    isError,
  } = useFetchPokemonDetailQuery(pokemonId);

  if(isError){
    return (<p>Something really bad has happened :) ...</p>);
  } else if (isLoading||isFetching){
      return (

          <Loading message="We are seraching for pokemon details, please wait :) ..."/>
      );
  } else if (isSuccess)
  {

      return (
        <div className="flex flex-col w-screen items-center" style={{backgroundColor:color}}>
          <div className="h-2/5">
            <Banner />
          </div>
          <div className="h-1/5">
            <PokemonGeneralInfo
              pokemonName={pokemonDetail?.name}
              pokemonWeight={pokemonDetail?.weight}
              pokemonHeight={pokemonDetail?.height}
            />
          </div>
          <div>
            <PokemonStatsInfo pokemonStats={pokemonDetail?.stats}/>
          </div>
          <div className="bg-slate-300 w-full">
            <Footer credits={credits} />
          </div>
        </div>
      );
  }
}

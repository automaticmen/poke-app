export default function PokemonStatsInfo({ pokemonStats }) {
  return (
    <div>
      <h2 className="font-bold text-3xl capitalize">Pokemon stats info</h2>
      {pokemonStats?.map((stat)=>{
        return (
            <div>
                <p className="capitalize font-bold text-xl">{`${stat?.stat?.name}: `} <span className="font-normal">{`${stat.base_stat}`}</span></p>
            </div>
        );
      })}
    </div>
  );
}

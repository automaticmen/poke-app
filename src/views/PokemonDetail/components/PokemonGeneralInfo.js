export default function PokemonGeneralInfo({pokemonName,pokemonWeight,pokemonHeight}) {
    return (
        <div>
            <h2 className="font-bold text-3xl capitalize">Pokemon general info</h2>
            <p className="capitalize font-bold text-xl">{`Name: `}<span className="font-normal">{pokemonName}</span></p>
            <p className="font-bold text-xl">{`Weight: `}<span className="font-normal">{`${pokemonWeight} gr.`}</span></p>
            <p className="font-bold text-xl">{`Height: `}<span className="font-normal">{`${pokemonHeight} cm.`}</span></p>
        </div>
    );
}
import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const headers = {};

export const pokemonsApi = createApi({
    reducerPath: "pokemonsApi",
    baseQuery: fetchBaseQuery({baseUrl:"https://pokeapi.co/api/v2/"}),
    endpoints: (builder) => ({
        fetchPokemons: builder.query({
            query:()=>({
                url:`pokemon?limit=30&offset=0`,
                method:"GET",
                headers
            })
        })
    }),
});

export const pokemonDetailApi = createApi({
    reducerPath: "pokemonsDetailApi",
    baseQuery: fetchBaseQuery({baseUrl:"https://pokeapi.co/api/v2/"}),
    endpoints: (builder) => ({
        fetchPokemonDetail: builder.query({
            query:(pokemonId)=>({
                url:`pokemon/${pokemonId}`,
                method:"GET",
                headers
            })
        })
    }),
});

export const {useFetchPokemonsQuery} = pokemonsApi;
export const {useFetchPokemonDetailQuery} = pokemonDetailApi;
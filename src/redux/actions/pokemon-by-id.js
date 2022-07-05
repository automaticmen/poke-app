import { createAction } from "@reduxjs/toolkit";

//IMPORTING REDUCERS FROM CREATED SLICE. USE REDUCER NAMES
import {
    startFetchPokemonData as startFetchPokemonDataSlice,
    successFetchPokemonData as successFetchPokemonDataSlice,
    errorFetchPokemonData as errorFetchPokemonDataSlice,
    startClearPokeData as startClearPokeDataSlice
  } from "../slices/pokemon-by-id";

  //CREATING ACTIONS USING createAction. Remember CAPITAL CASE an UNDER SCORE FOR SPACES
  export const startFetchPokemonData = createAction("START_FETCH_POKEMON_DATA");
  export const successFetchPokemonData = createAction("SUCCESS_FETCH_POKEMON_DATA");
  export const errorFetchPokemonData = createAction("ERROR_FETCH_POKEMON_DATA");
  export const startClearPokeData = createAction("START_CLEAR_POKE_DATA");

  export const fetchPokeDataById = (pokeId) => async (dispatch) =>{
    try {
        dispatch(startFetchPokemonDataSlice());
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`);
        const data = await response.json();
        dispatch(successFetchPokemonDataSlice({data}));
    } catch (error) {
        dispatch(errorFetchPokemonData({error}));
    }
  };

  export const clearPokeData = ()=>(dispatch) =>{
    dispatch(startClearPokeDataSlice());
  };

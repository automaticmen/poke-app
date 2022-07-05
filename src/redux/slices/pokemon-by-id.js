import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isFetchingPokemonData: false,
  isLoadingPokeData: false,
  errorFetchingPokemonData: false,
  successFetchingPokemonData: true,
  pokemonData: {},
};

const pokemonByIdSlice = createSlice({
  name: "pokemon-by-id-slice",
  initialState,
  reducers: {
    startFetchPokemonData(state, action) {
      state.isLoadingPokeData = false;
      state.isFetchingPokemonData = true;
    },
    successFetchPokemonData(state, action) {
      state.isLoadingPokeData = false;
      state.isFetchingPokemonData = false;
      state.pokemonData = action.payload.data;
      state.successFetchingPokemonData = true;
      state.errorFetchingPokemonData = null;
    },
    errorFetchPokemonData(state, action) {
      state.isLoadingPokeData = false;
      state.isFetchingPokemonData = false;
      state.pokemonData = {};
      state.errorFetchingPokemonData = action.payload.error;
    },
    startClearPokeData(state,action){
      state.pokemonData = {};
    }
  },
});

const { actions, reducer } = pokemonByIdSlice;

const {
  startFetchPokemonData,
  successFetchPokemonData,
  errorFetchPokemonData,
  startClearPokeData
} = actions;

export {
    startFetchPokemonData,
    successFetchPokemonData,
    errorFetchPokemonData,
    startClearPokeData
  };

  export default reducer;


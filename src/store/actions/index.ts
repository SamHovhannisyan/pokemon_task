
import { SAVE_POKEMONS, SAVE_SEARCHED_POKEMON } from "../action-types";

export const savePokemons = (payload: any) => ({
    type: SAVE_POKEMONS,
    payload
})

export const saveSearchedPokemon = (payload: any) => {
    console.log(payload, "==============")
    return ({
    type: SAVE_SEARCHED_POKEMON,
    payload
})}
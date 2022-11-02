
import { SAVE_DETAIL_POKEMONS, SAVE_POKEMONS, SAVE_SEARCHED_POKEMON } from "../action-types";

export const savePokemons = (payload: any) => ({
    type: SAVE_POKEMONS,
    payload
})

export const saveDetailPokemon = (payload: any) => {
    return ({
    type: SAVE_DETAIL_POKEMONS,
    payload
})}

export const saveSearchedPokemon = (payload: any) => {
    return ({
    type: SAVE_SEARCHED_POKEMON,
    payload
})}
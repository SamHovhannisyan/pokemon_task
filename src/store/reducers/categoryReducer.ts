import { SAVE_DETAIL_POKEMONS, SAVE_POKEMONS, SAVE_SEARCHED_POKEMON } from "../action-types"

const initialState: PokemonState = {
    pokemons: [],
    selected: null,
    pokemonDetail: []
}

const pokemonsReducer = (
    state: PokemonState = initialState,
    action: CategoryAction
): PokemonState => {
    switch (action.type) {
        case SAVE_POKEMONS:
            return {
                ...state,
                pokemons: action.payload,
            }
        case SAVE_SEARCHED_POKEMON:
            return {
                ...state,
                selected: action.payload,
            }
        case SAVE_DETAIL_POKEMONS:
            return {
                ...state,
                pokemonDetail: action.payload,
            }
    }
    return state
}

export default pokemonsReducer;
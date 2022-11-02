import { SAVE_POKEMONS, SAVE_SEARCHED_POKEMON } from "../action-types"

const initialState: CategoryState = {
    pokemons: [],
    selected: null
}

const pokemonsReducer = (
    state: CategoryState = initialState,
    action: CategoryAction
): CategoryState => {
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
        // case SELECT_CATEGORY:
        //     return {
        //         ...state,
        //         selected: action.payload,
        //     }
    }
    return state
}

export default pokemonsReducer;
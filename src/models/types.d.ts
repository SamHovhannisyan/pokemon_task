type PokemonState = {
   pokemons:any[],
   selected:category | null
   pokemonDetail: any,
}

type CategoryAction = {
   type:string
   payload: any
}

type DispatchType = (args: CategoryAction) => CategoryAction

type StoreType = {
   pokemonsReducer:CategoryState,
}
interface category {
    id:number
      name:string
}
interface image {
   breeds: [],
   categories: category[],
   id: string,
   "url": string,
   "width": number,
   "height": number
}
type ImageState = {
   images:image[],
   page:number
}
type CategoryState = {
   pokemons:any[],
   selected:category | null
}
type GetCategory = {
   type:string
   payload: category[]
}

type CategoryAction = {
   type:string
   payload: any
}

type DispatchType = (args: CategoryAction) => CategoryAction

type StoreType = {
   pokemonsReducer:CategoryState,
}
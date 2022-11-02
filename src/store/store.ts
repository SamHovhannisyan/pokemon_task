import { createStore, applyMiddleware, combineReducers,  Store } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import pokemonsReducer from "./reducers/categoryReducer"

const store: Store<StoreType> & {
    dispatch: DispatchType
} = createStore(
    combineReducers(
    {
        pokemonsReducer,
    }),
    composeWithDevTools(applyMiddleware(thunk)),
    )


export default store;
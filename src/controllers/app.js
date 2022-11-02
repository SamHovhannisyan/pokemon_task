import { savePokemons, saveDetailPokemon, saveSearchedPokemon } from '../store/actions';
import store from '../store/store';

const AppController = {};

AppController.getPokemons = async (dataUrl) => {
   const result = await (await fetch(dataUrl)).json();
   store.dispatch(savePokemons(result));
}

AppController.getPokemonDetails = async (url, id) => {
    const result = await (await fetch(`${url}${id}`)).json();
    store.dispatch(saveDetailPokemon(result));
 }

AppController.getSearchedPokemon = async (url, value) => {
    const result = await(await fetch(`${url}${value}`)).json();
    store.dispatch(saveSearchedPokemon(result));
}

AppController.init = () => {
    AppController.getPokemons();
}

export default AppController;
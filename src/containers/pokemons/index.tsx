import { useEffect, useState } from 'react';
import {useSelector, shallowEqual} from 'react-redux';
import { API_URI, SEARCHED_URL } from '../../api';
import Pokemon from '../../components/pokemon';
import AppController from '../../controllers/app';
import { pokemonsSelector, searchedPokemonSelector } from '../../store/selectors';
import { getPokeIdFromUrl } from '../../utils';

const Pokemons = () => {
    const {results, next, previous} = useSelector(pokemonsSelector, shallowEqual);
    const searchedPokemon = useSelector(searchedPokemonSelector, shallowEqual);
    const [dataUrl, setDataUrl] = useState(API_URI);
    const [value, setValue] = useState('');

    useEffect(() => {
        AppController.getPokemons(dataUrl);
    }, [dataUrl])

    const handleApiUrl = (url: string) => () => {
        setDataUrl(url);
    };

    const handleChange = (e: any) => {
        setValue(e.target.value);
    };

    const handleSearch = (value: string) => () => {
        AppController.getSearchedPokemon(SEARCHED_URL, value)
    }

 
    return <div>
        <div>
            <input type="text" value={value} onChange={handleChange}/>
            <button onClick={handleSearch(value)}>Search</button>
        </div>
        {
            !searchedPokemon ?
            results && results.map((pokemon: any) => <Pokemon 
                                                        pokemon={pokemon}
                                                        key={pokemon.url}
                                                        pokeId={getPokeIdFromUrl(pokemon.url)}
                                                        />)  : 
                                                        <Pokemon 
                                                        pokemon={searchedPokemon.name}
                                                        pokeId={searchedPokemon.id}
                                                        />
                                                             
        }
        <div>
            <button onClick={handleApiUrl(previous)} disabled={!previous}>Prev Pokemons</button>
            <button onClick={handleApiUrl(next)} disabled={!next}>Next Pokemons</button>
        </div>
    </div>
    
}

export default Pokemons;
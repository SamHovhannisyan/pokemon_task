import { useEffect } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { DETAIL_URL } from "../../api";
import AppController from "../../controllers/app";
import { detailPokemonSelector } from "../../store/selectors";
import './detail.scss'

const PokemonDetails: React.FC = () => {

    let { id } = useParams()

    const detailPokemon = useSelector(detailPokemonSelector, shallowEqual);
    
    useEffect(() => {
        AppController.getPokemonDetails(DETAIL_URL, id);
    }, [id])

    console.log(detailPokemon, 'detailPokemon')

    return (
        <div className="detail">
            <h1>{detailPokemon.name?.toUpperCase()}</h1>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt="" className="img"/>
        </div>
    )
}

export default PokemonDetails
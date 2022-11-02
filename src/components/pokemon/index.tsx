import { Link } from "react-router-dom";

const Pokemon = ({pokemon, pokeId}: any) => {
    return (
        <>
        <Link to={`type/${pokeId}`}>
            <div>{pokemon.name}</div>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId}.png`} alt="" />
        </Link>
        </>
    ) 
}

export default Pokemon;
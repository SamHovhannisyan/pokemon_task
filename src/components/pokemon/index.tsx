import { Link } from "react-router-dom";
import './pokemon.scss'

type Props = {
    pokemon:string,
    pokeId: string
}

const Pokemon: React.FC<Props> = ({pokemon, pokeId}) => {
    return (
        <div className="item">
            <Link to={`type/${pokeId}`} className="title">
                <h2>{pokemon}</h2>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId}.png`} alt="" />
            </Link>
        </div>
    ) 
}

export default Pokemon;
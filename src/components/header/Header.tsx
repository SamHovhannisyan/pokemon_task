import { Link } from "react-router-dom";
import './header.scss';

const Header = () => {
    return <div className="header">
        <Link to={'/'} className="header_title">
            Home
        </Link>
    </div>
}

export default Header;
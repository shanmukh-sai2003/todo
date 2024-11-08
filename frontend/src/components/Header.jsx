import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <h1 className="logo"><em>Yet to-do!</em></h1>
            <Link to={'/add'}><button className="add-to-do-btn">to-do +</button></Link>   
        </header>
    );
}

export default Header;
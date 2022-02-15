import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <div>
                <NavLink className="logo" to="/">
                    nothingtotrash
                </NavLink>
                <NavLink to="/marktplatz">Marktplatz</NavLink>
                <NavLink to="/ueberuns">Über Uns</NavLink>
            </div>

            <div>
                <NavLink to="/login">Log In</NavLink>
                <NavLink className="register-btn" to="/register">
                    Registriere Dich
                </NavLink>
            </div>
        </nav>
    );
};

export default Nav;

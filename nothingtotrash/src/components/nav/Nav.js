import { NavLink } from "react-router-dom";
import { useState, useContext } from "react";
import { newToken } from "../../App";

const Nav = () => {
    const { token, setToken } = useContext(newToken);
    const logoutFunction = () => {
        setToken(false);
    };
    return (
        <nav>
            <div>
                <NavLink className="logo" to="/">
                    nothingtotrash
                </NavLink>
                <NavLink to="/marktplatz">Marktplatz</NavLink>
                <NavLink to="/wishlist">Über Uns</NavLink>
            </div>

            <div>
                {token ? (
                    <NavLink to="/login">Mein Marktplatz</NavLink>
                ) : (
                    <NavLink to="/login">Log In</NavLink>
                )}
                {token ? (
                    <NavLink
                        onClick={logoutFunction}
                        className="register-btn"
                        to="/login"
                    >
                        Logout
                    </NavLink>
                ) : (
                    <NavLink className="register-btn" to="/register">
                        Registriere Dich
                    </NavLink>
                )}
            </div>
        </nav>
    );
};

export default Nav;

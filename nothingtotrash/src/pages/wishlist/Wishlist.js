import AsideFilter from "../../components/asideFilter/AsideFilter";
import { useContext } from "react";
import { newToken } from "../../App";
import { NavLink } from "react-router-dom";

const Wishlist = () => {
    const { token, setToken } = useContext(newToken);

    return (
        <section className="wunschliste-Sec">
            <article className="productsHeader-Art">
                <h1>Diese Artikel hättest du gerne</h1>
                <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Suche nach Produkt, Kategorie..."
                />
                <NavLink
                    className="btn-primary"
                    to={token ? "/addproduct" : "/login"}
                >
                    Produkt einstellen
                </NavLink>
            </article>
            <AsideFilter />
        </section>
    );
};

export default Wishlist;

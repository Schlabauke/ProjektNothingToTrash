import AsideFilter from "../../components/asideFilter/AsideFilter";
import { useContext, useState } from "react";
import { newToken } from "../../App";
import { NavLink } from "react-router-dom";
import Marktlist from "../marktplatz/Marktlist";
import { data } from "../../data";

import useSearchItems from "../../hooks/useSearchItems";

const Wishlist = (props) => {
    const { token, setToken } = useContext(newToken);
    const { searchItems, filteredResults } = useSearchItems(data);

    return (
        <section className="wunschliste-Sec">
            <article className="productsHeader-Art">
                <h1>Diese Artikel hättest du gerne</h1>
                <input
                    onChange={(e) => searchItems(e.target.value)}
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
            <article className="articleAndFilterWrap">
                <AsideFilter />
                <Marktlist data={filteredResults} />
            </article>
        </section>
    );
};

export default Wishlist;

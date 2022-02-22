import AsideFilter from "../../components/asideFilter/AsideFilter";
import { useContext, useState ,useEffect } from "react";
import { newToken, newUserId } from "../../App";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Marktlist from "../marktplatz/Marktlist";

import useSearchItems from "../../hooks/useSearchItems";
import useDataFetch from "../../hooks/useDatafetch";

const Wishlist = () => {
    const { data, loading } = useDataFetch();

    const { token, setToken } = useContext(newToken);
    const { userId } = useContext(newUserId);
    const { searchItems, filteredResults } = useSearchItems(data);
   
    useEffect(() => {
        axios.get("http://localhost:3001/api/user/favorites", {
            headers:{token, userId}
        })
        .then((res)=>{console.log(res.data)})
      },[]); //DatenArray kommt an von den Favoriten :)

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

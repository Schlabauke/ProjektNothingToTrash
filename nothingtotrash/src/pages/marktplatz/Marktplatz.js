import { NavLink } from "react-router-dom";
import AsideFilter from "../../components/asideFilter/AsideFilter";
import Footer from "../../components/footer/Footer";
import FooterEnd from "../../components/footerEnd/FooterEnd";
import Marktlist from "./Marktlist";
import { useContext, useState } from "react";
import { newToken } from "../../App";
import { data } from "../../data";

import useSearchItems from "../../hooks/useSearchItems";

const Marktplatz = () => {
    const { token, setToken } = useContext(newToken);
    const { searchItems, filteredResults } = useSearchItems(data);
    return (
        <>
            <section className="marktplatz-Sec">
                <article className="productsHeader-Art">
                    <h1>Hilf mit die Umwelt zu schützen</h1>
                    <p>
                        Abfälle bedrohen Vögel, Delfine und Co. Mehr als zehn
                        Millionen Tonnen Abfälle gelangen jährlich in die
                        Ozeane. Sie kosten Abertausende Meerestiere das Leben.
                        Seevögel verwechseln Plastik mit natürlicher Nahrung,
                        Delfine verfangen sich in alten Fischernetzen. Hilf mit
                        Müll zu reduzieren und trashnothing.
                    </p>
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
            <Footer />
            <FooterEnd />
        </>
    );
};
export default Marktplatz;

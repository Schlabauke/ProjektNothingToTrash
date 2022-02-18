import { NavLink } from "react-router-dom";
import AsideFilter from "../../components/asideFilter/AsideFilter";
import Footer from "../../components/footer/Footer";
import FooterEnd from "../../components/footerEnd/FooterEnd";
import Marktlist from "./Marktlist";
import { useContext, useEffect, useState } from "react";
import { newToken } from "../../App";

// Hooks
import useSearchItems from "../../hooks/useSearchItems";
import useDataFetch from "../../hooks/useDatafetch";

const Marktplatz = () => {
    const { data, loading } = useDataFetch();
    const { token, setToken } = useContext(newToken);
    const { searchItems, filteredResults } = useSearchItems(data);
    const [filteredArr, setFilteredArr] = useState(filteredResults);

    // filter function
    const [filterStatus, setFilterStatus] = useState([]);
    const insertStatusInState = (status) => {
        if (filterStatus.includes(status)) {
            setFilterStatus(filterStatus.filter((item) => item !== status));
        } else {
            setFilterStatus([...filterStatus, status]);
        }
    };

    console.log(filteredArr);
    const [filterShipping, setFilterShipping] = useState(true);

    const [filterRating, setFilterRating] = useState([]);
    const insertRatingInState = (status) => {
        if (filterRating.includes(status)) {
            setFilterRating(filterRating.filter((item) => item !== status));
        } else {
            setFilterRating([...filterRating, status]);
        }
    };

    const [filterPrice, setFilterPrice] = useState([]);

    // useEffect(() => {
    //     const filterStatusFunction = filteredResults.filter(
    //         (item) => (item.Zustand = filterStatus)
    //     );
    //     const filterShippingResults = filterStatusFunction.filter((item) =>
    //         item.Lieferung.includes(filterShipping)
    //     );
    //     const filterRatingFunction = filterShippingResults.filter((item) =>
    //         item.Lieferung.includes(filterRating)
    //     );
    //     const filterPriceFunction = filterRatingFunction.filter((item) =>
    //         item.Preis.includes(filterPrice)
    //     );
    //     console.log(filteredResults);

    //     setFilteredArr(filterPriceFunction);
    // }, [
    //     filteredResults,
    //     filterStatus,
    //     filterShipping,
    //     filterRating,
    //     filterPrice,
    // ]);
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
                    <AsideFilter
                        insertStatusInState={insertStatusInState}
                        setFilterShipping={setFilterShipping}
                        insertRatingInState={insertRatingInState}
                        setFilterPrice={setFilterPrice}
                    />
                    <Marktlist loading={loading} data={filteredArr} />
                </article>
            </section>
            <Footer />
            <FooterEnd />
        </>
    );
};
export default Marktplatz;

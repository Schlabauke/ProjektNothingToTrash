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
    const { token } = useContext(newToken);
    const { data, loading } = useDataFetch();
    let fetchedData = [];
    const [filteredArr, setFilteredArr] = useState(data);
    if (!loading) {
        fetchedData = data;
    }
    // filter function

    // -----------------
    // Zustand
    const [filterStatus, setFilterStatus] = useState([]);
    const insertStatusInState = (status) => {
        if (filterStatus.includes(status)) {
            setFilterStatus(filterStatus.filter((item) => item !== status));
        } else {
            setFilterStatus([...filterStatus, status]);
        }
    };
    const filteredStatusFunction = (data) => {
        return;
    };
    const filteredStatus = data.filter((item) => item.Zustand == filterStatus);

    // -----------------
    // Lieferung
    const [filterShipping, setFilterShipping] = useState(true);
    const filterShippingResults = filteredStatus.filter(
        (item) => item.Lieferung == filterShipping
    );

    // -----------------
    // Rating
    const [filterRating, setFilterRating] = useState([]);
    const insertRatingInState = (status) => {
        if (filterRating.includes(status)) {
            setFilterRating(filterRating.filter((item) => item !== status));
        } else {
            setFilterRating([...filterRating, status]);
        }
    };
    const filterRatingFunction = filterShippingResults.filter(
        (item) => item.Lieferung == filterRating
    );

    // -----------------
    // Preis
    const [filterPrice, setFilterPrice] = useState([]);
    const filteredAll = filterRatingFunction.filter(
        (item) => item.Preis >= filterPrice[0] && item.Preis <= filterPrice[1]
    );

    const { searchItems, filteredResults } = useSearchItems(filteredAll);
    useEffect(() => {
        setFilteredArr(filteredResults);
    }, [filteredResults]);
  
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
                    <Marktlist loading={loading} data={data} />
                </article>
            </section>
            <Footer />
            <FooterEnd />
        </>
    );
};
export default Marktplatz;

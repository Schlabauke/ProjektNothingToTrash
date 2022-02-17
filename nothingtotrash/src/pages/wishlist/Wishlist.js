import AsideFilter from "../../components/asideFilter/AsideFilter";

const Wishlist = () => {
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
                <a className="btn-primary" href="/addproduct">
                    Produkt einstellen
                </a>
            </article>
            <AsideFilter />
        </section>
    );
};

export default Wishlist;

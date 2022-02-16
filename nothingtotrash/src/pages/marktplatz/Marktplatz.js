import Marktlist from "./Marktlist";

const Marktplatz = () => {
    return (
        <section className="marktplatz-Sec">
            <article className="productsHeader-Art">
                <h1>Hilf mit die Umwelt zu schützen</h1>
                <p>
                    Abfälle bedrohen Vögel, Delfine und Co. Mehr als zehn
                    Millionen Tonnen Abfälle gelangen jährlich in die Ozeane.
                    Sie kosten Abertausende Meerestiere das Leben. Seevögel
                    verwechseln Plastik mit natürlicher Nahrung, Delfine
                    verfangen sich in alten Fischernetzen. Hilf mit Müll zu
                    reduzieren und trashnothing.
                </p>

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
            <Marktlist />
        </section>
    );
};
export default Marktplatz;

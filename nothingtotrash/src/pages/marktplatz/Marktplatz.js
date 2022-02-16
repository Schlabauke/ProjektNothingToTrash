import Marktlist from "./Marktlist";

const Marktplatz = () => {
    return (
        <section className="marktplatz-Sec">
            <div>
                <h1>Hilf mit die Umwelt zu <br /> schützen </h1>
            </div>
            <p>
                Abfälle bedrohen Vögel, Delfine und Co. Mehr als zehn Millionen Tonnen Abfälle gelangen jährlich in die Ozeane.
                Sie kosten Abertausende Meerestiere das Leben. Seevögel verwechseln Plastik mit natürlicher Nahrung,
                Delfine verfangen sich in alten Fischernetzen. Hilf mit Müll zu reduzieren und trashnothing.
            </p>
            <form>
                <label>
                    <input type="text" name="name" id="search" placeholder="Suche nach Produkt, Kategorie..." />
                </label>
            </form>
            <div className="button">
                <button className="btn-primary">Produkt einstellen</button>
            </div>
            <Marktlist />

        </section>
    );
};
export default Marktplatz;




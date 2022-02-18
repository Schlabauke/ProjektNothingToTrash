import axios from "axios";
import { useContext, useState } from "react";
import { newUserId } from "../../App";

const AddProduct = () => {
    const { userId } = useContext(newUserId);
    const userObjId = userId;

    const [AnzeigenTyp, setAnzeigenTyp] = useState(true);
    const [Lieferung, setLieferung] = useState(true);
    const [Titel, setTitel] = useState("");
    const [Beschreibung, setBeschreibung] = useState("");
    const [Anzahl, setAnzahl] = useState(0);
    const [Preis, setPreis] = useState(0);
    const [Festpreis, setFestpreis] = useState(true);
    const festpreisFunction = () => {
        setFestpreis(true);
        setVb(false);
        setZuVerschenken(false);
    };
    const [VB, setVb] = useState(false);
    const vbFunction = () => {
        setFestpreis(false);
        setVb(true);
        setZuVerschenken(false);
    };
    const [zuVerschenken, setZuVerschenken] = useState(false);
    const zuVerschenkenFunction = () => {
        setFestpreis(false);
        setVb(false);
        setZuVerschenken(true);
    };
    const [Bild, setBild] = useState("");
    const [Kategorie, setKategorie] = useState("");
    const [PLZ, setPlz] = useState(0);
    const [Ort, setOrt] = useState(0);
    const [Strasse, setStrasse] = useState("");
    const [Name, setName] = useState("");
    const [Telefonnummer, setTelefonnummer] = useState(0);

    const addProductFetch = (e) => {
        e.preventDefault();
        const newProduct = {
            AnzeigenTyp,
            Lieferung,
            Titel,
            Beschreibung,
            Bild,
            Anzahl,
            Preis,
            Festpreis,
            VB,
            zuVerschenken,
            Kategorie,
            PLZ,
            Ort,
            Strasse,
            Name,
            Telefonnummer,
            userObjId,
        };
        console.log(newProduct);
        axios
            .post("http://localhost:3001/api/products/addProduct/", {
                body: JSON.stringify(newProduct),
            })
            .then((res) => {
                console.log(res);
            });
    };

    return (
        <section className="addProduct-Sec">
            <form>
                {/*  Anzeigentyp */}
                <div className="formWrap-Div">
                    <p>Anzeigentyp:</p>
                    <input
                        onChange={(e) => setAnzeigenTyp(true)}
                        type="radio"
                        name="typ"
                        value="biete"
                    />
                    <label htmlFor="biete">Ich biete</label>
                    <input
                        onChange={(e) => setAnzeigenTyp(false)}
                        type="radio"
                        name="typ"
                        value="suche"
                    />
                    <label htmlFor="suche">Ich suche</label>
                </div>

                {/*  Lieferung: */}
                <div className="formWrap-Div">
                    <p>Lieferung:</p>
                    <input
                        onChange={(e) => setLieferung(true)}
                        type="radio"
                        name="shipping"
                    />
                    <label htmlFor="ja">Ja</label>
                    <input
                        onChange={(e) => setLieferung(false)}
                        type="radio"
                        name="shipping"
                    />
                    <label htmlFor="nein">nein</label>
                </div>

                {/*  Titel der Anzeige: */}
                <div className="formWrap-Div">
                    <p>Titel der Anzeige:</p>
                    <input
                        onChange={(e) => setTitel(e.target.value)}
                        type="text"
                        name="title"
                        value={Titel}
                    />
                </div>

                {/*  Beschreibung: */}
                <div className="formWrap-Div">
                    <p>Beschreibung:</p>
                    <textarea
                        onChange={(e) => setBeschreibung(e.target.value)}
                        name="description"
                        rows="4"
                        value={Beschreibung}
                    ></textarea>
                </div>

                {/*  Anzahl: */}
                <div className="formWrap-Div">
                    <p>Anzahl:</p>
                    <input
                        onChange={(e) => setAnzahl(e.target.value)}
                        type="number"
                        name="quantity"
                        value={Anzahl}
                    />
                </div>

                {/*  Preis: */}
                <div className="formWrap-Div">
                    <p>Preis:</p>
                    <input
                        onChange={(e) => setPreis(e.target.value)}
                        type="number"
                        name="price"
                        value={Preis}
                    />
                    <label htmlFor="price">EUR</label>

                    <input
                        onChange={festpreisFunction}
                        type="radio"
                        name="priceKind"
                    />
                    <label htmlFor="priceKind">Festpreis</label>

                    <input
                        onChange={vbFunction}
                        type="radio"
                        name="priceKind"
                    />
                    <label htmlFor="priceKind">VB</label>

                    <input
                        onChange={zuVerschenkenFunction}
                        type="radio"
                        name="priceKind"
                    />
                    <label className="lastLabel" htmlFor="priceKind">
                        Zu Verschenken
                    </label>
                </div>

                {/*  Bilder: */}
                <div className="formWrap-Div">
                    <p>Bilder:</p>
                    <input
                        onChange={(e) => setBild(e.target.value)}
                        className="inputfile"
                        type="file"
                        name="file"
                        id="file"
                    />
                </div>

                {/*  Kategorie */}
                <div className="formWrap-Div">
                    <p>Kategorie:</p>
                    <select
                        onChange={(e) => setKategorie(e.target.value)}
                        name="categorie"
                    >
                        <option value="Klamotten">Klamotten</option>
                        <option value="Möbel">Möbel</option>
                    </select>
                </div>
                {/*  personal* */}
                <div className="formWrapPersonal-Div">
                    {/*  PLZ* / ort */}
                    <div className="formWrap-Div">
                        <p>PLZ*</p>
                        <input
                            onChange={(e) => setPlz(e.target.value)}
                            type="number"
                            name="plz"
                            value={Number(PLZ)}
                        />
                        <input
                            onChange={(e) => setOrt(e.target.value)}
                            id="ortInput"
                            type="text"
                            name="location"
                            value={Ort}
                            placeholder="Ort"
                        />
                    </div>

                    {/*  Straße/Nr.* */}
                    <div className="formWrap-Div">
                        <p>Straße/Nr.*</p>
                        <input
                            onChange={(e) => setStrasse(e.target.value)}
                            type="text"
                            name="street"
                            value={Strasse}
                        />
                    </div>

                    {/*  Name* */}
                    <div className="formWrap-Div">
                        <p>Name*</p>
                        <input
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            name="name"
                            value={Name}
                        />
                    </div>

                    {/*  Telefonnummer* */}
                    <div className="formWrap-Div">
                        <p>Telefonnummer*</p>
                        <input
                            onChange={(e) => setTelefonnummer(e.target.value)}
                            type="text"
                            name="tel"
                            value={Number(Telefonnummer)}
                        />
                    </div>
                </div>
                <input
                    onClick={addProductFetch}
                    className="btn-primary formSubmit"
                    type="submit"
                    value="Produkt einstellen"
                />
            </form>
        </section>
    );
};

export default AddProduct;

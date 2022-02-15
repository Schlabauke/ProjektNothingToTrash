const AddProduct = () => {
    return (
        <section className="addProduct-Sec">
            <form>
                {/*  Anzeigentyp */}
                <div className="formWrap-Div">
                    <p>Anzeigentyp:</p>

                    <input type="radio" name="typ" value="biete" />
                    <label htmlFor="biete">Ich biete</label>
                    <input type="radio" name="typ" value="suche" />
                    <label htmlFor="suche">Ich suche</label>
                </div>

                {/*  Lieferung: */}
                <div className="formWrap-Div">
                    <p>Lieferung:</p>
                    <input type="radio" name="shipping" value="ja" />
                    <label htmlFor="ja">Ja</label>
                    <input type="radio" name="shipping" value="nein" />
                    <label htmlFor="nein">nein</label>
                </div>

                {/*  Titel der Anzeige: */}
                <div className="formWrap-Div">
                    <p>Titel der Anzeige:</p>
                    <input type="text" name="title" />
                </div>

                {/*  Beschreibung: */}
                <div className="formWrap-Div">
                    <p>Beschreibung:</p>
                    <textarea name="description" rows="4"></textarea>
                </div>

                {/*  Anzahl: */}
                <div className="formWrap-Div">
                    <p>Anzahl:</p>
                    <input type="number" name="quantity" />
                </div>

                {/*  Preis: */}
                <div className="formWrap-Div">
                    <p>Preis:</p>
                    <input type="number" name="price" />
                    <label htmlFor="price">EUR</label>

                    <input type="radio" name="priceKind" value="suche" />
                    <label htmlFor="priceKind">Festpreis</label>

                    <input type="radio" name="priceKind" value="suche" />
                    <label htmlFor="priceKind">VB</label>

                    <input type="radio" name="priceKind" value="suche" />
                    <label className="lastLabel" htmlFor="priceKind">
                        Zu Verschenken
                    </label>
                </div>

                {/*  Bilder: */}
                <div className="formWrap-Div">
                    <p>Bilder:</p>
                    <input
                        className="inputfile"
                        type="file"
                        name="file"
                        id="file"
                        multiple
                    />
                </div>

                {/*  Kategorie */}
                <div className="formWrap-Div">
                    <p>Kategorie:</p>
                    <select name="categorie">
                        <option value="Klamotten">Klamotten</option>
                        <option value="Möbel">Möbel</option>
                    </select>
                </div>
                {/*  personal* */}
                <div className="formWrapPersonal-Div">
                    {/*  PLZ* / ort */}
                    <div className="formWrap-Div">
                        <p>PLZ*</p>
                        <input type="number" name="plz" placeholder="PLZ" />
                        <input
                            id="ortInput"
                            type="text"
                            name="location"
                            placeholder="Ort"
                        />
                    </div>

                    {/*  Straße/Nr.* */}
                    <div className="formWrap-Div">
                        <p>Straße/Nr.*</p>
                        <input type="text" name="street" />
                    </div>

                    {/*  Name* */}
                    <div className="formWrap-Div">
                        <p>Name*</p>
                        <input type="text" name="name" />
                    </div>

                    {/*  Telefonnummer* */}
                    <div className="formWrap-Div">
                        <p>Telefonnummer*</p>
                        <input type="text" name="tel" />
                    </div>
                </div>
                <input
                    className="btn-primary formSubmit"
                    type="submit"
                    value="Produkt einstellen"
                />
            </form>
        </section>
    );
};

export default AddProduct;

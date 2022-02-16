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
            <aside>
                <form>
                    {/* Kategorien */}
                    <h4>Kategorien</h4>
                    <div className="asideGrid-Div">
                        <button>Kategorie Name</button>
                        <p>123</p>
                        <button>Kategorie Name</button>
                        <p>123123</p>
                        <button>Kategorie Name</button>
                        <p>1212</p>
                        <button>Kategorie Name</button>
                        <p>12</p>
                    </div>

                    {/* Marken */}
                    <h4>Marken</h4>
                    <div className="asideBranding-Div">
                        <div>
                            <input type="checkbox" name="marke1" id="marke1" />
                            <label htmlFor="marke1">marke1</label>
                        </div>
                        <div>
                            <input type="checkbox" name="marke2" id="marke2" />
                            <label htmlFor="marke2">marke2</label>
                        </div>
                        <div>
                            <input type="checkbox" name="marke3" id="marke3" />
                            <label htmlFor="marke3">marke3</label>
                        </div>
                        <div>
                            <input type="checkbox" name="marke4" id="marke4" />
                            <label htmlFor="marke4">marke4</label>
                        </div>
                    </div>

                    {/* Bewertung */}
                    <h4>Bewertung</h4>
                    <div className="asideRating-Div">
                        <div>
                            <input type="checkbox" name="five" id="five" />
                            <label htmlFor="five">
                                <i class="fi-xnsuxl-star-solid yellowStar"></i>
                                <i class="fi-xnsuxl-star-solid yellowStar"></i>
                                <i class="fi-xnsuxl-star-solid yellowStar"></i>
                                <i class="fi-xnsuxl-star-solid yellowStar"></i>
                                <i class="fi-xnsuxl-star-solid yellowStar"></i>
                            </label>
                        </div>
                        <div>
                            <input type="checkbox" name="four" id="four" />
                            <label htmlFor="four">
                                <i class="fi-xnsuxl-star-solid yellowStar"></i>
                                <i class="fi-xnsuxl-star-solid yellowStar"></i>
                                <i class="fi-xnsuxl-star-solid yellowStar"></i>
                                <i class="fi-xnsuxl-star-solid yellowStar"></i>
                                <i class="fi-xtluxl-star-thin"></i>
                            </label>
                        </div>
                        <div>
                            <input type="checkbox" name="three" id="three" />
                            <label htmlFor="three">
                                <i class="fi-xnsuxl-star-solid yellowStar"></i>
                                <i class="fi-xnsuxl-star-solid yellowStar"></i>
                                <i class="fi-xnsuxl-star-solid yellowStar"></i>
                                <i class="fi-xtluxl-star-thin"></i>
                                <i class="fi-xtluxl-star-thin"></i>
                            </label>
                        </div>
                        <div>
                            <input type="checkbox" name="two" id="two" />
                            <label htmlFor="two">
                                <i class="fi-xnsuxl-star-solid yellowStar"></i>
                                <i class="fi-xnsuxl-star-solid yellowStar"></i>
                                <i class="fi-xtluxl-star-thin"></i>
                                <i class="fi-xtluxl-star-thin"></i>
                                <i class="fi-xtluxl-star-thin"></i>
                            </label>
                        </div>
                        <div>
                            <input type="checkbox" name="one" id="one" />
                            <label htmlFor="one">
                                <i class="fi-xnsuxl-star-solid yellowStar"></i>
                                <i class="fi-xtluxl-star-thin"></i>
                                <i class="fi-xtluxl-star-thin"></i>
                                <i class="fi-xtluxl-star-thin"></i>
                                <i class="fi-xtluxl-star-thin"></i>
                            </label>
                        </div>
                    </div>

                    {/* Preis */}
                    <h4>Preis</h4>
                    <div className="asidePrice-Div">
                        <input
                            type="range"
                            min="0"
                            max="10000"
                            name="priceSlider"
                            id="priceSlider"
                        />
                        <div className="priceFlex-Div">
                            <div>
                                <p>Min</p>
                                <input
                                    type="number"
                                    min="0"
                                    name="minPrice"
                                    id="minPrice"
                                />
                            </div>
                            -
                            <div>
                                <p>Max</p>
                                <input
                                    type="number"
                                    max="10000"
                                    name="maxPrice"
                                    id="maxPrice"
                                />
                            </div>
                        </div>
                        <div>
                            <input
                                className="btn-primary"
                                type="reset"
                                value="Reset"
                            />
                        </div>
                    </div>
                </form>
            </aside>
        </section>
    );
};

export default Wishlist;

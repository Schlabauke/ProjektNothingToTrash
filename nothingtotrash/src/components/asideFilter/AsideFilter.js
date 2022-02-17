const AsideFilter = () => {
    return (
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
                            <i className="fi-xnsuxl-star-solid yellowStar"></i>
                            <i className="fi-xnsuxl-star-solid yellowStar"></i>
                            <i className="fi-xnsuxl-star-solid yellowStar"></i>
                            <i className="fi-xnsuxl-star-solid yellowStar"></i>
                            <i className="fi-xnsuxl-star-solid yellowStar"></i>
                        </label>
                    </div>
                    <div>
                        <input type="checkbox" name="four" id="four" />
                        <label htmlFor="four">
                            <i className="fi-xnsuxl-star-solid yellowStar"></i>
                            <i className="fi-xnsuxl-star-solid yellowStar"></i>
                            <i className="fi-xnsuxl-star-solid yellowStar"></i>
                            <i className="fi-xnsuxl-star-solid yellowStar"></i>
                            <i className="fi-xtluxl-star-thin"></i>
                        </label>
                    </div>
                    <div>
                        <input type="checkbox" name="three" id="three" />
                        <label htmlFor="three">
                            <i className="fi-xnsuxl-star-solid yellowStar"></i>
                            <i className="fi-xnsuxl-star-solid yellowStar"></i>
                            <i className="fi-xnsuxl-star-solid yellowStar"></i>
                            <i className="fi-xtluxl-star-thin"></i>
                            <i className="fi-xtluxl-star-thin"></i>
                        </label>
                    </div>
                    <div>
                        <input type="checkbox" name="two" id="two" />
                        <label htmlFor="two">
                            <i className="fi-xnsuxl-star-solid yellowStar"></i>
                            <i className="fi-xnsuxl-star-solid yellowStar"></i>
                            <i className="fi-xtluxl-star-thin"></i>
                            <i className="fi-xtluxl-star-thin"></i>
                            <i className="fi-xtluxl-star-thin"></i>
                        </label>
                    </div>
                    <div>
                        <input type="checkbox" name="one" id="one" />
                        <label htmlFor="one">
                            <i className="fi-xnsuxl-star-solid yellowStar"></i>
                            <i className="fi-xtluxl-star-thin"></i>
                            <i className="fi-xtluxl-star-thin"></i>
                            <i className="fi-xtluxl-star-thin"></i>
                            <i className="fi-xtluxl-star-thin"></i>
                        </label>
                    </div>
                </div>

                {/* Preis */}
                <h4>Preis</h4>
                <div className="asidePrice-Div">
                    {/* ######################## */}
                    {/* ######################## */}
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
    );
};

export default AsideFilter;

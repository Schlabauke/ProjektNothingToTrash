import { useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import { Range, getTrackBackground } from "react-range";
const STEP = 1;
const MIN = 0;
const MAX = 1000;

const AsideFilter = (props) => {
    const [values, setValues] = useState([0, 500]);
    const resetValue = () => {
        setValues([0, 500]);
    };
    return (
        <aside>
            <form>
                {/* Zustand */}
                <h4>Zustand</h4>
                <div className="asideGrid-Div">
                    <div>
                        <input
                            type="checkbox"
                            name="neu"
                            id="neu"
                            value="neu"
                        />
                        <label htmlFor="neu">neu</label>
                    </div>
                    <p>123</p>
                    <div>
                        <input
                            type="checkbox"
                            name="wieneu"
                            id="wieneu"
                            value="Wie neu"
                        />
                        <label htmlFor="wieneu">Wie neu</label>
                    </div>
                    <p>1123</p>
                    <div>
                        <input
                            type="checkbox"
                            name="gebraucht"
                            id="gebraucht"
                            value="gebraucht"
                        />
                        <label htmlFor="gebraucht">gebraucht</label>
                    </div>
                    <p>1212</p>
                    <div>
                        <input
                            type="checkbox"
                            name="defekt"
                            id="defekt"
                            value="Defekt"
                        />
                        <label htmlFor="defekt">Defekt</label>
                    </div>
                    <p>12</p>
                </div>
                {/* Lieferung */}
                <h4>Lieferung</h4>
                <div className="asideBranding-Div">
                    <div>
                        <input
                            type="radio"
                            name="lieferung"
                            id="marke1"
                            value={true}
                        />
                        <label htmlFor="marke1">ja</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            name="lieferung"
                            id="marke2"
                            value={false}
                        />
                        <label htmlFor="marke2">nein</label>
                    </div>
                </div>

                {/* Bewertung */}
                <h4>Bewertung</h4>
                <div className="asideRating-Div">
                    <div>
                        <input type="checkbox" name="five" id="five" />
                        <label htmlFor="five">
                            <FaStar className="yellowStar" />
                            <FaStar className="yellowStar" />
                            <FaStar className="yellowStar" />
                            <FaStar className="yellowStar" />
                            <FaStar className="yellowStar" />
                        </label>
                    </div>
                    <div>
                        <input type="checkbox" name="four" id="four" />
                        <label htmlFor="four">
                            <FaStar className="yellowStar" />
                            <FaStar className="yellowStar" />
                            <FaStar className="yellowStar" />
                            <FaStar className="yellowStar" />
                            <FaRegStar />
                        </label>
                    </div>
                    <div>
                        <input type="checkbox" name="three" id="three" />
                        <label htmlFor="three">
                            <FaStar className="yellowStar" />
                            <FaStar className="yellowStar" />
                            <FaStar className="yellowStar" />
                            <FaRegStar />
                            <FaRegStar />
                        </label>
                    </div>
                    <div>
                        <input type="checkbox" name="two" id="two" />
                        <label htmlFor="two">
                            <FaStar className="yellowStar" />
                            <FaStar className="yellowStar" />
                            <FaRegStar />
                            <FaRegStar />
                            <FaRegStar />
                        </label>
                    </div>
                    <div>
                        <input type="checkbox" name="one" id="one" />
                        <label htmlFor="one">
                            <FaStar className="yellowStar" />
                            <FaRegStar />
                            <FaRegStar />
                            <FaRegStar />
                            <FaRegStar />
                        </label>
                    </div>
                </div>

                {/* Preis */}
                <h4>Preis</h4>
                <div className="asidePrice-Div">
                    {/* ######################## */}
                    <Range
                        values={values}
                        step={STEP}
                        min={MIN}
                        max={MAX}
                        // rtl={rtl}
                        onChange={(values) => {
                            setValues(values);
                        }}
                        renderTrack={({ props, children }) => (
                            <div
                                onMouseDown={props.onMouseDown}
                                onTouchStart={props.onTouchStart}
                                style={{
                                    ...props.style,
                                    height: "36px",
                                    display: "flex",
                                    width: "100%",
                                }}
                            >
                                <div
                                    ref={props.ref}
                                    style={{
                                        height: "5px",
                                        width: "100%",
                                        borderRadius: "4px",
                                        background: getTrackBackground({
                                            values,
                                            colors: [
                                                "rgba(209, 209, 209, 1)",
                                                "rgba(120, 84, 247, 1)",
                                                "rgba(209, 209, 209, 1)",
                                            ],
                                            min: MIN,
                                            max: MAX,
                                            // rtl,
                                        }),
                                        alignSelf: "center",
                                    }}
                                >
                                    {children}
                                </div>
                            </div>
                        )}
                        renderThumb={({ props, isDragged }) => (
                            <div
                                {...props}
                                style={{
                                    ...props.style,
                                    height: "20px",
                                    width: "20px",
                                    borderRadius: "50%",
                                    backgroundColor: "#FFF",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    boxShadow: "0px 2px 6px #AAA",
                                }}
                            >
                                <div
                                    style={{
                                        height: "16px",
                                        width: "5px",
                                        backgroundColor: isDragged
                                            ? "#fff"
                                            : "#fff",
                                    }}
                                />
                            </div>
                        )}
                    />

                    {/* ######################## */}
                    <div className="priceFlex-Div">
                        <div>
                            <p>Min</p>
                            <input
                                type="text"
                                value={`${values[0]}€`}
                                name="minPrice"
                                id="minPrice"
                                disabled={true}
                            />
                        </div>
                        -
                        <div>
                            <p>Max</p>
                            <input
                                type="text"
                                value={`${values[1]}€`}
                                name="maxPrice"
                                id="maxPrice"
                                disabled={true}
                            />
                        </div>
                    </div>
                    <div>
                        <input
                            onClick={resetValue}
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

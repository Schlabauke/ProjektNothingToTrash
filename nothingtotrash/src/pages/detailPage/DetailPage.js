import { NavLink } from "react-router-dom";
import FooterEnd from "../../components/footerEnd/FooterEnd";

import { useParams } from "react-router-dom";
import useDataFetch from "../../hooks/useDatafetch";
import { BiLoaderCircle } from "react-icons/bi";

const DetailPage = () => {
    let { id } = useParams();
    const { data, loading } = useDataFetch();
    let oneData = data.filter((e) => e._id === id)[0];
    return (
        <>
            {loading && (
                <div className="loading-Div">
                    <h2>
                        <BiLoaderCircle className="circle" />
                    </h2>
                </div>
            )}
            {!loading && (
                <section className="detailPage-Sec">
                    <figure>
                        <img src={oneData.Bild.convertedImage} alt="" />
                        <figcaption>
                            <NavLink className="btn-primary" id="btn" to="/">
                                Bearbeiten
                            </NavLink>
                            <NavLink className="btn-primary" id="btn1" to="/">
                                Verkauft
                            </NavLink>
                        </figcaption>
                    </figure>
                    <div className="detailText">
                        <h2>{oneData.Titel}</h2>
                        {oneData.Festpreis ? (
                            <h3>{oneData.Preis},00 EUR</h3>
                        ) : oneData.VB ? (
                            <h3>{oneData.Preis},00 EUR VB</h3>
                        ) : (
                            <h3>Zu Verschenken</h3>
                        )}

                        <div className="describe">
                            <p>Zustand</p>
                            <span>{oneData.status}</span>
                            {/* <p>Marke</p>
                        <span>{oneData.brand}</span> */}
                            <p>Lieferung</p>
                            <span>{oneData.Lieferung ? "ja" : "nein"}</span>
                            <p>Auf Lager</p>
                            <span>{oneData.Anzahl}</span>
                        </div>
                        <div className="button">
                            <NavLink className="btn-primary" id="btn1" to="/">
                                Auf die Wunschliste
                            </NavLink>
                        </div>
                        <div>
                            <h3>Produktbeschreibung</h3>
                            <p>{oneData.Beschreibung}</p>
                        </div>
                    </div>
                </section>
            )}
            <FooterEnd />
        </>
    );
};

export default DetailPage;

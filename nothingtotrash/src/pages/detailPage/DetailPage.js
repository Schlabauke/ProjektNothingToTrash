import { NavLink } from "react-router-dom";
import FooterEnd from "../../components/footerEnd/FooterEnd";

import { useParams } from "react-router-dom";
const DetailPage = (props) => {
    let { id } = useParams();
    let oneData = props.data.filter((e) => e._id == id)[0];
    return (
        <>
            <section className="detailPage-Sec">
                <figure>
                    <img src={`/img/${oneData.Bild}`} alt="" />
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
                    <h3>{oneData.Preis},00 EUR</h3>
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
                    <div>
                        <NavLink className="btn-primary" id="btn1" to="/">
                            Auf die Wunschliste
                        </NavLink>
                    </div>
                    <div>
                        <h3>Produktbeschreibung</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Aliquam <br /> ac id elementum nec dolor.
                            Ridiculus diam ac tellus id egestas <br /> mauris
                            sed etiam. Amet, at eu tristique quis. Massa
                            fermentum <br /> eget pharetra magna vitae vitae
                            ultricies consequat. Amet, <br /> integer diam sit
                            netus adipiscing eu vestibulum vitae ut. Sem vel{" "}
                            <br /> fringilla malesuada amet. Tellus massa amet
                            porta vel in. <br /> Viverra non proin tempus
                            viverra rhoncus volutpat ac. Accumsan <br />{" "}
                            facilisi orci et amet vitae mauris scelerisque
                            sed.ac id elementum <br /> nec dolor. Ridiculus diam
                            ac tellus id egestas <br /> mauris sed etiam. Amet,
                            at eu tristique quis. Massa fermentum <br /> eget
                            pharetra magna vitae vitae ultricies consequat.
                            Amet, <br /> integer diam sit netus adipiscing eu
                            vestibulum vitae ut. Sem vel <br /> fringilla
                            malesuada amet. Tellus massa amet porta vel in.{" "}
                            <br /> Viverra non proin tempus viverra rhoncus
                            volutpat ac. Accumsan <br /> facilisi orci et amet
                            vitae mauris scelerisque sed.
                        </p>
                    </div>
                </div>
            </section>
            <FooterEnd />
        </>
    );
};

export default DetailPage;

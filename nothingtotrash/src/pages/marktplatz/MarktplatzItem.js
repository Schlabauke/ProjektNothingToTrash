import { NavLink } from "react-router-dom";

const MarktplatzItem = (props) => {
    return (
        <div className="marktplatzitem">
            <img src={props.Bild} alt={props.Titel} />
            <div className="text">
                <h4>{props.Preis} EUR</h4>
                <h4>{props.Titel}</h4>
                <p>{props.Beschreibung}</p>
                <div>
                    <p>Zustand</p>
                    <span>{props.Zustand}</span>
                    <p>Lieferung</p>
                    <span>{props.Lieferung ? "ja" : "nein"}</span>
                    <p>Auf Lager</p>
                    <span>{props.Anzahl}</span>
                </div>
            </div>
            <div>
                <NavLink className="btn-primary" to={`/details/${props.id}`}>
                    Details
                </NavLink>
                <NavLink className="btn-primary" to="/">
                    Auf die Wunschliste
                </NavLink>
            </div>
        </div>
    );
};

export default MarktplatzItem;

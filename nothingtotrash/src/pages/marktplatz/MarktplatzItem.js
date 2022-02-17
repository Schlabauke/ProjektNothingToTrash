import { NavLink } from "react-router-dom";

const MarktplatzItem = (props) => {
    return (
        <div className="marktplatzitem">
            <img src={`/img/${props.img}`} alt={props.title} />
            <div className="text">
                <h4>{props.price} EUR</h4>
                <h4>{props.title}</h4>
                <p>{props.description}</p>
                <div>
                    <p>Zustand</p>
                    <span>{props.status}</span>
                    <p>Marke</p>
                    <span>{props.brand}</span>
                    <p>Lieferung</p>
                    <span>{props.shipping ? "ja" : "nein"}</span>
                    <p>Auf Lager</p>
                    <span>{props.quantity}</span>
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

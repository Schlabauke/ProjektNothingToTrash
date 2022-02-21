import MarktplatzItem from "./MarktplatzItem";

const Marktlist = (props) => {
    return (
        <div className="marktlist">
            {props.loading && <div>Loading</div>}
            {!props.loading &&
                props.data.map((e, i) => (
                    <MarktplatzItem
                        key={i}
                        id={e._id}
                        Titel={e.Titel}
                        Beschreibung={e.Beschreibung}
                        Bild={e.Bild.convertedImage}
                        Preis={e.Preis}
                        Zustand={e.Zustand}
                        Lieferung={e.Lieferung}
                        Anzahl={e.Anzahl}
                    />
                ))}
        </div>
    );
};

export default Marktlist;

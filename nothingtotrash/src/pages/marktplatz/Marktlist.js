import MarktplatzItem from "./MarktplatzItem";

const Marktlist = (props) => {
    return (
        <>
            {props.loading && <div>Loading....</div>}
            {!props.loading && (
                <div className="marktlist">
                    {props.data.map((e, i) => (
                        <MarktplatzItem
                            key={i}
                            id={e._id}
                            title={e.Titel}
                            description={e.Beschreibung}
                            img={e.Bild}
                            price={e.Preis}
                            status={e.Zustand}
                            shipping={e.Lieferung}
                            quantity={e.Anzahl}
                        />
                    ))}
                </div>
            )}
        </>
    );
};

export default Marktlist;

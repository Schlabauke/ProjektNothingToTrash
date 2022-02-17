import MarktplatzItem from "./MarktplatzItem";

const Marktlist = (props) => {
    return (
        <div className="marktlist">
            {props.data.map((e, i) => (
                <MarktplatzItem
                    key={i}
                    id={e.id}
                    title={e.title}
                    description={e.description}
                    img={e.img}
                    price={e.price}
                    status={e.status}
                    brand={e.brand}
                    shipping={e.shipping}
                    quantity={e.quantity}
                />
            ))}
        </div>
    );
};

export default Marktlist;

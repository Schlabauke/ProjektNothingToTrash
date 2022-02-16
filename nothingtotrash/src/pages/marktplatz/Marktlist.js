import { data } from "../../data";
import MarktplatzItem from "./MarktplatzItem";

const Marktlist = () => {
    return (
        <div className="marktlist">
            {data.map((e, i) => (
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

import MarktplatzItem from "./MarktplatzItem";

const Marktlist = props => {
	console.log(props);
	return (
		<div className='marktlist'>
			{props.data.map((e, i) => (
				<MarktplatzItem
					key={i}
					id={e._id}
					title={e.Titel}
					description={e.Beschreibung}
					img={e.Bild.convertedImage}
					price={e.Preis}
					status={e.Zustand}
					shipping={e.Lieferung}
					quantity={e.Anzahl}
				/>
			))}
		</div>
	);
};

export default Marktlist;

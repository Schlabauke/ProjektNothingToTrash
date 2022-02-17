import { useState } from "react";

const useFilterLieferung = (filteredZustand) => {
    const [filterLieferung, setFilterLieferung] = useState("");
    const [filteredLieferung, setFilteredLieferung] = useState("");
    const filterLieferungFunction = (filterValue) => {
        setFilterLieferung(filterValue);
        if (filterLieferung !== "") {
            const filteredLieferungData = filteredZustand.filter((item) => {
                return (item.shipping = filterValue);
            });
            setFilteredLieferung(filteredLieferungData);
        } else {
            setFilteredLieferung(filteredZustand);
        }
    };

    return;
};

export default useFilterLieferung;

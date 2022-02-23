import { useState } from "react";
//data ist beim Laden der Page leer
const useSearchItems = (data) => {
    const [filteredResults, setFilteredResults] = useState(data);

    const searchItems = (searchValue) => {
        if (searchValue.length >= 0) {
            const filteredData = data.filter((item) => {
                return Object.values(item)
                    .join("")
                    .toLowerCase()
                    .includes(searchValue.toLowerCase());
            });
            setFilteredResults(filteredData);
        } else {
            setFilteredResults(data);
        }
    };
    return { searchItems, filteredResults };
};

export default useSearchItems;

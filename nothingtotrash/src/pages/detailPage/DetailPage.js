import { data } from "../../data";

import { useParams } from "react-router-dom";
const DetailPage = () => {
    let { id } = useParams();
    let oneData = data.filter((e) => e.id == id);
    return (
        <section className="detailPage-Sec">
            <h1>{oneData[0].title}</h1>
        </section>
    );
};

export default DetailPage;

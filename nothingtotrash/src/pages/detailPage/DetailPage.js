import { data } from "../../data";

import { useParams } from "react-router-dom";
const DetailPage = () => {
    let { id } = useParams();
    let oneData = data.filter((e) => e.id == id)[0];
    return (
        <section className="detailPage-Sec">
            <h1>{oneData.title}</h1>
            <img src={`/img/${oneData.img}`} alt={oneData.title} />
        </section>
    );
};

export default DetailPage;

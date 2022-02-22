import { NavLink } from "react-router-dom";
import  axios from "axios";
import { useNavigate } from "react-router-dom";
import { newUserId , newToken} from "../../App";
import { useContext, useState } from "react";

const MarktplatzItem = (props) => {
    const { userId, setUserId } = useContext(newUserId)
    const { token, setToken } = useContext(newToken)
   const productId = props.id
    const navigate = useNavigate();
    const wunschListe = (e) =>{
        console.log('ProductId', productId);
        const checkBox = e.target.checked
        if(checkBox){
            console.log("checked");
           axios.
           post("http://localhost:3001/api/user/favorites",
            {userObjId:userId, productObjId:productId},
            {  headers:{
                token
            }}
         )
        }
      else{
            console.log("unchecked");
             axios.delete("http://localhost:3001/api/user/favorites/",
             {data:{userObjId:userId, productObjId:productId},
                headers:{
                token
            }})
     }
    }     
    return (
        <div className="marktplatzitem">
            <img src={props.Bild} alt={props.Titel} />
            <div className="text">
                <h4>{props.Preis} EUR</h4>
                <h4>{props.Titel}</h4>
                <p>{props.Beschreibung}</p>
                <div>
                    <p>Zustand</p>
                    <span>{props.Zustand}</span>
                    <p>Lieferung</p>
                    <span>{props.Lieferung ? "ja" : "nein"}</span>
                    <p>Auf Lager</p>
                    <span>{props.Anzahl}</span>
                </div>
            </div>
            <div>
                <NavLink className="btn-primary" to={`/details/${props.id}`}>
                    Details
                </NavLink>
                <label name='Auf die Wunschliste'>
                <input onChange={wunschListe} type="checkbox" name='Auf die Wunschliste'/>
                Auf die Wunschliste 
                </label>
            </div>
        </div>
    );
};

export default MarktplatzItem;

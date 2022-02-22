import { NavLink } from "react-router-dom";
import  axios from "axios";
import { useNavigate } from "react-router-dom";
import { newUserId , newToken, favorite} from "../../App";
import { useContext, useState, useEffect } from "react";
let ArrayFavorites =[]
const MarktplatzItem = (props) => {
    const [toggle, setToggle] = useState(false)
    const { favoritesItem, setFavoritesItem} = useContext(favorite)
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
     
     //Fetch für einen neuen State der Favoriten
     axios.get("http://localhost:3001/api/user/favorites", {
            headers:{token, userId}
        })
        .then((res)=>{setFavoritesItem(res.data)})
    }    
    
   //Fetch für die Checkboxes (Favoriten)

        useEffect(() => { 
            const checkboxes = document.querySelectorAll(".checkBoxes")  
            if(favoritesItem ){
                checkboxes.forEach(eCheck =>{
                    favoritesItem.forEach(eState =>{
                        if(eCheck.value == eState){
                            eCheck.checked = true
                        } 
                    })
                 })
            }
    console.log(favoritesItem)
      },[]);
   
    return (
        <div className="marktplatzitem">
            {/* <button onClick={fav}>Favorites</button> */}
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
                <input onChange={wunschListe} type="checkbox" className="checkBoxes" name='Auf die Wunschliste' value={props.id}/>
                Auf die Wunschliste 
                </label>
            </div>
        </div>
    ); 
};

export default MarktplatzItem;

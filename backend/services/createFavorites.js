const { _getDB } = require('../db_access/_getDB')
const { getAllProducts } = require("../db_access/user_dao")



async function createFavorites(productObjId) {
    const db = await _getDB()
    const allProducts = await getAllProducts()
    const favorites = await db.collection('favorites').find().toArray()
 
        allProducts.map(product =>{
            console.log(product._id);
            if(product._id == productObjId){
             console.log("productID",productObjId);
            
               
                    favorites.map(fav=>{
                        console.log("Favoriten",fav);
                        if(fav._id == productObjId){
                            console.log('Found your favorite')
                        } else{
                            console.log("Inserted");
                            console.log(product);
                            db.collection('favorites').insertOne(product)
                        }
                    })
            }
        })
 
   
}
    

//möchte gerne noch ein Promise zurück geben--> Callback fehlt für welches Promise(getAllProducts)?

//prodObjId & userObjId werden aus dem Frontend an uns geschickt 
module.exports = {
    createFavorites
}
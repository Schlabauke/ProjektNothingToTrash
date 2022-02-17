const express = require('express')
const app = express()
const dotenv = require('dotenv')
const formidable = require("formidable")
const cors = require('cors')
//import functions
const { registerUser } = require('./services/registerUser')
const { LoginUser } = require('./services/loginUser')
const { addProduct, getAllProducts } = require('./db_access/user_dao')
const { createFavorites } = require('./services/createFavorites')

// Allgemeine Use
dotenv.config()
app.use(cors())
app.use(express.static('uploads'))
app.use(express.json())


//POST-Routen
app.post("/api/users/register", (req, res) => {
    //Daten aus Inputfeld
    const username = req.body.username
    const email = req.body.email
    const password = req.body.password

    //registerUser 
    registerUser({ username, email, password })
        .then(() => {
            res.sendStatus(201, 'User Created')
        })
        .catch((err) => {
           send('Sorry!But this User already exists!')
        })
}) //funktioniert

app.post("/api/users/login", (req, res) => {
    //daten aus Input-Feldern
    const email = req.body.email
    const password = req.body.password

    LoginUser({ email, password })
        .then((token) => {
            res.send( token )
        })

        .catch((err) => {
            console.log('Err bei LogIn', err)
            res.send({ err: err.message })
        });
})//funktioniert

app.post('/api/products/addProduct/', (req, res, next) => {

    const form = formidable({ multiples: true, uploadDir: 'uploads' });
    form.parse(req, (err, fields, files) => {
       
        if (err) {
            console.log(err);
            return;
        } else {
            let newProduct = {
                AnzeigenTyp: fields.AnzeigenTyp,
                Lieferung: fields.Lieferung,
                Titel: fields.Titel,
                Beschreibung: fields.Beschreibung,
                Bild: files.Bild ? files.Bild.newFilename : 'leerer string',
                Anzahl: fields.Anzahl,
                Preis: fields.Preis,
                Festpreis: false,
                VB: false,
                zuVerschenken: false,
                Kategorie: fields.Kategorie,
                PLZ: fields.PLZ,
                Strasse: fields.Strasse,
                Name: fields.Name,
                Telefonnummer: fields.Telefonnummer,
                userObjId: fields.userObjId,
            }
        
            addProduct(newProduct)
            .then(()=>{
                res.send(
                    'Produkt wurde hinzugefügt')
            })
            .catch((err)=>{
            console.log('Err in AddProduct', err)
            res.send({ err: err.message })
            })
            
        }
    })
}) //funktioniert

app.post('/api/favorites',(req,res)=>{
    const productObjId = req.body.productObjId
    const userObjId = req.body.userObjId
    console.log("productObjId:",productObjId);
    createFavorites(productObjId)
    .catch((err) =>{
        console.log(err,'This ProductObjId already exist in Your Favorites')
    })

})



//GET-Routen

//für den allgemeinen Marktplatz
app.get('/api/products/allProducts', (req, res) => {
    console.log("davor");
    getAllProducts()
    .then((allProducts)=>{
    console.log(allProducts)
    res.send(allProducts)
    })
    .catch((err)=>{
        console.log('Err in GET/allProducts', err)
        res.send({ err: err.message })
    })
})



const PORT = 3001
app.listen(PORT, () => console.log('Listening on Port,', PORT))



// Object_id vom Produkt für Favoriten 
// insertOne(favorites),anhand der userObjId + ProductObjId
//post('/api/favorites/)--> was wird dem Frontend senden
//get('/api/myfavorites')send( favorites of userObjId)
/* Produkt in allproducts,gleiche product in collection 'favorites' + userObjId */




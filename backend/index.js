const express = require('express')
const app = express()
const dotenv = require('dotenv')
const formidable = require("formidable")
const cors = require('cors')
const { registerUser } = require('./services/registerUser')
const { LoginUser } = require('./services/loginUser')
const { addProduct, getAllProducts , getAllUsers} = require('./db_access/user_dao')



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
            res.status(400).send('Sorry!But this User already exists!')
        })
}) //funktioniert

app.post("/api/users/login", (req, res) => {
    //daten aus Input-Feldern
    const email = req.body.email
    const password = req.body.password

    LoginUser({ email, password })
        .then((token) => {
            res.send({ token })
        })
        .catch((err) => {
            console.log('Err bei LogIn', err)
            res.status(400).send({ err: err.message })
        });
})//funktioniert

app.post('/api/products/addProduct', (req, res, next) => {

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
                Telefonnummer: fields.Telefonnummer
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
})




//GET-Routen

app.get('/', (req, res) => {

})

app.get('/login/mySoldProducts', (req, res) => {

})

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

app.get('/api/products/allProducts/:id',(res,req)=>{
    let id = req.params.id

})


const PORT = 3001
app.listen(PORT, () => console.log('Listening on Port,', PORT))





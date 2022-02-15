const express = require('express')
const app = express()
const dotenv = require('dotenv')
const formidable = require("formidable")
const cors = require('cors')
const formidableMiddleware = require('express-formidable');
const { registerUser } = require('./services/registerUser')
const { LoginUser } = require('./services/loginUser')


// Allgemeine Use
dotenv.config()
app.use(cors())
app.use(express.json())
app.use(formidableMiddleware());


//POST-Routen
app.post("/api/users/register", (req, res) => {
    //Daten aus Inputfeld
    const username = req.body.username
    const email = req.body.email
    const password = req.body.password

    //registerUser 
    registerUser({ username, email, password })
        .then(() => {
            res.sendStatus(201)
        })

        .catch((err) => {
            console.log('err on Registrierung:', err)
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
        })
    console.log(email, password);
})

app.post('/api/products/addProduct', (req, res, next) => {
    const form = formidable({ multiples: true });

    form.parse(req, (err, fields, files) => {
        if (err) {
            next(err);
            return;
        } else {
            const newProduct = {
                AnzeigenTyp: fields.AnzeigenTyp,
                Lieferung: fields.Lieferung,
                Titel: fields.Titel,
                Beschreibung: fields.Beschreibung,
                Bild: files.Bild,
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
            console.log('Fields:', fields, files, newProduct)
        }
    })
})
//funktioniert nicht!! --> evtl auslagern?



//GET-Routen

app.get('/', (req, res) => {

})
app.get('/login/myFavorites', (req, res) => {

})
app.get('/login/mySoldProducts', (req, res) => {

})
app.get('/api/products/allProducts', (req, res) => {

})


const PORT = 3001
app.listen(PORT, () => console.log('Listening on Port,', PORT))





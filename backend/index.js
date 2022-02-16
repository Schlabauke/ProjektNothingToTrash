const express = require('express')
const app = express()
const dotenv = require('dotenv')
const formidable = require("formidable")
const cors = require('cors')
const { registerUser } = require('./services/registerUser')
const { LoginUser } = require('./services/loginUser')


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
    console.log('In api/products/addProduct')
    form.parse(req, (err, fields, files) => {
        console.log('In form parse')

        if (err) {
            console.log(err);
            return;
        } else {
            console.log('in else')
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
            console.log('after newProduct')
            res.send(newProduct)
        }
        console.log('after if/else')
    })
})
//funktioniert



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





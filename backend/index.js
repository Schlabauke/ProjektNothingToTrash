const express = require('express')

const app = express()
const dotenv = require('dotenv')
const formidable = require("formidable")
const cors = require('cors')
const {
    createNewUser,
    checkEmailExists,
    addProduct
} = require('./db_access/user_dao')

// Allgemeine Use
app.use(cors())
app.use(express.json())
dotenv.config()



//Routen
app.post("/register", (req, res) => {
    //User anlegen
    const user = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    }
    console.log(user) //kommt an

    // checkEmailExists({ username, email })
    //     .then((username, email) => {
    //         console.log(username, email)
    //     })
    //    .catch((err) => {
    //         console.log('err on Registrierung:', err)
    //     })
    //greift auf checkEmail in userDao zu, User wird angelegt, wenn Email nicht schon existiert
    // was soll jetzt passieren? 

})

app.post("/login", (req, res) => {
    res.send("Logged") //Token generieren 
    //richtiger email und pwHash schauen
    console.log(req.body);
})

app.post('/addProduct', (req, res) => {
    const form = formidable({ multiples: true });
    form.parse(req, (err, fields, files) => {
        if (err) {
            console.log("Error");
            return;
        }
        const newProduct = {
            AnzeigenTyp: '',
            Lieferung: '',
            Titel: '',
            Beschreibung: '',
            Bild: '',
            Anzahl: '',
            Preis: '€',
            Festpreis: true,
            VB: false,
            zuVerschenken: false,
            Kategorie: '',
            PLZ: '',
            Strasse: '',
            Name: '',
            Telefonnummer: ''
        }
        console.log(newProduct)
        addProduct(newProduct) //greift auf addProduct in userDao zu
    })
})

//GET-Routen

app.get('/', (req, res) => {

})
app.get('/login/myFavorites', (req, res) => {

})
app.get('login/mySoldProducts', (req, res) => {

})
app.get('/allProducts', (req, res) => {

})


const PORT = 3001
app.listen(PORT, () => console.log('Listening on Port,', PORT))






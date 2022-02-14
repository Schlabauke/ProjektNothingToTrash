const { _getDB } = require('./_getDB')

//create new User
async function createNewUser(user) {
    const db = await _getDB()
    const newUser = await db.collection('users').insertOne(user)
    return newUser
}
//Check Name or email exist, User vorhanden in Datenbank 
async function checkEmailExists(email) {
    const db = await _getDB()
    const user = await db.collection('users').findOne({
        $or: [
            { email: email }
        ]
    })
    if (!user) {
        insertOne(email)
    } else {
        console.log("user Exist");
    }
    return user
}

//addProduct
async function addProduct(newProduct) {
    const db = await _getDB()
    const Product = await db.collection('products').insertOne(newProduct)
    return Product
}

module.exports = {
    createNewUser,
    checkEmailExists,
    addProduct
}
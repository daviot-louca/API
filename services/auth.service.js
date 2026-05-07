const auth = require("../models/user.model")
const { hash, compare } = require("bcrypt")
const jwt = require("jsonwebtoken")
require("dotenv").config()

const authService = async ({ username, email, password }) => {
    const passwordcrypt = await hash(password, 10)
    const envoie = await auth.create({
        username,
        email,
        password: passwordcrypt,
    })
    return envoie
}

const loginService = async ({ email, password }) => {
    const user = await auth.findOne({
        where: { email }
    });
    if (!user) {
        return "utilisateur introuvable"
    }
    const passwordDB = user.password;
    const result = await compare(password, passwordDB);
    if (result === true) {
        console.log("mot de passe correct")
        return jwt.sign({ id: user.id, email: user.email },process.env.JWT_SECRET/*{expiresIn:"7d"} si je veux que el client doit se reconnecter chaque semaine*/)
    } else {   
        return "identifiants incorrects"
    }
}
module.exports = { authService, loginService };
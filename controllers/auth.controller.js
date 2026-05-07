const {authService,loginService} = require("../services/auth.service");

const createAuth = async(req,res)=>{
    try {
        const {username,email,password} =req.body;
        const info = await authService({username,email,password});
        res.json(info) 
    } catch (error) {
        res.status(500).json("données bloquées au niveau du controller")
    }
}


//problème dans le log 
const loginController = async(req,res)=>{
    try {
        const {email,password} = req.body;
        const info = await loginService({email,password})
        res.json(info)
    } catch (error) {
        console.log(error)
        res.status(500).json("données bloqués au niveau du controller login")
    }
}
module.exports = {createAuth,loginController};
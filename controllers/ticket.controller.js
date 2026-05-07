
const {seeTicketService,createTicketService} = require("../services/ticket.service")

const seeTicket = async (req,res) =>{
    try {
        const id = req.user.id
        const {page,limit}=req.query;
        const pageNumber = Number(page);
        const limitNumber = Number(limit)
        const informations = await seeTicketService({id,pageNumber,limitNumber})
        res.json(informations)
    } catch (error) {
        res.status(500).json("erreur avec le seeTicket")
    }
}

const createTicket = async (req,res)=>{
    try {
        const id = req.user.id;
        const {title,description,status} = req.body
        const informations = await createTicketService({id,title,description,status})
        res.json(informations) 
    } catch (error) {
        console.log(error)
        res.status(500).json("erreur dans le controller ou dans le service")
    }
}

module.exports ={seeTicket,createTicket};
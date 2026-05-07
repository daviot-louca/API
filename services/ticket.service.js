const Ticket = require("../models/ticket.model")
const User = require("../models/user.model")
const seeTicketService = async({id,pageNumber = 1 ,limitNumber=5}) =>{
    const limit = limitNumber
    const offset = ((pageNumber-1)*limitNumber)
    const data = await Ticket.findAll({
        where:{userId:id},
        limit,
        offset,
        include:User
    })
    return data
}

const createTicketService =async ({id,title,description,status}) =>{
    const envoie = await Ticket.create({
        userId:id,
        title,
        description,
        status
    });
    return envoie
}

module.exports = {seeTicketService,createTicketService};
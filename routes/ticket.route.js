const express = require('express');
const router = express.Router();
const {createTicket,seeTicket} = require("../controllers/ticket.controller")
const TicketMiddleware = require("../middlewares/ticket.middlewares")
const authJwt =require("../middlewares/JWT.middlewares")
router.get("/tickets",authJwt,seeTicket)
router.post("/tickets",authJwt,TicketMiddleware,createTicket)
module.exports = router;
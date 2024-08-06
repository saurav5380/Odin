const express = require('express');
const newRouter = express.Router();
const { messages } = require('./indexRouter')

newRouter.get("/", (req, res)=>{
    res.render("form")
})

newRouter.post("/", (req, res) =>{
    const messageUser = req.body.messageUser;
    const messageText = req.body.messageText;
    messages.push({text: messageText, user: messageUser, added: new Date()})
    res.redirect("/")
})

module.exports = newRouter;




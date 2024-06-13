const express = require('express');
const path = require('path');
const app = express();


app.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/about', (req,res) =>{
    res.sendFile(path.join(__dirname, 'about.html'))
})

app.get('/contact-me', (req,res) =>{
    res.sendFile(path.join(__dirname, 'contact-me.html'))
})


app.use((req,res) =>{
    res.status(404).send('<h1>404 - Page Not Found</h1>')
})

    
app.listen(8080, () =>{
    console.log("Server is running on port 8080")
});

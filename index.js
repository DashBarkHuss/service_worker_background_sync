const express = require('express');
// const database = require('./database');
const app = express();``


// database.create();
app.use(express.json());


app.use(express.static("./"))


// app.get('/hi/:name', (req, res) => {
//     const hi = `Hi ${req.params.name}`;
//     res.send(hi);
// });

// app.get('/hi', (req, res) => {
//     res.send('hi');
// });

app.post('/hi', (req,res)=>{
    console.log(23)
    res.send("stuff to send")
})

app.listen(3306, ()=>{console.log("listening")})

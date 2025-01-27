const express = require('express');
const app = express();
const PORT = 3000;

app.get('/signup', (req,res)=> {
    const {username,password,email,dob} = req.query;

    if(username){
        if(username === " "){
            return res.send("Username cannot be empty.");
        }
    }
    if(email){
        if(email === " "){
            return res.send("Email cannot be empty.");
        }
    }
    if(password){
        if(password.length < 8 || password.length > 16){
            return res.send("Password length should be greater than 8 or less than or equal to 16.");
        }
    }

})


app.listen(PORT, () => console.log(`server is started at port:${PORT}`));
const express = require('express')
const app = express();
const PORT = 3000
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Welcome to the Signup API. Use POST /signup to register.');
  });
  
app.post('/signup', (req,res) => {
    const{username, email, password, dob} = req.body

    if(!email || email.trim() === ""){
        return res.status(400).json({ error: "Email cannot be empty"})
    }
    if(!username || username.trim() === ""){
        return res.status(400).json({ error: "Username cannot be empty"})
    }
    if(!password || password.length < 8 || password.length > 16){
        return res.status(400).json({ error: "Password length should be greater than 8 or less than or equal to 16"})
    }
    if(!dob){
        return res.status(400).json({ error: "Date of birth is required"})
        
    }
    res.status(200).json({message: "Signup Successful"})
})
app.listen(PORT, ()=> console.log(`server is running on port${PORT}`))
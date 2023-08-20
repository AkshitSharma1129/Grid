const express = require("express")

const cors = require("cors")
require("dotenv").config()
const connectDB = require("./config/db")
const PORT = process.env.PORT || 6000;
const mongoose = require("mongoose");
const User = require('./models/User');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const app = express();
// middlewares
const dotenv = require('dotenv')
dotenv.config();
const salt = bcrypt.genSaltSync(10);
const secret = 'asdfe45we45w345wegw345werjktjwertkj';
app.use(cors({credentials:true,origin:'http://localhost:3000'}));
app.use(express.json());
app.use(cookieParser());
mongoose.connect(process.env.MONGO_URL);
app.use(express.urlencoded({extended: false}))
app.use(express.static("public"));
const path = require('path');
// connect to the mongodb database
/* connectDB() */

app.use('/api/items', require("./routes/items"))
app.use('/api/payment', cors(), require("./routes/payment"))
app.post('/register',async (req,res)=>{
    const {username,password,email} = req.body
    const findUser = await User.findOne({username} )
    if(!findUser){
      try{
        const userDoc = await User.create({username,password:bcrypt.hashSync(password,salt),email} )
        res.json(userDoc)
      }catch(e){
          res.status(400).json('Sorry, not able to register')
      }
    }
    else{
      res.status(404).json('User already exists') 
    }
  });
  app.post("/login",async (req,res) => {
    const {username,password} = req.body;
    const userDoc = await User.findOne({username});
    const passOk = bcrypt.compareSync(password, userDoc.password);
    // comparesync se we check password match
    if (passOk) {
       //login
       // add jswonwebtoken to store data
       jwt.sign({username,
                id:userDoc._id}, secret, {}, (err,token) => {
                    if (err) throw err;
                    // res.json(token);  token is displayed
                    res.cookie('token', token).json(
                        // 'ok'
                        {
                        id:userDoc._id,
                        username,  } 
                      );

                });
            }
            else {
                res.status(400).json('wrong credentials');
              }
        })
        app.get('/profile', (req,res) => {
            const {token} = req.cookies;
            jwt.verify(token, secret, {}, (err,info) => {
              if (err) throw err;
              res.json(info);
            });
          });
        
        app.post('/logout', (req,res) => {
          res.cookie('token', '').json('ok');
        });
app.listen(PORT, console.log("Server is running on port ", PORT))
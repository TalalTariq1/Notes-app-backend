require('dotenv').config()

const express=require ('express')
const app=express();
const PORT=3000;

app.use(express.static('public'))
const expressLayout=require('express-ejs-layouts');
const connectDB = require('./server/config/db');
app.use(expressLayout)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.set('layout','./layout/main')
app.set('view engine','ejs')

connectDB();

app.use('/',require('./server/routes/main'))

app.listen(PORT,()=>{
      console.log(`Server is running at http://localhost:${PORT}`);
})
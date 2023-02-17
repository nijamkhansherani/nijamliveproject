const express=require('express');
const { route } = require('./routers/userRoutes');
const { product }= require('./routers/projectrouter')
const app = express();
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;

app.use('/api/user',require('./routers/userRoutes'));
const ConnectDB = require('./config/db');
ConnectDB()


app.use('/api/project',require('./routers/projectrouter'));


app.listen(port,()=>{
    console.log(`port is colled ${port}`);
})

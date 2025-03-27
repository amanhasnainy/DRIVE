const { urlencoded } = require('express');
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const connectdb = require('./config/db')
connectdb();

const userRouter = require('./routes/user.routes');
const cookieParser = require('cookie-parser');
const indexrouter = require('./routes/index.routes');
const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended : true}));


app.set('view engine','ejs');

port = 3000;

app.use('/',indexrouter);
app.use('/user',userRouter);
app.listen(port, ()=>{
    console.log("Server is runing")
}); 
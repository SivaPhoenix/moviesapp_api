const express= require('express');
const dotenv= require('dotenv');

dotenv.config();
const app = express();
const PORT=6969


const movieRoutes =require('./routes/movie.route.js');
const connectDB = require('./lib/db.js');
//data understanding middleware

app.use(express.json())

app.use('/movie', movieRoutes)

connectDB()

app.get('/',(req,res)=>{
    res.json({msg:"Hello"})
})
app.listen(PORT, ()=>{
    console.log(`Server started on port http://localhost:${PORT}`);
})

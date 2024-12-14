const express= require('express');

const app = express();
const PORT=6969

const movieRoutes =require('./routes/movie.route.js')

app.use('/movie', movieRoutes)

app.get('/',(req,res)=>{
    res.json({msg:"Hello"})
})
app.listen(PORT, ()=>{
    console.log(`Server started on port http://localhost:${PORT}`);
})

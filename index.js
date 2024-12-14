const express= require('express');

const app = express();

app.get('/',(req, res)=>{
    res.json('Hello World!');
})

app.listen(6969, ()=>{
    console.log('Server started on port http://localhost:6969');
})
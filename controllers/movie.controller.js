const Movie = require('../models/movie.model.js')
const movieIndex=(req,res)=>{
    res.sent("Get all movies index");
}

const movieCreate=async (req,res)=>{
    // res.send("Create a new movie");
    console.log(req.body);
    const newMovie=new Movie({
        title:req.body.title,
        desc:req.body.desc
    })
    try{
        const movie=await newMovie.save()
        return res.status(201).json(movie)
    }
    catch(err){
        console.error(err.message);
        return res.status(500).json({message:err.message});
    }
}

const movieEdit=(req,res)=>{
    res.send("Edit a movie");
}

const movieDelete=(req,res)=>{
    res.send("Delete a movie");
}

module.exports = {
    movieIndex,
    movieCreate,
    movieEdit,
    movieDelete,
};

const Movie = require('../models/movie.model.js')
const movieIndex=async (req,res)=>{
    try{
        const movies=await Movie.find()
        res.json(movies)

    }
    catch(err){
        console.error(err.message);
        res.status(500).json({message:err.message});
    }
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

const movieEdit=async(req,res)=>{
    try{
        const updatedMovie=await Movie.findByIdAndUpdate(
            {_id:req.params.id},
            {
                title:req.body.title,
                desc:req.body.desc
            },
            {new:true}
        )
        res.status(200).json(updatedMovie);

    }
    catch(err){
        console.error(err.message);
        res.status(500).json({message:err.message});
    }
}

const movieDetails=async(req,res)=>{
    try{
        const movie=await Movie.findById(req.params.id)
        if(movie==null){
            return res.status(404).json({message: "Movie not found"})
        }
        res.json(movie)
    }
    catch(err){
        console.error(err.message);
        res.status(500).json({message:err.message});
    }
}
const movieDelete=async (req,res)=>{
    try{
        const removedMovie=await Movie.findByIdAndDelete(req.params.id)
        if(removedMovie==null){
            return res.status(404).json({message: "Movie not found"})
        }
        res.status(200).json(removedMovie)
    }
    catch(err){
        console.error(err.message);
        res.status(500).json({message:err.message});
    }
 
}

module.exports = {
    movieIndex,
    movieCreate,
    movieEdit,
    movieDetails,
    movieDelete,
};


const movieIndex=(req,res)=>{
    res.sent("Get all movies index");
}

const movieCreate=(req,res)=>{
    // res.send("Create a new movie");
    console.log(req.body);

    return res.json(req.body);
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

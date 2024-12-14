
const movieIndex=(req,res)=>{
    res.sent("Get all movies index");
}

const movieCreate=(req,res)=>{
    res.send("Create a new movie");
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

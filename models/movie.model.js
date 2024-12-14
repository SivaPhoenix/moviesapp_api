const {Schema,mongoose } =require('mongoose')

const movieSchema = new Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    desc:{
        type:String
    },
})

module.exports = mongoose.model('Movie', movieSchema)
const {Schema,mongoose } =require('mongoose')

const movieSchema = new Schema({
    title:String,
    desc:String,
})

module.exports = mongoose.model('Movie', movieSchema)
const express= require('express')
const { movieCreate, movieDelete, movieEdit, movieIndex, movieDetails } =require ("../controllers/movie.controller.js")

const router=express.Router()

// Importing routes

router.get('/',movieIndex)
router.post('/',movieCreate)
router.get('/:id',movieDetails)  // Added parameter to get specific movie by id
router.put('/:id',movieEdit)
router.delete('/:id',movieDelete)

// Exporting router

module.exports = router;

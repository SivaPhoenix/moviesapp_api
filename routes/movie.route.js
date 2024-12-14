const express= require('express')
const { movieCreate, movieDelete, movieEdit, movieIndex } =require ("../controllers/movie.controller.js")

const router=express.Router()

// Importing routes

router.get('/',movieIndex)
router.post('/',movieCreate)
router.put('/:id',movieEdit)
router.delete('/:id',movieDelete)

// Exporting router

module.exports = router;

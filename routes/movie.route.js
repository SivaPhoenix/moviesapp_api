const express= require('express')
const { movieCreate, movieDelete, movieEdit, movieIndex } =require ("../controllers/movie.controller.js")

const router=express.Router()

// Importing routes

router.get('/movies',movieIndex)
router.post('/movies',movieCreate)
router.put('/movies/:id',movieEdit)
router.delete('/movies/:id',movieDelete)

// Exporting router

module.exports = router;

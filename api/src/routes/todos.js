const express = require('express')
const router = express.Router()
const Todos = require('../database/models/Todos.js')


router.get('/', async (req, res, next) => {
    try {
        const todos = await Todos.find();
        res.json(todos);
    } catch (err) {
        next(err);
    }
});

router.post('/', async (req, res, next) => {
    try {
        const todos = await Todos.create(req.body);
        res.json(todos);
    } catch (err) {
        next(err);
    }
});

// router.get('/:id', async (req, res, next) => {
//     try {
//         const todo = await Todos.findById(req.params.id);
//         res.json(todo);
//     } catch (err) {
//         next(err);
//     }
// });

router.put('/:id', async (req, res, next) => {
    try {
        const todo = await Todos.findByIdAndUpdate(req.params.id, req.body);
        res.json(todo);
    } catch (err) {
        next(err);
    }
});

router.delete('/:id', async (req, res, next) => {
    try {
        const todo = await Todos.findByIdAndDelete(req.params.id);
        res.json(todo);
    } catch (err) {
        next(err);
    }
});


module.exports = router
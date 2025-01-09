import express from 'express';
import Todo from '../model/todo.model.js';

const router = express.Router();

//CURD operation

//createTodo
router.post('/', async (req, res) => {
    const {title, description} = req.body;
    try {
        const todo = new Todo(
            {
                title,
                description
            });
            if (!todo) {
                res.status(401).send('Todo are not found')
            }
            await todo.save();
            res.status(201).send({
                message: 'Todos are created successfully',
                data: todo
            })
    } catch (error) {
        res.status(500).send(message.error || 'Server Error')
    }
});

//getTodo
router.get('/:todoId', async (req, res) => {
    const {todoId} = req.params;
    try {
        const todo = await Todo.find(todoId);
        if (!todo) {
            res.status(401).send('Todo are not found')
            }
            res.status(200).send({
                message: 'Todo are found successfully',
                data: todo
            })
    } catch (error) {
        res.status(500).send(error.message)
    }
});


//updateTodo
router.put('/:userId', async (req, res) => {
    const {title, description} = req.body;
    const {userId} = req.params;
    try {
        const todo = await Todo.findByIdAndUpdate(userId,
            {
                title,
                description
            },{
                new: true
            });
            if (!todo) {
                res.status(401).send('Todo are not found')
                }
                res.status(200).send({
                    message: 'Todo are updated successfully',
                    data: todo
                })
    } catch (error) {
        res.status(500).send(error.message )
    }
});


//deleteTodo
router.delete('/:todoId', async (req, res) => {
    const {todoId} = req.params;
    try {
        const todo = await Todo.findByIdAndDelete(todoId);
        if (!todo) {
            return res.status(404).send('Todo are not found')
            }
            res.status(200).send({
                message: 'Todo are deleted successfully',
                data: todo
                })
    } catch (error) {
        res.status(500).send(error.message)
    }
});

export default router;
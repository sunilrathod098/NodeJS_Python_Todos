import express from 'express';
import Todo from '../model/todo.model.js';

const router = express.Router();

//CURD operation

//createTodo
router.post('/add', async (req, res) => {
    const {userId, title} = req.body;
    try {
        const todo = new Todo({userId, title});
        if (!todo) {
            res.status(401).send('Todo are not found')
        }
        await todo.save('Todos are created successfully');
    } catch (error) {
        res.status(500).send(message.error)
    }
});

//getTodo
router.get('/:userId', async (req, res) => {
    const {userId} = req.params;
    try {
        const todo = await Todo.find(userId);
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
router.put('/userId', async (req, res) => {
    const {userId, title} = req.body;
    try {
        const todo = await Todo.findByIdAndUpdate(userId, {title}, {new: true});
        if (!todo) {
            res.status(401).send('Todo are not found')
            }
            res.status(200).send({
                message: 'Todo are updated successfully',
                todo
            })
    } catch (error) {
        res.status(500).send(error.message )
    }
});


//deleteTodo
router.delete('/:userId', async (req, res) => {
    const {userId} = req.params;
    try {
        const todo = awaitTodo.findByIdAndDelete(userId);
        if (!todo) {
            res.status(401).send('Todo are not found')
            }
            res.status(200).send({
                message: 'Todo are deleted successfully',
                todo
                })
    } catch (error) {
        res.status(500).send(error.message)
    }
});

export default router;
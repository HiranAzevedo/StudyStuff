import { Router } from 'express';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import CreateUserService from '../services/CreateUserService';

const usersRouter = Router();

usersRouter.post('/', async (request, response) => {
    try {
        const { name, email, password } = request.body;

        const createUserService = new CreateUserService();

        const userCreated = await createUserService.execute({
            name,
            email,
            password,
        });

        delete userCreated.password;

        return response.status(201).json(userCreated);
    } catch (err) {
        return response.status(400).json({ error: err.message });
    }
});

usersRouter.patch('/avatar', ensureAuthenticated, async (request, response) => {
    return response.json({ ok: true });
});

export default usersRouter;

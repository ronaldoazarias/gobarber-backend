import { Router } from 'express';

import AuthenticationUserService from '@modules/users/services/AuthenticateUserService';

// DTO - Data Transfer Object - quando é passado informação de um arquivo para outro

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
        const { email, password } = request.body;

        const AuthenticateUser = new AuthenticationUserService();

        const { user, token } = await AuthenticateUser.execute({
            email,
            password
        });

        delete user.password;

        return response.send({ user, token });

});

export default sessionsRouter;
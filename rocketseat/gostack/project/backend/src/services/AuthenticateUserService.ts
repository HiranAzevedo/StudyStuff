import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import User from '../models/User';
import AuthConfig from '../config/auth';
import AppError from '../errors/AppError';

interface Request {
    email: string;
    password: string;
}

interface Response {
    user: User;
    token: string;
}

class AuthenticateUserService {
    public async execute({ email, password }: Request): Promise<Response> {
        const userRepository = getRepository(User);
        const user = await userRepository.findOne({ where: { email } });

        if (!user) {
            throw new AppError('Incorrect email/password combination', 401);
        }

        const passwordMatched = await compare(password, user.password);

        if (!passwordMatched) {
            throw new AppError('Incorrect email/password combination', 401);
        }

        const token = sign({}, AuthConfig.jwt.secret, {
            subject: user.id,
            expiresIn: AuthConfig.jwt.expiresIn,
        });

        return { user, token };
    }
}

export default AuthenticateUserService;

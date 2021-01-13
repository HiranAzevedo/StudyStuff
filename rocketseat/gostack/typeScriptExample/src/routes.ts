import { Request, Response } from 'express';
import CreateUser from './services/createUser';

export function helloWorld(request: Request, response: Response) {
    const user = CreateUser("Bla", "bla", "bla");
    
    return response.json({ message: "Hello World" });
}
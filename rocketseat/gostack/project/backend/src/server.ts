import express, { Request, Response, NextFunction } from 'express';
import routes from './routes';
import 'express-async-errors';
import 'reflect-metadata';
import './database';
import uploadConfig from './config/upload';
import AppError from './errors/AppError';

const app = express();
app.use(express.json());
app.use('/files', express.static(uploadConfig.directory));
app.use(routes);
app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
    if (err instanceof AppError) {
        response
            .status(err.statusCode)
            .json({ status: 'error', message: err.message });
    }

    return response.status(500).json({
        status: 'error',
        message: 'Internal Server Error',
    });
});

app.listen(3333, () => {
    console.log('🚀 Server running on 3333');
});

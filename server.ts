import app from './index'
import * as dotenv from 'dotenv'

dotenv.config()

const port: number = parseInt(process.env.PORT ?? '3000');

const server: any = app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})

process.on('unhandledRejection', (err: Error) =>  {
    console.log(err.name, err.message);
    console.log('Unhandled Rejection! Shuting down..');
    server.close(() =>  { process.exit(1); })
});

process.on('SIGTERM', () => {
    console.log('SIGTERM received, shutting down...');
    server.close(() => {
        console.log('Process terminated.')
    })
})
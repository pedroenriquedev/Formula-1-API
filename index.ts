// Import the express in typescript file
import express from 'express';
import { constructorRoute } from './routes/constructorRoute';
// Initialize the express engine
const app: express.Application = express();

app.use(express.json({
	limit: '50kb'
}))

const apiURL = process.env.API_URL || '/api/test';


app.use(`${apiURL}/constructor`, constructorRoute);


export default app;
// Import the express in typescript file
import express, { NextFunction, Request, Response } from 'express';
import routes from './routes/allRoutes'
import cors from 'cors';
import helmet from 'helmet'
import { protect, signUp } from './controllers/authController';
import ErrorHandler from './utils/errorHandler';
// Initialize the express engine
const app: express.Application = express();

app.use(express.json({
	limit: '50kb'
}))

app.use(helmet());
app.use(cors());

const apiURL = process.env.API_URL || '/api/test';

declare global {
	namespace Express {
		interface Request {
			user: {
				id: any,
				username: any,
				role: any,
				api_key: any,
				usage: any
			}
		}
	}
}

app.post(`${apiURL}/user`, signUp);

app.use(protect);
app.use(`${apiURL}/user`, routes.userRoute)
app.use(`${apiURL}/constructor`, routes.constructorRoute);
app.use(`${apiURL}/circuit`, routes.circuitRoute);
app.use(`${apiURL}/driver`, routes.driverRoute);
app.use(`${apiURL}/qualifying`, routes.qualifyingRoute);
app.use(`${apiURL}/raceresult`, routes.raceResultRoute);
app.use(`${apiURL}/race`, routes.raceRoute);
app.use(`${apiURL}/sprintresult`, routes.sprintResultRoute);

app.use(`${apiURL}/getdata`, async (req, res, next) => {
	res.status(200).json({
		message: 'data!'
	})
})


app.use(ErrorHandler);

export default app;
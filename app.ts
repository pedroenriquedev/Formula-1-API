// Import the express in typescript file
import express from 'express';
import routes from './routes/allRoutes'
// Initialize the express engine
const app: express.Application = express();

app.use(express.json({
	limit: '50kb'
}))

const apiURL = process.env.API_URL || '/api/test';


app.use(`${apiURL}/constructor`, routes.constructorRoute);
app.use(`${apiURL}/circuit`, routes.circuitRoute);
app.use(`${apiURL}/driver`, routes.driverRoute);
app.use(`${apiURL}/qualifying`, routes.qualifyingRoute);
app.use(`${apiURL}/raceresult`, routes.raceResultRoute);
app.use(`${apiURL}/race`, routes.raceRoute);
app.use(`${apiURL}/sprintresult`, routes.sprintResultRoute);

export default app;
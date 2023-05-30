// Import the express in typescript file
import express from 'express';

// Initialize the express engine
const app: express.Application = express();

// Handling '/' Request
app.get('/', (req, res) => {
	res.send("TypeScript With Express");
});


export default app;
import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import userRoutes from './routes/userRoutes';
import propertyRoutes from './routes/propertyRoutes';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/properties', propertyRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('PlotFlow API is running');
});

// health check
app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

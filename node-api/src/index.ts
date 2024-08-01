import express from 'express';
import llmRoutes from './routes/llm';

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use('/api/llm', llmRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

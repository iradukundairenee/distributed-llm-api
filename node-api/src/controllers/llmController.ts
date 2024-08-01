import { Request, Response } from 'express';
import { sendQueryToLLM, getHistory, getDetail } from '../services/llmService';

export const sendQuery = async (req: Request, res: Response) => {
  const { model, query } = req.body;
  try {
    console.log(`Received request: model=${model}, query=${query}`);
    const response = await sendQueryToLLM(model, query);
    console.log('Response from LLM service:', response);
    res.json({ response });
  } catch (error) {
    console.error('Error in sendQuery controller:', error);
    if (error instanceof Error) {
      res.status(500).json({ error: `An error occurred while processing the query: ${error.message}` });
    } else {
      res.status(500).json({ error: 'An unknown error occurred while processing the query' });
    }
  }
};


export const getConversationHistory = async (req: Request, res: Response) => {
  try {
    const history = await getHistory();
    res.json(history);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching conversation history' });
  }
};

export const getConversationDetail = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const detail = await getDetail(id);
    res.json(detail);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching conversation detail' });
  }
};

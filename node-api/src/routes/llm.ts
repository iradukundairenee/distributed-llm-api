import express from 'express';
import { sendQuery, getConversationHistory, getConversationDetail } from '../controllers/llmController';

const router = express.Router();

router.post('/query', sendQuery);
router.get('/history', getConversationHistory);
router.get('/conversation/:id', getConversationDetail);

export default router;

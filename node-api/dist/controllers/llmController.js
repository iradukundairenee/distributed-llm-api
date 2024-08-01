"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConversationDetail = exports.getConversationHistory = exports.sendQuery = void 0;
const llmService_1 = require("../services/llmService");
const sendQuery = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { model, query } = req.body;
    try {
        const response = yield (0, llmService_1.sendQueryToLLM)(model, query);
        res.json({ response });
    }
    catch (error) {
        res.status(500).json({ error: 'An error occurred while processing the query' });
    }
});
exports.sendQuery = sendQuery;
const getConversationHistory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const history = yield (0, llmService_1.getHistory)();
        res.json(history);
    }
    catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching conversation history' });
    }
});
exports.getConversationHistory = getConversationHistory;
const getConversationDetail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const detail = yield (0, llmService_1.getDetail)(id);
        res.json(detail);
    }
    catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching conversation detail' });
    }
});
exports.getConversationDetail = getConversationDetail;

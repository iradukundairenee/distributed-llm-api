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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDetail = exports.getHistory = exports.sendQueryToLLM = void 0;
const axios_1 = __importDefault(require("axios"));
const pythonServiceUrl = 'http://python-llm:5000';
const sendQueryToLLM = (model, query) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.default.post(`${pythonServiceUrl}/query`, { model, query });
    return response.data;
});
exports.sendQueryToLLM = sendQueryToLLM;
const getHistory = () => __awaiter(void 0, void 0, void 0, function* () {
    // For simplicity, we'll return a mock history
    return [
        { id: '1', date: new Date(), summary: 'Conversation about AI' },
        { id: '2', date: new Date(), summary: 'Conversation about ML' },
    ];
});
exports.getHistory = getHistory;
const getDetail = (id) => __awaiter(void 0, void 0, void 0, function* () {
    // For simplicity, we'll return mock conversation details
    return {
        id,
        questions: ['What is AI?', 'How does machine learning work?'],
        responses: ['AI is...', 'Machine learning works by...'],
    };
});
exports.getDetail = getDetail;

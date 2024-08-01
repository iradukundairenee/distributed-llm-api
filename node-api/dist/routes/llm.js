"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const llmController_1 = require("../controllers/llmController");
const router = express_1.default.Router();
router.post('/query', llmController_1.sendQuery);
router.get('/history', llmController_1.getConversationHistory);
router.get('/conversation/:id', llmController_1.getConversationDetail);
exports.default = router;

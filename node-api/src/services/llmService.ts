import axios from "axios";

const pythonServiceUrl = "http://localhost:5000";

export const sendQueryToLLM = async (model: string, query: string) => {
  try {
    console.log(`Sending request to Python service: ${model}, ${query}`);
    const response = await axios.post(`${pythonServiceUrl}/query`, {
      model,
      query,
    });
    console.log(`Received response from Python service:`, response.data);
    if (response.data.error) {
      throw new Error(response.data.error);
    }
    return response.data.response;
  } catch (error) {
    console.error("Error in sendQueryToLLM:", error);
    if (axios.isAxiosError(error)) {
      console.error("Axios error details:", error.response?.data);
      throw new Error(error.response?.data?.error || error.message);
    }
    throw error;
  }
};

export const getHistory = async () => {
  return [
    { id: "1", date: new Date(), summary: "Conversation about AI" },
    { id: "2", date: new Date(), summary: "Conversation about ML" },
  ];
};

export const getDetail = async (id: string) => {
  // For simplicity, we'll return mock conversation details
  return {
    id,
    questions: ["What is AI?", "How does machine learning work?"],
    responses: ["AI is...", "Machine learning works by..."],
  };
};

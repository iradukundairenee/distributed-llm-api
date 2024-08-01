# Distributed Large Language Model Project

This project consists of a Python program for running Llama2 and Mistral models, and a Node.js API server for interacting with the models.

## Prerequisites

- Docker
- Docker Compose

## Running the Project

1. Clone this repository
2. Navigate to the project root directory
3. Run the following command:
4. The Python LLM service will be available at `http://localhost:5000`
5. The Node.js API server will be available at `http://localhost:3000`

## API Endpoints

- POST /api/llm/query
  - Send a query to the LLM
  - Body: { "model": "llama2" or "mistral", "query": "Your question here" }

- GET /api/llm/history
  - Get conversation history

- GET /api/llm/conversation/:id
  - Get details of a specific conversation

## Postman Collection

You can import the following Postman collection to test the API endpoints:

```json
{
  "info": {
    "name": "LLM API",
    "_postman_id": "llm-api-collection",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
  },
  "item": [
    {
      "name": "Send Query",
      "request": {
        "method": "POST",
        "header": [
          {
            "key": "Content-Type",
            "value": "application/json"
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "{\n\t\"model\": \"llama2\",\n\t\"query\": \"What is artificial intelligence?\"\n}"
        },
        "url": {
          "raw": "http://localhost:3000/api/llm/query",
          "protocol": "http",
          "host": ["localhost"],
          "port": "3000",
          "path": ["api", "llm", "query"]
        }
      }
    },
    {
      "name": "Get Conversation History",
      "request": {
        "method": "GET",
        "url": {
          "raw": "http://localhost:3000/api/llm/history",
          "protocol": "http",
          "host": ["localhost"],
          "port": "3000",
          "path": ["api", "llm", "history"]
        }
      }
    },
    {
      "name": "Get Conversation Detail",
      "request": {
        "method": "GET",
        "url": {
          "raw": "http://localhost:3000/api/llm/conversation/1",
          "protocol": "http",
          "host": ["localhost"],
          "port": "3000",
          "path": ["api", "llm", "conversation", "1"]
        }
      }
    }
  ]
}



from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # This will enable CORS for all routes

class MockLLMChat:
    def __init__(self):
        self.conversation_history = []

    def generate_response(self, query):
        response = f"This is a mock response to: {query}"
        self.conversation_history.append(f"Human: {query}")
        self.conversation_history.append(f"AI: {response}")
        return response

chat = MockLLMChat()

@app.route('/query', methods=['POST'])
def query():
    print("Received a request")
    data = request.json
    print(f"Request data: {data}")
    if not data or 'query' not in data:
        return jsonify({'error': 'Invalid request. "query" is required.'}), 400
    
    query = data.get('query')
    model = data.get('model', 'default_model')
    print(f"Query: {query}, Model: {model}")
    try:
        response = chat.generate_response(query)
        print(f"Response: {response}")
        return jsonify({'response': response})
    except Exception as e:
        print(f"Error occurred: {str(e)}")
        return jsonify({'error': str(e)}), 500

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000, debug=True)
    
# TextBaby Chatbot

TextBaby is a chatbot project that simulates conversation with a baby. The chatbot is built using React for the front end and Node.js for the back end.

## Features

- Engaging conversation with a baby-like chatbot.
- User-friendly interface built with React.
- Real-time communication powered by Node.js.

## Getting Started

### Prerequisites

- Node.js and npm must be installed on your machine.
- Git (optional, but recommended) for cloning the repository.

### Installation

1. Clone the repository: `git clone https://github.com/SamuelEMason/TextBaby.git`
2. Navigate to the backend directory: `cd server`
3. Install dependencies:
   ```bash
   npm install
4. Navigate to the frontend directory: `cd client`
3. Install dependencies:
   ```bash
   npm install

### Usage
1. Start the Node.js server within the /server directory: 
npm run server

2. Start the React front end within the /client directory:
npm run dev

3. Access the application in your web browser by pressing 'o' after
step 2 is complete

## Integration with OpenAI ChatGPT

TextBaby utilizes the OpenAI ChatGPT API (specifically the text-davinci-003 model) for generating text responses. This integration allows the chatbot to simulate conversations with a baby-like language. To set up this integration, follow these steps:

### OpenAI API Key

1. Visit the [OpenAI website](https://beta.openai.com/signup/) to sign up for an account or log in.
2. Once logged in, navigate to the API section and create a new API key.
3. Copy the API key, as you'll need it in the next steps.

### Configuration

1. In the `server` directory of the project, create a `.env` file.
2. Add your OpenAI API key to the `.env` file:
OPENAI_API_KEY=your-api-key-here
3. Make sure to add the `.env` file to your `.gitignore` to keep your API key secure.

### Contributing
Contributions are welcome! Please fork the repository and submit a pull request with your enhancements.

### License
This project is licensed under the MIT License.

### Acknowledgements
- This project was inspired by Carolyn and Colleen.
Special thanks to [acknowledge contributors or resources that helped you].
- Powered by the [OpenAI ChatGPT API](https://openai.com/).
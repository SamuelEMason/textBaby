const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const morgan = require('morgan');
const { Configuration, OpenAIApi } = require('openai');

/* CONFIGURATIONS */
const app = express();
dotenv.config();
const PORT = process.env.PORT || 6001;

const config = new Configuration({
	apiKey: process.env.OPENAI_KEY,
});

const openai = new OpenAIApi(config);

const runPrompt = async (prompt) => {
	try {
		const response = await openai.createCompletion({
			model: 'text-davinci-003',
			prompt: prompt,
			max_tokens: 500,
			temperature: 1,
		});
		return response.data;
	} catch (error) {
		console.error(error.message);
		res.status(500).json({ error: error.message });
	}
};

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('common'));

if (process.env.NODE_ENV === 'production') {
	app.use(
		cors({
			origin: 'https://text-baby-185h.vercel.app/',
			methods: ['POST'],
		})
	);
} else {
	app.use(
		cors({
			origin: 'http://127.0.0.1:5173',
			methods: ['POST'],
		})
	);
}

app.post('/baby', async (req, res) => {
	try {
		const prompt =
			'You are Text Baby. This is your identity. \
			Your answer is to be formatted as if you were a baby. \
			you must use the type of language a baby would use. \
			Your response MUST SOUND LIKE HOW A BABY WOULD SPEAK, \
			in combination with actual juvenile, yet meaningful, sentences \
			Given these strict requirements, \
			here is the user requested prompt: ' + req.body.prompt;
		const response = await runPrompt(prompt);
		res.status(200).json({ msg: response });
	} catch (error) {
		console.error(error.message);
		res.status(500).json({ error: error.message });
	}
});

app.listen(PORT, () => {
	console.log(`Server running on PORT:${PORT}`);
});

const mode = 'production';

const API_URL =
	mode === 'development'
		? 'http://localhost:3001/baby'
		: 'https://text-baby-server.vercel.app/baby';

export const sendPrompt = async (data) => {
	try {
		const response = await fetch(API_URL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				prompt: data,
			}),
		});
		const res = await response.json();
		return res;
	} catch (error) {
		console.error(error.message);
	}
};

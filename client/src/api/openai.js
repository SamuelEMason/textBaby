export const sendPrompt = async (data) => {
	try {
		const response = await fetch('http://localhost:3001/baby', {
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
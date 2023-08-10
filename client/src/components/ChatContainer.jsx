import { useState } from 'react';
import PropTypes from 'prop-types';
import MessageInput from './MessageInput';
import MessageList from './MessageList';
import { sendPrompt } from '../api/openai';

const ChatContainer = ({ sender }) => {
	ChatContainer.propTypes = {
		sender: PropTypes.string,
	};

	const [inputMessage, setInputMessage] = useState('');
	const [messages, setMessages] = useState([]);

	const submitHandler = async (e) => {
		e.preventDefault();
		if (inputMessage === undefined || inputMessage.trim() === '') {
			setInputMessage('');
			return;
		}

		const userMessage = {
			message: inputMessage,
			sender: 'user',
		};

		let newMessages = [...messages, userMessage];
		setMessages(newMessages);
		setInputMessage('');

		const response = await sendPrompt(inputMessage);

		const babyMessage = {
			message: response.msg.choices[0].text ?? 'hello',
			sender: 'baby',
		};

		setTimeout(() => {
			let newMessages = [
				...messages,
				userMessage,
				{
					message: '...',
					sender: 'baby',
				},
			];
			setMessages(newMessages);

			// Nested Timeout renders baby response after
			setTimeout(() => {
				newMessages = [...messages, userMessage, babyMessage];
				setMessages(newMessages);
			}, Math.random() * 200 * babyMessage.message.length);
		}, Math.random() * 100 * userMessage.message.length);
	};

	return (
		<div className="chat-container">
			<MessageList messages={messages} />
			<MessageInput
				sender={sender}
				inputMessage={inputMessage}
				setInputMessage={setInputMessage}
				submitHandler={submitHandler}
			/>
		</div>
	);
};

export default ChatContainer;

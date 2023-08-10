import { useEffect, useRef } from 'react';

import PropTypes from 'prop-types';
import Message from './Message';

const MessageList = ({ messages }) => {
	MessageList.propTypes = {
		messages: PropTypes.array,
	};

	const messagesEndRef = useRef(null);

	useEffect(() => {
		window.requestAnimationFrame(() =>
			messagesEndRef.current?.scrollIntoView({
				behavior: 'smooth',
			})
		);
	}, [messages]);

	return (
		<div id="message-list" className="message-list">
			{messages.map((message, index) => {
				return (
					<Message
						key={index}
						message={message.message}
						sender={message.sender}
					/>
				);
			})}
			<div ref={messagesEndRef} />
		</div>
	);
};

export default MessageList;

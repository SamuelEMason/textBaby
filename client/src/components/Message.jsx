import PropTypes from 'prop-types';
import { AiOutlineUser } from 'react-icons/ai';
import { PiBaby } from 'react-icons/pi';

const Message = ({ message, sender }) => {
	Message.propTypes = {
		message: PropTypes.string,
		sender: PropTypes.string,
	};

	const formatMessage = (message) => {
		const messageSegments = message.split(/\n|\r/);
		const formattedMessage = messageSegments.map((segment, i) => (
			<p key={i}>{segment.trim()}</p>
		));
		return formattedMessage;
	};

	return (
		<div className="message-row">
			<div className="icon">
				{sender === 'baby' ? <PiBaby /> : <AiOutlineUser />}
			</div>
			<div className={`message ${sender}-message`}>
				{formatMessage(message)}
			</div>
		</div>
	);
};

export default Message;

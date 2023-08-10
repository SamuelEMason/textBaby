import PropTypes from 'prop-types';
import { GiBabyBottle } from 'react-icons/gi';

const MessageInput = ({
	inputMessage,
	setInputMessage,
	submitHandler,
}) => {
	MessageInput.propTypes = {
		sender: PropTypes.string,
		inputMessage: PropTypes.string,
		setInputMessage: PropTypes.func,
		submitHandler: PropTypes.func,
	};

	const enterKeyHandler = async (e) => {
		if (e.key === 'Enter' && e.shiftKey) {
			return;
		}

		if (e.key === 'Enter') {
			await submitHandler(e);
		}
	};

	return (
		<div className="message-input">
			<textarea
				value={inputMessage}
				placeholder="Write a message..."
				onChange={(e) => setInputMessage(e.target.value)}
				onKeyDown={enterKeyHandler}
			></textarea>
			<button className="btn-submit" onClick={submitHandler}>
				<GiBabyBottle />
			</button>
		</div>
	);
};

export default MessageInput;

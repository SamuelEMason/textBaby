import ChatContainer from './components/ChatContainer';
import Navbar from './components/Navbar';

const App = () => {
	return (
		<>
			<Navbar />
			<main>
				<div className="main-container">
					<ChatContainer />
				</div>
			</main>
		</>
	);
};

export default App;

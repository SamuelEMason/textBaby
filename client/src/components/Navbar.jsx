import { AiOutlineUser } from 'react-icons/ai';

const Navbar = () => {

	return (
		<header className="main-header">
			<nav>
				{/* <span>👶</span> */}
				<button className="placeholder"></button>
				<span className="logo">textbaby.</span>
				<button
					className="btn-sender"
				>
					<AiOutlineUser />
				</button>
			</nav>
		</header>
	);
};

export default Navbar;

const key = process.env.REACT_APP_MY_KEY;
const port = process.env.REACT_APP_MY_SECOND_KEY;
const pass = process.env.REACT_APP_MY_PASS;
const Header = () => {
	return (
		<>
			<p>
				I am using my key {key} on port {port}
			</p>
			<p>My password is {pass}</p>
		</>
	);
};

export default Header;

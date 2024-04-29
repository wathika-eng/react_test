const key = process.env.REACT_APP_MY_KEY;
console.log(process.env);
const Header = () => {
	return (
		<>
			<p>I am using {key}</p>
		</>
	);
};

export default Header;

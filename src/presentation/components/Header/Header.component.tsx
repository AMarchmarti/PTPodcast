import { Link, useNavigation } from "react-router-dom";

const Header = () => {
	const navigation = useNavigation();
	const color =
		navigation.state === "loading"
			? "bg-cyan-600  animate-pulse"
			: "bg-green-600";
	return (
		<header className="border-bottom shadow-sm flex justify-between w-full p-4 items-center fixed z-10 bg-white top-0">
			<Link
				to="/"
				className="text-cyan-700 text-xl font-bold items-center"
			>
				Podcaster
			</Link>

			<div className={`${color} rounded-full w-8 h-8`}></div>
		</header>
	);
};

export default Header;

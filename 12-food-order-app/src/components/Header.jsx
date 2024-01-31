import { useContext } from "react";
import logoImg from "../assets/logo.jpg";
import Button from "../UI/Button";
import CartContext from "../context/CartContext";

function Header() {
	const cartCtx = useContext(CartContext);
	const totalCartItems = cartCtx.items.reduce((totalItems, item) => {
		return totalItems + item.quantity;
	}, 0);

	return (
		<header id="main-header">
			<div id="title">
				<img src={logoImg} alt="food logo" />
				<h1>FoodOrder</h1>
			</div>
			<nav>
				<Button textOnly>Cart ({totalCartItems})</Button>
			</nav>
		</header>
	);
}

export default Header;

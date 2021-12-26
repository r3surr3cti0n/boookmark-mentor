import { React, useState, useRef } from "react";
import "./Nav.css";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import logo from "../../images/logo-bookmark.svg";
import whiteLogo from "../../images/logo-bookmark-white.png";
import burger from "../../images/icon-hamburger.svg";
import iconClose from "../../images/icon-close.svg";

const Nav = () => {
	const [showMenu, setShowMenu] = useState(false);

	const toggleMenu = () => {
		setShowMenu(!showMenu);
	};

	return (
		<nav
			id="nav"
			className="flex"
			style={
				showMenu
					? { position: "absolute", zIndex: 100 }
					: { position: "relative" }
			}
		>
			<img
				id="logo"
				src={showMenu ? whiteLogo : logo}
				alt="Bookmark Brand Logo"
			/>
			<img
				onClick={toggleMenu}
				src={showMenu ? iconClose : burger}
				id="burger"
				alt="menu"
			/>
			<ul className={showMenu ? "nav-links menu-open" : "nav-links"}>
				<li>
					<a href="#features">Features</a>
				</li>
				<li>
					<a href="#pricing">Pricing</a>
				</li>
				<li>
					<a href="#contact">Contact</a>
				</li>
				<li>
					<a id="login-anchor" href="#login">
						Login
					</a>
				</li>
				<ul className="social-links flex">
					<li>
						<a href="#facebook">
							<FaFacebook />
						</a>
					</li>
					<li>
						<a href="#twitter">
							<FaTwitter />
						</a>
					</li>
				</ul>
			</ul>
		</nav>
	);
};

export default Nav;

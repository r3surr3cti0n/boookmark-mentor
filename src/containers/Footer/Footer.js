import React from "react";
import "./Footer.css";
import logo from "../../images/logo-bookmark-white.png";
import { FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
	return (
		<footer id="footer" className="flex">
			<div id="footer-content" className="flex">
				<div className="flex">
					<img
						className="logo"
						src={logo}
						alt="Bookmark Brand Logo"
					/>
					<ul className="flex">
						<li>
							<a href="#features">Features</a>
						</li>
						<li>
							<a href="#pricing">Pricing</a>
						</li>
						<li>
							<a href="#contact">Contact</a>
						</li>
					</ul>
				</div>
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
			</div>
		</footer>
	);
};

export default Footer;

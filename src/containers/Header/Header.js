import React from "react";
import "./Header.css";
import headerImg from "../../images/illustration-hero.svg";

const Header = () => {
	return (
		<header id="header" className="flex">
			<div id="header-text">
				<h1 className="title"> A Simple Bookmark Manager</h1>
				<p className="desc">
					A clean and simple interface to organize your favourite
					websites. Open a new browser tab and see your sites load
					instantly. Try it for free.
				</p>
				<div className="flex">
					<a href="#chrome" className="anchor bg-blue">
						Get it on Chrome
					</a>
					<a href="#firefox" className="anchor bg-white">
						Get it on Firefox
					</a>
				</div>
			</div>
			<div id="header-img">
				<img src={headerImg} alt="Bookmark Manager" />
			</div>
		</header>
	);
};

export default Header;

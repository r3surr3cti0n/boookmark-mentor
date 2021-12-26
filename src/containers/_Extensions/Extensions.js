import React from "react";
import chrome from "../../images/logo-chrome.svg";
import firefox from "../../images/logo-firefox.svg";
import opera from "../../images/logo-opera.svg";
import "./Extensions.css";

const Extensions = () => {
	return (
		<div id="extensions" className="flex">
			<div className="text-container">
				<h1 className="sub-title"> Download the extension</h1>
				<p className="desc">
					We've got more browsers in the pipeline. Please do let us
					know if you've got a favourite you'd like us to prioritize.
				</p>
			</div>

			<div className="extension-items flex">
				<div className="extension-item flex">
					<img src={chrome} alt="" />
					<div>
						<h3>Add to Chrome</h3>
						<p className="desc">Minimum version 62</p>
					</div>
					<a href="chrome" className="anchor bg-blue">
						Add & Install Extension
					</a>
				</div>
				<div className="extension-item flex">
					<img src={firefox} alt="" />
					<div>
						<h3>Add to Firefox</h3>
						<p className="desc">Minimum version 55</p>
					</div>
					<a href="firefox" className="anchor bg-blue">
						Add & Install Extension
					</a>
				</div>
				<div className="extension-item flex">
					<img src={opera} alt="" />
					<div>
						<h3>Add to Opera</h3>
						<p className="desc">Minimum version 46</p>
					</div>
					<a href="opera" className="anchor bg-blue">
						Add & Install Extension
					</a>
				</div>
			</div>
		</div>
	);
};

export default Extensions;

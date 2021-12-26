import { React, useState, useRef } from "react";
import "./Contact.css";

const Contact = () => {
	const emailInputRef = useRef();
	const [email, setEmail] = useState();

	const emailCheck = (e) => {
		e.preventDefault();
		const regexp = new RegExp(/([A-Z\s])/g);
		console.log(regexp);
	};

	return (
		<div id="contact" className="flex">
			<div className="flex contact-text">
				<div className="contact-sub-title">35,000+ already joined</div>
				<div className="contact-title">
					Stay up-to-date with what we're doing
				</div>
				<form
					onSubmit={(e) => emailCheck(e)}
					id="contact-input-box"
					className="flex"
				>
					<input
						ref={emailInputRef}
						id="contact-input"
						type="email"
						placeholder="Enter you email address"
						required
					/>
					<button
						type="submit"
						href="#contact"
						className="contact-btn anchor bg-red"
					>
						Contact Us
					</button>
				</form>
			</div>
		</div>
	);
};

export default Contact;

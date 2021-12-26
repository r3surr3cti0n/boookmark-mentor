import { React, useState } from "react";
import arrowDown from "../../images/icon-arrow.svg";

const faq = [
	{
		id: 1,
		title: "What is Bookmark?",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
	},
	{
		id: 2,
		title: "How can I request a new browser?",
		desc: "Vivamus luctus eros aliquet convallis Maurisaugue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
	},
	{
		id: 3,
		title: "Is there a mobile app?",
		desc: "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.",
	},
	{
		id: 4,
		title: "What about other Chromium browsers?",
		desc: "Integer condimentum ipsum id imperdiet finibus. Vivamus inplacerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.",
	},
];

const Questions = () => {
	const [answerId, setAnswerId] = useState();

	return (
		<div id="questions" className="text-container">
			{faq.map((item) => {
				return (
					<div
						onClick={() => setAnswerId(item.id)}
						key={item.id}
						className={
							item.id === answerId
								? "question-item question-active"
								: "question-item"
						}
					>
						<div className="question flex">
							<h3 className="question-text">{item.title}</h3>
							<img
								className={
									item.id === answerId ? "arrow-active" : ""
								}
								src={arrowDown}
								alt="An arrow pointing down"
							/>
						</div>
						<p className="answer desc">{item.desc}</p>
					</div>
				);
			})}
		</div>
	);
};

export default Questions;

import "./Faq.css";
import Questions from "./Questions";

const Faq = () => {

	return (
		<div id="faq" className="flex">
			<div className="text-container">
				<h1 className="sub-title"> Frequently Asked Questions</h1>
				<p className="desc">
					Here are some of our FAQs. If you have any other questions
					you'd like answered please feel free to email us.
				</p>
			</div>
			<Questions />
			<a href="#more-info" className="anchor bg-blue">
				More Info
			</a>
		</div>
	);
};

export default Faq;

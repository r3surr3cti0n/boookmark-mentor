import React from "react";
import img1 from "../../images/illustration-features-tab-1.svg";
import img2 from "../../images/illustration-features-tab-2.svg";
import img3 from "../../images/illustration-features-tab-3.svg";

const Features = [
	{
		img: img1,
		title: "Bookmark in one click",
		desc: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
		link: {
			title: "More Info",
			href: "#feature1",
		},
	},
	{
		img: img2,
		title: "Intelligent search",
		desc: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
		link: {
			title: "More Info",
			href: "#feature2",
		},
	},
	{
		img: img3,
		title: "Share your bookmarks",
		desc: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
		link: {
			title: "More Info",
			href: "#feature3",
		},
	},
];

const SelectFeature = (props) => {
	const selectedFeature = Features[props.featureId - 1];
	return (
		<div className="feature-item flex">
			<div className="feature-item-img">
				<img src={selectedFeature.img} alt="Fancy Feature" />
			</div>

			<div className="feature-item-text">
				<h1 className="sub-title">{selectedFeature.title}</h1>
				<p className="desc">{selectedFeature.desc}</p>
				<a className="anchor bg-blue" href={selectedFeature.link.href}>
					{selectedFeature.link.title}
				</a>
			</div>
		</div>
	);
};

export default SelectFeature;

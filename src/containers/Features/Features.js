import { React, useState } from "react";
import "./Features.css";
import SelectFeature from "./SelectFeature";

const Features = () => {
	const [selectedFeature, setSelectedFeature] = useState(1);

	const selectFeature = (e, featureId) => {
		e.target.classList.add("selected-feature");
		setSelectedFeature(featureId);
	};

	return (
		<div id="features" className="flex">
			<div className="text-container">
				<h1 className="sub-title">Features</h1>
				<p className="desc">
					Our aim is to make it quick and easy for you to access your
					favourite websites. Your bookmarks sync between your devices
					so you can access them on the go.
				</p>
			</div>
			<div className="feature-names flex">
				<button
					onClick={(e) => selectFeature(e, 1)}
					className={
						selectedFeature === 1
							? "feature-name selected-feature"
							: "feature-name"
					}
				>
					Simple Bookmarking
				</button>
				<button
					onClick={(e) => selectFeature(e, 2)}
					className={
						selectedFeature === 2
							? "feature-name selected-feature"
							: "feature-name"
					}
				>
					Speedy Searching
				</button>
				<button
					onClick={(e) => selectFeature(e, 3)}
					className={
						selectedFeature === 3
							? "feature-name selected-feature"
							: "feature-name"
					}
				>
					Easy Sharing
				</button>
			</div>
			<SelectFeature featureId={selectedFeature} />
		</div>
	);
};

export default Features;

import React from "react";
import {
	Nav,
	Header,
	Features,
	Extensions,
	Faq,
	Contact,
	Footer,
} from "./containers/Index.js";
import "./App.css";

function App() {
	return (
		<React.Fragment>
			<Nav />
			<Header />
			<Features />
			<Extensions />
			<Faq />
			<Contact />
			<Footer />
		</React.Fragment>
	);
}

export default App;

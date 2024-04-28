import React from "react";
import "./Home.css";

function Home({ onIncrement, onDecrement, counter }) {
	return (
		<div className="container">
			<button className="button" onClick={onIncrement}>
				+
			</button>
			<div className="counter">{counter}</div>
			<button className="button decrement-button" onClick={onDecrement}>
				-
			</button>
		</div>
	);
}

export default Home;

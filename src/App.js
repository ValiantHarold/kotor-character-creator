import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import items from "./items.json";
import Items from "./components/Items/Items";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Nav />
				<Switch>
					<Route path="/home">
						<Home />
					</Route>
					<Route path="/create">
						<Items items={items} />
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;

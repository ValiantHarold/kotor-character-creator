import React from "react";
import { Link } from "react-router-dom";

import "./Nav.css";

const Nav = (props) => {
	return (
		<nav className="primary-nav">
			<h1 className="primary-nav__logo">KOTOR Character Creator</h1>
			<ul className="primary-nav__ul">
				<li className="primary-nav__li">
					<Link className="primary-nav__a" to="/home">
						Home
					</Link>
				</li>
				<li className="primary-nav__li">
					<Link className="primary-nav__a" to="/create">
						Create
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;

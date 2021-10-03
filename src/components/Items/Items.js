import React from "react";

import "./Items.css";

import img from "../../images/Lightsaber, Blue.png";

const Items = (props) => {
	return (
		<div className="item-card">
			<img src={img}></img>
			<p>
				{props.items.items.organic.weapon.lightsaber.lightsabers[0].name}
			</p>
		</div>
	);
};

export default Items;

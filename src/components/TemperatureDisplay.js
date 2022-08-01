import React, { useState } from "react";
import classes from "./TemperatureDisplay.module.css";

const TemperatureDisplay = (props) => {
	const temp = `${props.temperature}°C`;

	return (
		<div
			className={`${classes["temp-display"]} ${
				classes[props.temperatureColor]
			}`}
		>
			<span className={classes["temp-display-reading"]}>{temp}</span>
		</div>
	);
};

export default TemperatureDisplay;

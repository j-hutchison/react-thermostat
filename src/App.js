import React, { useState } from "react";
import "./App.css";

import Card from "./components/Card";
import TemperatureDisplay from "./components/TemperatureDisplay";
import Button from "./ui/Button";

function App() {
	const [temperature, setTemperature] = useState(0);
	const [temperatureColor, setTemperatureColor] = useState("blue");

	const MAX_TEMP = 30;
	const MIN_TEMP = -10;

	const handleTemperatureIncrease = () => {
		setTemperature((temperature) => {
			if (temperature === MAX_TEMP) return temperature;

			const newTemp = temperature + 1;
			handleDisplayColorChange(newTemp);
			return newTemp;
		});
	};

	const handleTemperatureDecrease = () => {
		setTemperature((temperature) => {
			if (temperature === MIN_TEMP) return temperature;
			const newTemp = temperature - 1;
			handleDisplayColorChange(newTemp);
			return newTemp;
		});
	};

	const handleDisplayColorChange = (temp) => {
		setTemperatureColor(() => {
			if (temp < 10) {
				return "blue";
			} else if (temp >= 10 && temp < 20) {
				return "green";
			} else if (temp >= 20 && temp < 30) {
				return "amber";
			} else if (temp >= 30) {
				return "red";
			}
		});
	};

	return (
		<div className="App">
			<Card>
				<TemperatureDisplay
					temperature={temperature}
					temperatureColor={temperatureColor}
				></TemperatureDisplay>

				<div className="btn-panel">
					<Button label="+" onClick={handleTemperatureIncrease}></Button>
					<Button label="-" onClick={handleTemperatureDecrease}></Button>
				</div>
			</Card>
		</div>
	);
}

export default App;

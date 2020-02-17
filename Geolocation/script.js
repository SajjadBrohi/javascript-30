const COMPASS = document.querySelector(".arrow");
const SPEED = document.querySelector(".speed-value");

navigator.geolocation.watchPosition(
	(data) => {
		SPEED.textContent = data.coords.speed;
		COMPASS.style.transform = `rotate(${data.coords.heading}deg)`;
	},
	() => {
		alert(
			"You have to allow access to the devices' location for this to work!"
		);
	}
);

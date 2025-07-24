
async function getWeather() {
    const city = document.getElementById("cityInput").value;
    if (!city) return alert("Please enter a city name");

    const apiKey = "f158e5031f3ef4939db3b619665bb2ad"; // Replace with your actual weather API key
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        document.getElementById("location").textContent = data.location.name + ", " + data.location.country;
        document.getElementById("localTime").textContent = "Local time: " + data.location.localtime;
        document.getElementById("temperature").textContent = `${data.current.temp_c}°C (${data.current.temp_f}°F)`;
        document.getElementById("description").textContent = data.current.condition.text;
        document.getElementById("visibility").textContent = data.current.vis_km + " km";
        document.getElementById("humidity").textContent = data.current.humidity + "%";
        document.getElementById("wind").textContent = data.current.wind_kph + " km/h";
        document.getElementById("pressure").textContent = data.current.pressure_mb + " mb";

        document.getElementById("weatherResult").classList.remove("hidden");
    } catch (error) {
        alert("Error fetching weather data. Please try again.");
        console.error(error);
    }
}

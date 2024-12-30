const apiKey = ''//sorry my account didn't work to get the key :)
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather'

document.getElementById('getWeatherBtn').addEventListener('click', async () => {
    const city = document.getElementById('cityInput').value.trim()
    if (!city) {
        alert('Please enter a city name.')
        return
    }

    try {
        const response = await fetch(`${apiUrl}?q=${city}&appid=${apiKey}&units=metric`)
        if (!response.ok) throw new Error('City not found')
        const weatherData = await response.json()

        document.querySelector('.temperature').textContent = `Temperature: ${weatherData.main.temp}°C`
        document.querySelector('.description').textContent = `Description: ${weatherData.weather[0].description}`
        document.querySelector('.location').textContent = `Location: ${weatherData.name}, ${weatherData.sys.country}`
    } catch (error) {
        alert(`Error: ${error.message}`)
    }
})

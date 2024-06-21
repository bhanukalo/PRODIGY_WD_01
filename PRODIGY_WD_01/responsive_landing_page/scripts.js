// Navigation toggle functionality (optional)
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

if (navToggle) { // Check if toggle button exists
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
}

// Placeholder AI features (replace with actual integrations):

// 1. Personalized recommendations based on user preferences (via form or cookies)
function recommendServices(preferences) {
  const services = [
    { name: "Spa Treatments", description: "Rejuvenate with ancient healing techniques." },
    { name: "Guided Tours", description: "Explore hidden ruins and uncover historical secrets." },
    { name: "Meditation Classes", description: "Find inner peace in a tranquil setting." },
  ];

  let recommended = [];
  if (preferences.includes("relaxation")) {
    recommended.push(services[0]);
  }
  if (preferences.includes("history")) {
    recommended.push(services[1]);
  }
  if (preferences.includes("mindfulness")) {
    recommended.push(services[2]);
  }

  if (recommended.length > 0) {
    alert("We recommend these services based on your preferences:\n" +
      recommended.map(service => `- ${service.name}: ${service.description}`).join("\n"));
  } else {
    alert("We couldn't find specific recommendations, but we have a variety of services to offer!");
  }
}

// 2. Preference form for recommendations
const preferenceForm = document.createElement('form');
preferenceForm.id = 'preferences';
preferenceForm.innerHTML = `
  <h2>What are you looking for in your stay?</h2>
  <label for="relaxation">Relaxation</label>
  <input type="checkbox" id="relaxation" name="preferences">
  <label for="history">Exploration of history</label>
  <input type="checkbox" id="history" name="preferences">
  <label for="mindfulness">Mindfulness and wellness</label>
  <input type="checkbox" id="mindfulness" name="preferences">
  <button type="button" onclick="submitPreferences()">Submit Preferences</button>
`;
document.body.insertBefore(preferenceForm, document.getElementById('services'));

function submitPreferences() {
  const preferences = [];
  const checkboxes = document.querySelectorAll('#preferences input[type="checkbox"]');
  for (const checkbox of checkboxes) {
    if (checkbox.checked) {
      preferences.push(checkbox.id);
    }
  }
  recommendServices(preferences); // Call recommendation function after getting preferences
}

// 3. Real-time weather updates (example using a placeholder API)
const weatherContainer = document.createElement('div');
weatherContainer.id = 'weather';
document.body.insertBefore(weatherContainer, document.getElementById('about'));

function updateWeather() {
  fetch('a08d4693d0c50bc94739bef2d7cf1493') // Replace with your API call
    .then(response => response.json())
    .then(data => {
      const temp = Math.round(data.main.temp - 273.15); // Convert Kelvin to Celsius
      const description = data.weather[0].main;
      weatherContainer.innerHTML = `<h2>Today's Weather: ${temp}°C, ${description}</h2>`;
    })
    .catch(error => console.error(error)); // Handle errors gracefully
}

updateWeather(); // Call function to get initial weather data

// 4. (Optional) AI-powered Image Personalization
// This requires an image recognition service and user preference integration
function personalizeImages(images) {
  // Replace with your chosen image recognition service and preference logic
  // This example is a placeholder
  const dominantColors = []; // Placeholder for API response
  for (const image of images) {
    // Call image recognition API to get dominant colors
    dominantColors.push({ image, dominantColor: "placeholder_color" }); // Placeholder
  }

  const userPreferences = getUserPreferences(); // Replace with function to get user preferences

  // Based on user preferences and dominant colors, potentially alter images
  // (e.g., highlight specific colors, adjust saturation)
}

// Remember to replace placeholders with your actual API keys and data.

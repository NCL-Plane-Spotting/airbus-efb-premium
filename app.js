// Airbus EFB Premium - Main Application Logic

// Register service worker for offline functionality
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js')
        .then(registration => {
            console.log('Service Worker registered successfully:', registration.scope);
        })
        .catch(error => {
            console.log('Service Worker registration failed:', error);
        });
}

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    console.log('Airbus EFB Premium initialized');
    
    // Set initial values
    updateFlightInfo();
    updateNavigationInfo();
    updateWeatherInfo();
    
    // Update data periodically
    setInterval(updateFlightInfo, 30000); // Update every 30 seconds
    setInterval(updateNavigationInfo, 5000); // Update every 5 seconds
    setInterval(updateWeatherInfo, 60000); // Update every minute
    
    // Setup action buttons
    setupActionButtons();
});

// Update flight information
function updateFlightInfo() {
    // In a real application, this would fetch data from an API
    document.getElementById('flight-number').textContent = 'AF' + Math.floor(Math.random() * 9000 + 1000);
    document.getElementById('route').textContent = 'EGLL - LFPG';
    document.getElementById('aircraft').textContent = 'A320-214';
}

// Update navigation information
function updateNavigationInfo() {
    // Simulated data - in production this would come from aircraft systems
    const altitude = Math.floor(Math.random() * 10000 + 30000);
    const speed = Math.floor(Math.random() * 50 + 420);
    const heading = Math.floor(Math.random() * 360);
    
    document.getElementById('altitude').textContent = altitude.toLocaleString() + ' ft';
    document.getElementById('speed').textContent = speed + ' kts';
    document.getElementById('heading').textContent = heading + '°';
}

// Update weather information
function updateWeatherInfo() {
    // Simulated weather data
    const temp = Math.floor(Math.random() * 20 - 10);
    const windSpeed = Math.floor(Math.random() * 30 + 5);
    const windDir = Math.floor(Math.random() * 360);
    const visibility = Math.floor(Math.random() * 5 + 5);
    
    document.getElementById('temperature').textContent = temp + ' °C';
    document.getElementById('wind').textContent = windDir + '° @ ' + windSpeed + ' kts';
    document.getElementById('visibility').textContent = visibility + ' km';
}

// Setup action buttons
function setupActionButtons() {
    const buttons = document.querySelectorAll('.action-btn');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Feature coming soon: ' + button.textContent);
        });
    });
}

// Check online/offline status
window.addEventListener('online', () => {
    document.querySelector('.offline-status').textContent = 'Online';
    document.querySelector('.status-dot').className = 'status-dot online';
});

window.addEventListener('offline', () => {
    document.querySelector('.offline-status').textContent = 'Offline mode enabled';
    document.querySelector('.status-dot').className = 'status-dot offline';
});

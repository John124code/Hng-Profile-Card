// Update time in milliseconds
function updateTime() {
    const timeElement = document.getElementById('time');
    if (timeElement) {
        timeElement.textContent = Date.now();
    }
}

// Initialize time on page load
updateTime();

// Optional: Update time every second (remove if you only want initial time)
setInterval(updateTime, 1000);
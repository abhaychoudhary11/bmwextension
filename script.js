// Clock functionality
function updateClock() {
    const now = new Date();
    
    // Format time
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    // Format date
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const date = now.toLocaleDateString('en-US', options);
    
    // Update DOM
    document.getElementById('time').textContent = `${hours}:${minutes}:${seconds}`;
    document.getElementById('date').textContent = date;
}

// Search functionality
const searchInput = document.getElementById('search-input');
const clearButton = document.getElementById('clear-search');

// Handle input changes
searchInput.addEventListener('input', () => {
    clearButton.classList.toggle('visible', searchInput.value.length > 0);
});

// Clear search input
clearButton.addEventListener('click', () => {
    searchInput.value = '';
    clearButton.classList.remove('visible');
    searchInput.focus();
});

// Handle enter key for search
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && searchInput.value.trim()) {
        const url = 'https://www.google.com/search?q=' + encodeURIComponent(searchInput.value.trim());
        window.location.href = url;
    }
});

// Handle search icon click
document.querySelector('.search-icon').addEventListener('click', () => {
    if (searchInput.value.trim()) {
        const url = 'https://www.google.com/search?q=' + encodeURIComponent(searchInput.value.trim());
        window.location.href = url;
    } else {
        searchInput.focus();
    }
});

// Update clock every second
setInterval(updateClock, 1000);

// Initial call to avoid delay
updateClock();

// Focus search input on load
window.addEventListener('load', () => {
    searchInput.focus();
});

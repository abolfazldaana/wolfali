// script.js

// Function to fetch API data and update HTML
function fetchAndDisplayData() {
    // Replace 'https://api.example.com/data' with your API endpoint URL
    fetch('http://139.144.67.6:8000/check/vless%3A%2F%2F2faf1e4b-586e-47bd-b5bd-7c114db38b96%40as8.nory.store%3A2258%3Fsecurity%3D%26type%3Dws%26path%3D%2F%23AS8')
        .then(response => response.json())
        .then(data => {
            const dataContainer = document.getElementById('updata');
            dataContainer.innerHTML = ''; // Clear existing content
            data.forEach(item => {
                const itemElement = document.createElement('div');
                itemElement.textContent = item.name; // Adjust based on your data structure
                dataContainer.appendChild(itemElement);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

// Call the function to fetch and display data
fetchAndDisplayData();

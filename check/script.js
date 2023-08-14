
document.addEventListener("DOMContentLoaded", () => {
    const linkInput = document.getElementById("linkInput");
    const submitButton = document.getElementById("submitButton");


    submitButton.addEventListener("click", () => {
        const userLink = linkInput.value.trim();

        if (userLink !== "") {
            const generatedLink = "http://139.144.67.6:8000/check/" + encodeURIComponent(userLink);
            fetch(generatedLink)
            .then(res =>{
                console.log(res);
            })
            
            window.open(generatedLink, "_blank");
            
            const json2st = JSON.stringify(generatedLink)

            // let up = document.getElementById("up")
            // up.innerHTML = (generatedLink)
            // document.getElementById("up").innerHTML = fetchAndDisplayData(json2st)


            function fetchAndDisplayData() {
    // Replace 'https://api.example.com/data' with your API endpoint URL
    fetch(generatedLink)
        .then(response => response.json())
        .then(data => {
            const dataContainer = document.getElementById('up');
            
            // Clear any existing content
            dataContainer.innerHTML = '';
            
            // Loop through the API data and add it to the HTML container
            data.forEach(item => {
                const itemElement = document.createElement('p');
                itemElement.textContent = item.title; // Adjust based on your data structure
                dataContainer.appendChild(itemElement);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

// Call the function to fetch and display data when the page loads
window.onload = fetchAndDisplayData;
        }
        
    });
});

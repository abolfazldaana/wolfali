document.addEventListener("DOMContentLoaded", () => {
    const linkInput = document.getElementById("linkInput");
    const submitButton = document.getElementById("submitButton");
    const resultContainer = document.getElementById("resultContainer");

    submitButton.addEventListener("click", () => {
        const userLink = linkInput.value.trim();

        if (userLink !== "") {
            const generatedLink = "http://139.144.67.6:8000/check/" + encodeURIComponent(userLink);

            // Open the generated link in a new tab
            window.open(generatedLink, "_blank");

            // Display the generated link
            const resultElement = document.createElement("p");
            resultElement.textContent = generatedLink;
            resultContainer.appendChild(resultElement);
            linkInput.value = "";
        }
    });
});

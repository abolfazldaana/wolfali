
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
            document.getElementById("up").innerHTML = fetchAndDisplayData(json2st)
        }
        
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const linkInput = document.getElementById("linkInput");
    const submitButton = document.getElementById("submitButton");


    submitButton.addEventListener("click", () => {
        const userLink = linkInput.value.trim();

        if (userLink !== "") {
            const generatedLink = "http://139.144.67.6:8000/check/" + encodeURIComponent(userLink);
            fetch(generatedLink)
            document.getElementById('wait')
            .then(res =>{
                console.log(res);
            })
            fetch(generatedLink)
.then(response => response.json()) // تبدیل پاسخ به JSON
.then(data => {
    // نمایش اطلاعات در صفحه
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `
        <p>آپلود: ${data.upload[0]}</p>
        <p>دانلود: ${data.download[0]}</p>
        <p>مجموع : ${data.total[0]}</p>
        <p>روز های باقی مانده: ${data.remaining_days[0]}</p>
    `;
})
.catch(error => {
    console.error('خطا در دریافت اطلاعات:', error);
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = 'خطا در دریافت اطلاعات از API.';
});
            // window.open(generatedLink, "_blank");
            
            
            // let up = document.getElementById("up")
            // up.innerHTML = (generatedLink)
            // document.write(document.getElementById("up").innerHTML = (generatedLink))
        }
        
    });
});
$('.input').keypress(function (e) {
    if (e.which == 13) {
      $('form#sub').submit();
      return false;   
    }
  });

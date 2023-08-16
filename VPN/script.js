
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
            .then (document.getElementById('wait').innerHTML = ('<h3 data-text=""></h3>'))
            .then (document.getElementById('wait1').innerHTML = ('<h3 data-text=""></h3>'))

            fetch(generatedLink)
.then(response => response.json()) // تبدیل پاسخ به JSON
.then(data => {
    // نمایش اطلاعات در صفحه
    // const outputDiv = document.getElementById('output');
    // outputDiv.innerHTML = `
    //     <p>آپلود: ${data.upload[0]}</p>
    //     <p>دانلود: ${data.download[0]}</p>
    //     <p>مجموع : ${data.total[0]}</p>
    //     <p>روز های باقی مانده: ${data.remaining_days[0]}</p>
    // `;
    document.getElementById('upl').innerHTML = (data.upload+'G')
    document.getElementById('dwl').innerHTML = (data.download+'G')
    document.getElementById('tot').innerHTML = (data.total+'G')
    document.getElementById('rd').innerHTML = (data.remaining_days)
})
.catch(error => {
    console.error('خطا در دریافت اطلاعات:', error);
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = 'خطا در دریافت اطلاعات از API.';
            });
          } 
    });
});
const submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', () => {
  submitButton.classList.add('clicked');
  setTimeout(() => {
    submitButton.classList.remove('clicked');
  }, 1000); // زمان تاخیر به میلی‌ثانیه (در این مثال 0.6 ثانیه)
});



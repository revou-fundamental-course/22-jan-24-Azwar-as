const usernameInput = document.getElementById("usernameInput")
const emailInput = document.getElementById("emailInput")
const sendButton = document.getElementById("sendButton")
const emailError = document.getElementById("emailError")
const nameError = document.getElementById("nameError")
const fruityOption = document.getElementById("fruityOption")
nameError.style.display = "none"
emailError.style.display = "none"

sendButton.addEventListener("click", function () {
    let names = usernameInput.value
    let email = emailInput.value
    let option = fruityOption.value 

    if (!names) {
        const nameError = document.getElementById("nameError")
        nameError.classList.add("error-massage")
        nameError.innerText = "Username must be filled in!"
        nameError.style.display = "block"
    }
    if (!email) {
        const emailError = document.getElementById("emailError")
        emailError.classList.add("error-massage")
        emailError.innerText = "Email must be filled in!"
        emailError.style.display = "block"
    }
    if (!option){
        const optionError = document.getElementById("optionError")
        optionError.classList.add("error-message")
        optionError.innerText = "Must be Filled!"
    }
})

var slideIndex = 1;
        showDivs(slideIndex)

        function plusDivs(n) {
            showDivs((slideIndex += n))
        }

        function showDivs(n) {
            var i;
            var imgList = document.getElementsByClassName("imgSlideShow")
            if (n > imgList.length) slideIndex = 1;
            else if (n < 1) slideIndex = imgList.length

            for (i = 0; i < imgList.length; i++) {
                imgList[i].style.display = 'none';
            }
            imgList[slideIndex - 1].style.display = "block"
        }
        setInterval(() => {
            plusDivs(1)
        }, 2000)

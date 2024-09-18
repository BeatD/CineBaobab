document.addEventListener("DOMContentLoaded", ()=> {
    let verifyingtext = document.getElementById("textVerifying")
    let icon = document.getElementById("icon")
    let image2 = document.getElementById("image2")
    
    setTimeout(() => {
        verifyingtext.style.opacity = "1"
        verifyingtext.style.transition = "15s"
    }, 1000);
    setTimeout(() => {
        icon.style.animation = "loading 2s infinite"
    }, 3000);
    setTimeout(() => {
        image2.style.transition = "4s"
        image2.style.opacity= "1"
    }, 4000);
})
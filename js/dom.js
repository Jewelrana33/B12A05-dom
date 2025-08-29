// Heart Icon functionality 
const heartIcons = document.querySelectorAll(".fa-heart");
const navbarHeartCount = document.getElementById('heartCount');

heartIcons.forEach(icon => {
    icon.addEventListener("click", ()=> {
        let count = parseInt(navbarHeartCount.innerText) || 0;
        count += 1;
        navbarHeartCount.innerText = count;
    })
})


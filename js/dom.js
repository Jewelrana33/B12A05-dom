let coins = 100;
const coinDisplay = document.getElementById("coinCount");


// Heart Icon functionality 
const heartIcons = document.querySelectorAll(".fa-heart");
const heartCountDisplay = document.getElementById('heartCount');
let heartCount = 0;

heartIcons.forEach(icon => {
    icon.addEventListener("click", ()=> {
        heartCount++;
        heartCountDisplay.innerText = heartCount;
       
    })
})

// copy buttons 

const copyButtons = document.querySelectorAll(".copy-btn");
const copyCountDisplay = document.getElementById("copyCount");
let copyCount = 0;

copyButtons.forEach(btn =>{
    btn.addEventListener("click", ()=>{
        const card = findParentByClass(btn, "card");

        if(!card) return;
        const hotlineNumber = card.querySelector(".service-number").innerText;

        navigator.clipboard.writeText(hotlineNumber).then(() => {
            alert(`Hotline number ${hotlineNumber} copied!`);
        });
        copyCount++;
        copyCountDisplay.innerText = copyCount;
    });
});






 



// find parent by class 
function findParentByClass( element, className) {
    let parent = element.parentElement;
    while (parent) {
        if (parent.classList.contains(className)){
            return parent;
        }
        parent = parent.parentElement;

    }
    return null;
}


// call btn functionality 

const callButtons = document.querySelectorAll('.call-btn');

const callHistoryContainer = document.getElementById("callHistory");

function creatHistoryList() {
    const ul =document.createElement("ul");
    ul.className = " ml-3 mt-2 list-disc";
    callHistoryContainer.appendChild(ul);
    return ul;
}


callButtons.forEach(btn => {
    btn.addEventListener('click', ()=> {
        const card = findParentByClass(btn, 'card');

        if(!card) return;

        const serviceName = card.querySelector(".service-name").innerText;
        const serviceNumber = card.querySelector(".service-number").innerText;
        if(coins < 20){
            alert("Not enough coins to make a call!");
            return;
        }

        coins -=20;
        coinDisplay.innerText = coins;

        alert(`Calling ${serviceName} at ${serviceNumber}`);

        const callTime = new Date().toLocaleTimeString();


        const historyList = callHistoryContainer.querySelector("ul") || creatHistoryList();

        const li = document.createElement('li');
        li.textContent = `${serviceName} - ${serviceNumber} (Time: ${callTime})`;
        historyList.appendChild(li);

    });
});

// Clear call History 
document.getElementById("clearHistory").addEventListener('click', ()=> {
    const historyList = callHistoryContainer.querySelector('ul');
     if(historyList){
        historyList.innerHTML = "";
     }
});



// objectives to be achieved

/*
    1. When submit button is clicked the display for the thank you page becomes flex, and z-index becomes higher than 2
        1a. Note you cannot add transitions to display property in css. 
        
    2. When clicking on the ratings button, the value of that button should be displayed instead of the generic text

*/

const submitBtn = document.getElementById("submit_btn"); // 1
const thankyouCard = document.getElementById("thankyou_card") //1

const oneStar = document.getElementById('1'); //2
const twoStar = document.getElementById('2'); //2
const threeStar = document.getElementById('3'); //2
const fourStar = document.getElementById('4'); //2
const fiveStar = document.getElementById('5'); //2
const displayRate = document.getElementById("rating"); //2

const submitClick = () => {  //1
    thankyouCard.style.display = "flex"; 
    thankyouCard.style.zIndex = "10";
}




submitBtn.addEventListener("click", submitClick); // 1 

oneStar.addEventListener("click", () => { 
    displayRate.innerText = oneStar.dataset.value;
})

twoStar.addEventListener("click", () => { 
    displayRate.innerText = twoStar.dataset.value;
})

threeStar.addEventListener("click", () => { 
    displayRate.innerText = threeStar.dataset.value;
})

fourStar.addEventListener("click", () => { 
    displayRate.innerText = fourStar.dataset.value;
})

fiveStar.addEventListener("click", () => { 
    displayRate.innerText = fiveStar.dataset.value;
})




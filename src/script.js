// objectives to be achieved

/*
    1. When submit button is clicked the display for the thank you page becomes flex, and z-index becomes higher than 2
        1a. Note you cannot add transitions to display property in css. 
        
    2. When clicking on the ratings button, the value of that button should be displayed instead of the generic text 
    

*/

const submitBtn = document.getElementById("submit_btn"); 
const thankyouCard = document.getElementById("thankyou_card") 

const oneStar = document.getElementById('1'); 
const twoStar = document.getElementById('2'); 
const threeStar = document.getElementById('3'); 
const fourStar = document.getElementById('4'); 
const fiveStar = document.getElementById('5'); 
const displayRate = document.getElementById("rating");

const rateText = document.getElementById("rate__text"); 
const rateTitle = document.getElementById("rate__title"); 
const rateIcon = document.getElementById("rate__star--icon"); 

const submitClick = () => {  
    if (oneStar.getAttribute("class").includes("selected") || twoStar.getAttribute("class").includes("selected") || threeStar.getAttribute("class").includes("selected") || fourStar.getAttribute("class").includes("selected") || fiveStar.getAttribute("class").includes("selected"))  { 
        console.log("yes");
        thankyouCard.style.display = "flex"; 
        thankyouCard.style.zIndex = "10";
        oneStar.classList.remove("selected"); 
    } else { 
        console.log("no")
        thankyouCard.style.display = "none";
    }
   
}



submitBtn.addEventListener("click", submitClick); 


oneStar.addEventListener("click", () => { 
    displayRate.innerText = oneStar.dataset.value;
    oneStar.classList.add("selected"); 
    
})

twoStar.addEventListener("click", () => { 
    displayRate.innerText = twoStar.dataset.value;
    twoStar.classList.add("selected"); 
})

threeStar.addEventListener("click", () => { 
    displayRate.innerText = threeStar.dataset.value;
    threeStar.classList.add("selected"); 
    
})

fourStar.addEventListener("click", () => { 
    displayRate.innerText = fourStar.dataset.value;
    fourStar.classList.add("selected"); 
    
})

fiveStar.addEventListener("click", () => { 
    displayRate.innerText = fiveStar.dataset.value;
    fiveStar.classList.add("selected"); 
    
})

rateIcon.addEventListener("click", ()=> { 
    oneStar.classList.remove("selected"); 
    twoStar.classList.remove("selected");
    threeStar.classList.remove("selected");
    fourStar.classList.remove("selected");
    fiveStar.classList.remove("selected");
})


rateText.addEventListener("click", ()=> { 
    oneStar.classList.remove("selected"); 
    twoStar.classList.remove("selected");
    threeStar.classList.remove("selected");
    fourStar.classList.remove("selected");
    fiveStar.classList.remove("selected");
})


rateTitle.addEventListener("click", ()=> { 
    oneStar.classList.remove("selected"); 
    twoStar.classList.remove("selected");
    threeStar.classList.remove("selected");
    fourStar.classList.remove("selected");
    fiveStar.classList.remove("selected");
})


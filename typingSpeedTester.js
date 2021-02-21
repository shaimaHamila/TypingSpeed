const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");


const theTimer = document.querySelector(".timer");
const body = document.querySelector("body");
const originTextStyle = document.querySelector("#origin-text");
const originTextPStyle = document.querySelector("#origin-text p");
const testWrapperStyle = document.querySelector(".test-wrapper textarea");
const checkbox = document.querySelector(".form-check-input")


var timer = [0, 0, 0];
var interval;
var timerRunning = false;
// Add leading zero to numbers 9 or below (purely for aesthetics):


// Run a standard minute/second/hundredths timer:
function runTimer(){
    theTimer.innerHTML = timer[0] + ":" + timer[1] + ":" + timer[2];    
    if(timer[2] ==100){
        timer[1]++;
        timer[2]=0;
    }
    if(timer[1]==60){
        timer[0]++;
        timer[1]=0;
    }
    else
        timer[2]++;
    
}
// Match the text entered with the provided text on the page:
function spellCheck(){
    let textEntred = testArea.value;
    let originTexteMach = originText.substring(0, textEntred.length);
    if(textEntred == originText){
        testWrapper.style.borderColor = "#429890";
        clearInterval(interval);
        
    }
    else 
        if(textEntred == originTexteMach){
            testWrapper.style.borderColor = "#65CCf3";
    }
    else
       testWrapper.style.borderColor = "#E95D0F";
    
}

// Start the timer:
function start(){
    let textEnterdLength = testArea.value.length;
    if(textEnterdLength === 0 && !timerRunning ){
        timerRunning = true;
        interval = setInterval(runTimer, 10);
    }
}


// Reset everything:
function reset(){
    clearInterval(interval);
    interval = null;
    timer = [0, 0, 0];
    timerRunning = false;

    testArea.value = "";
    theTimer.innerHTML = "00:00:00";
    testWrapper.style.borderColor = "black";
}

// Event listeners for keyboard input and the reset button:
testArea.addEventListener('keypress', start, false);
testArea.addEventListener('keyup', spellCheck, false);
resetButton.addEventListener("click", reset, false);

//Dark mode
function darkMode(){
    if(checkbox.value == "OFF"){
        resetButton.classList.remove("resetLight");
        resetButton.classList.add("resetDark");

        theTimer.classList.remove("timerLight");
        theTimer.classList.add("timerDark");

        originTextStyle.classList.remove("origin-text-light");
        originTextStyle.classList.add("origin-text-darck");

        originTextPStyle.classList.remove("pLight");
        originTextPStyle.classList.add("pDark");

        testWrapperStyle.classList.remove("textareaLight");
        testWrapperStyle.classList.add("textareaDark");

        body.classList.remove("bodyLight");
        body.classList.add("bodyDark");
        checkbox.value = "ON"
    }
    else{
        resetButton.classList.remove("resetDark");
        resetButton.classList.add("resetLight");

        theTimer.classList.remove("timerDark");
        theTimer.classList.add("timerLight");

        originTextStyle.classList.remove("origin-text-darck");
        originTextStyle.classList.add("origin-text-light");

        originTextPStyle.classList.remove("pDark");
        originTextPStyle.classList.add("pLight");

        testWrapperStyle.classList.remove("textareaDark");
        testWrapperStyle.classList.add("textareaLight");

        body.classList.remove("bodyDark");
        body.classList.add("bodyLight");
        checkbox.value = "OFF"
        
    }
}

checkbox.addEventListener('click', darkMode);
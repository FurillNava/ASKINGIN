const messages = [
    "sure ka?",
    "Sure na sure na??",
    "Sure na sure na sure ba?",
    "Nigga please...",
    "Isipin mo beh nagsearch pa ko ani ba!",
    "If you say no, I will be really sad...",
    "Ahhh ganyanan haa...",
    "Lahhh please yess na...",
    "Sige na nga balaha na ka oy...",
    "Ah okeh, titigil na ko...",
    "Charot, yes na please! 💙💙💙",
    "Sigeee repeat nalang nako hehehe"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick(){
    if (messageIndex === 0) {
        window.location.href = "yesdawfirst.html";
    }
    else {
        window.location.href = "yesdaw.html";
    }
}

function secretbuttons(){
    window.location.href = "asking.html"
}
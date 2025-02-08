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
    window.location.href = "index.html"
}

function animateYesButtonStyle() {
    const yesButton = document.querySelector('.yes-button');
    const fontStyles = ['normal', 'italic', 'oblique', 'bold'];
    const fontFamilies = ['Arial', 'Courier New', 'Georgia', 'Times New Roman', 'Verdana'];
    let styleIndex = 0;
    let familyIndex = 0;
    setInterval(() => {
        yesButton.style.fontStyle = fontStyles[styleIndex];
        yesButton.style.fontFamily = fontFamilies[familyIndex];
        styleIndex = (styleIndex + 1) % fontStyles.length;
        familyIndex = (familyIndex + 1) % fontFamilies.length;
    }, 100);
}

animateYesButtonStyle();



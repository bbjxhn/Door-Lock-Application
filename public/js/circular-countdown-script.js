const countdownSpan = document.getElementById('countdown');
const passwordSpan = document.getElementById('password');
const circle = document.querySelector('.countdown-ring circle');
const radius = circle.r.baseVal.value;
const circumference = 2 * Math.PI * radius;
let countdownIntervalId;

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = circumference;

function setProgress(percent) {
    const offset = circumference - percent / 100 * circumference;
    circle.style.strokeDashoffset = offset;
}

function formatPassword(password) {
    return `${password.slice(0, 3)} ${password.slice(3, 6)}`;
}

function startCountdown() {
    let timeLeft = 30;
    countdownSpan.textContent = timeLeft;
    setProgress(100);

    countdownIntervalId = setInterval(() => {
        timeLeft--;
        countdownSpan.textContent = timeLeft;
        setProgress((timeLeft / 30) * 100);

        if (timeLeft <= 0) {
            clearInterval(countdownIntervalId);
            startCountdown();
        }
    }, 1000);
}

const originalGeneratePassword = generatePassword;
generatePassword = function() {
    originalGeneratePassword();
    const passwordText = resultDiv.textContent.split(': ')[1];
    passwordSpan.textContent = formatPassword(passwordText);
}

startCountdown();
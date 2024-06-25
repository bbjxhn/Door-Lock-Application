document.getElementById('unlock-button').addEventListener('click', function() {
    var lockIcon = document.getElementById('lock-icon');
    var lockState = document.getElementById('lock-state');
    var ESP32_GPIO_IP = '172.20.10.6';

    if (lockIcon.classList.contains('fa-lock')) {
        lockIcon.classList.remove('fa-lock');
        lockIcon.classList.add('fa-lock-open');
        fetch(`http://${ESP32_GPIO_IP}/lock?state=unlocked`).then(response => response.text());
    } else {
        lockIcon.classList.remove('fa-lock-open');
        lockIcon.classList.add('fa-lock');
        fetch(`http://${ESP32_GPIO_IP}/lock?state=locked`).then(response => response.text());
    }
});
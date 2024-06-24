document.getElementById('resetForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const currentCode = document.getElementById('currentCode').value;
    const newCode = document.getElementById('newCode').value;

    if (newCode.length !== 6) {
        alert("Invalid password. Password must be 6 digits long.");
        return;
    }
    
    if (currentCode === newCode) {
        alert("The new password cannot be the same as the current password.");
        return;
    }

    const payload = newCode;
    
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain' },
        body: payload
    };

    fetch('http://172.20.10.6/reset-keypad', requestOptions)
        .then(response => {
            if (response.ok) {
                return response.text();
            }
            throw new Error('Network response was not ok.');
        })
        .then(responseText => {
            if (responseText === "success") {
                alert('Password change was successful');
            } else {
                alert('Error: ' + responseText);
            }
        })
        .catch(error => {
            alert('Error resetting keypad password: ' + error.message);
    });
});
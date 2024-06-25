const generatePasswordBtn = document.getElementById('generate-password');
        const resultDiv = document.getElementById('result');

        function generatePassword() {
            const charset = '0123456789';
            let password = '';

            for (let i = 0; i < 6; i++) {
                password += charset.charAt(Math.floor(Math.random() * charset.length));
            }

            resultDiv.textContent = password;
            updateKeypadPassword(password);
        }

        function updateKeypadPassword(password) {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'text/plain' },
                body: password
            };

            fetch('http://172.20.10.6/password-generator', requestOptions)
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
        }

        generatePasswordBtn.addEventListener('click', generatePassword);
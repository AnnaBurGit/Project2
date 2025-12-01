const firebaseProjectUrl = 'https://comp101-lab8-anna-default-rtdb.firebaseio.com/';
const databaseUrl = firebaseProjectUrl + 'msg.json';

const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', submitForm);

async function submitForm(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name || email || message) {
        const data = {name, email, message};
        try {
            const response = await fetch(databaseUrl, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error('Failed to send message');
            }
            showThanksAlert();
            clearForm();
        } catch (error) {
            console.error('Error when sending message:', error);
            alert('Failed to send message. Please try again.');
        }
    }
}

function showThanksAlert() {
    alert("Thanks for your message. We will get back to you soon!");
}

function clearForm() {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
}

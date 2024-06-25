document.getElementById('apology-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const feedback = document.getElementById('reason').value;
    
    if (feedback.trim() === "") {
        alert("Please enter your feedback.");
        return;
    }

    const webhookUrl = 'https://discord.com/api/webhooks/1255271136413880400/fTz_qy84dLDzMfRNMCs5t13Omiplt0aAYOigNYSFOoBy1w73R99sgTJ_Ef3xSkFeS7iB';

    const data = {
        content: `New feedback received:\n${feedback}`
    };

    fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            document.getElementById('apology-form').classList.add('hidden');
            document.getElementById('thank-you').classList.remove('hidden');
        } else {
            alert("There was an error sending your feedback. Please try again.");
        }
    })
    .catch(error => {
        alert("There was an error sending your feedback. Please try again.");
        console.error('Error:', error);
    });
});

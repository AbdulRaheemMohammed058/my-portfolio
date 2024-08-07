document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thank you for your message!');
        // Add code to handle form submission, like sending data to a server
    });

    document.getElementById('feedbackForm').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thank you for your feedback!');
        // Add code to handle feedback submission, like sending data to a server
    });
});

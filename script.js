// Automatically ensure the iframe maintains window focus for smooth gameplay control
window.addEventListener('DOMContentLoaded', () => {
    const iframe = document.getElementById('fancade');
    if (iframe) {
        iframe.focus();
        
        // Refocus if the user clicks anywhere on the wrapper background
        window.addEventListener('click', () => {
            iframe.focus();
        });
    }
});

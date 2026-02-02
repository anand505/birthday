document.getElementById('celebrate-btn').addEventListener('click', function() {
    // Show hidden message with a fade-in effect
    const surprise = document.getElementById('surprise-zone');
    surprise.classList.remove('hidden');
    surprise.style.opacity = '1';
    surprise.style.transition = 'opacity 1s ease';

    // Update button
    this.style.display = 'none';

    // Start Confetti Storm
    for (let i = 0; i < 150; i++) {
        createConfetti();
    }
    
    // Continue light confetti drizzle
    setInterval(createConfetti, 200);
});

function createConfetti() {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    
    // Random shapes and colors
    const colors = ['#ff4081', '#ffeb3b', '#00e676', '#00e5ff', '#ffffff'];
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    
    // Random position and size
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.width = Math.random() * 8 + 5 + 'px';
    confetti.style.height = confetti.style.width;
    
    // Random rotation and animation speed
    confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
    confetti.style.opacity = Math.random();
    
    document.body.appendChild(confetti);

    // Clean up
    setTimeout(() => {
        confetti.remove();
    }, 5000);
}
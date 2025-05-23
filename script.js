// Add hover effect to project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const shine = `radial-gradient(circle at ${x}px ${y}px, rgba(0,255,178,0.1) 0%, rgba(255,255,255,0) 80%)`;
        card.style.background = `${shine}, rgba(255, 255, 255, 0.03)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.background = 'rgba(255, 255, 255, 0.03)';
    });
});

// Add smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.getElementById('zigao-img').addEventListener('click', clicker);

let clicks = 0;
const cpsDisplay = document.getElementById('cps-counter');

setInterval(() => {
    cpsDisplay.textContent = `${clicks} CPS`;
    if (clicks > 3) {
        cpsDisplay.classList.add('visible');

        if (clicks >= 20) {
            cpsDisplay.classList.add('stage-20');
            cpsDisplay.classList.remove('stage-25', 'stage-15', 'stage-10', 'stage-7');
        } else if (clicks >= 15) {
            cpsDisplay.classList.add('stage-15');
            cpsDisplay.classList.remove('stage-20', 'stage-25', 'stage-10', 'stage-7');
        } else if (clicks >= 10) {
            cpsDisplay.classList.add('stage-10');
            cpsDisplay.classList.remove('stage-15', 'stage-20', 'stage-25', 'stage-7');
        } else if(clicks >= 7) {
            cpsDisplay.classList.add('stage-7');
            cpsDisplay.classList.remove('stage-10', 'stage-15', 'stage-20', 'stage-25');
        } else {
            cpsDisplay.classList.remove('stage-7', 'stage-10', 'stage-15', 'stage-20', 'stage-25');
        }
    } else {
        cpsDisplay.classList.remove('visible');
    }
    clicks = 0;
}, 1000);

function clicker(event) {
    clicks++;

    const img = event.target;
    img.classList.remove('clicked');
    void img.offsetWidth;
    img.classList.add('clicked');

    const plusOne = document.createElement('div');
    plusOne.textContent = '+1';
    plusOne.className = 'plus-one';

    document.body.appendChild(plusOne);

    const x = event.clientX;
    const y = event.clientY;
    plusOne.style.left = `${x}px`;
    plusOne.style.top = `${y}px`;

    setTimeout(() => plusOne.remove(), 1000);
}

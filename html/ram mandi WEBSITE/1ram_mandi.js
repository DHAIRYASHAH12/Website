// Countdown Timer
const eventDate = new Date('2024-01-22:11:00').getTime();

const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = eventDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('countdown-timer').innerHTML =
        ${days}d ${hours}h ${minutes}m ${seconds}s;

    if (distance < 0) {
        document.getElementById('countdown-timer').innerHTML = 'Event has started!';
    }
};

setInterval(updateCountdown, 1000);
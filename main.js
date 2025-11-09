const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
    hamburger.classList.toggle('active');
});

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});

// Countdown Timer
const countDate = new Date(new Date().getTime() + (7 * 24 * 60 * 60 * 1000)).getTime();
const countdown = () => {
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    document.getElementById('days').innerText = textDay < 10 ? '0' + textDay : textDay;
    document.getElementById('hours').innerText = textHour < 10 ? '0' + textHour : textHour;
    document.getElementById('minutes').innerText = textMinute < 10 ? '0' + textMinute : textMinute;
    document.getElementById('seconds').innerText = textSecond < 10 ? '0' + textSecond : textSecond;
};

setInterval(countdown, 1000);

// Newsletter Subscription
const newsletterForm = document.querySelector('.newsletter-form');
const newsletterInput = document.querySelector('.newsletter-input');

newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = newsletterInput.value;
    if (email) {
        alert(`Thank you for subscribing with ${email}!`);
        newsletterInput.value = '';
    } else {
        alert('Please enter a valid email address.');
    }
});

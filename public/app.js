console.log("Created by Lucas Mace");
import { timeUntil } from './countdown.js';

const cdNode = document.getElementById("countdown-output");

const countdown = setInterval(() => {
    const targetDateTime = timeUntil('2021-11-29T23:59:59');

    if (targetDateTime.done) {
        // targetDateTime.done is true when the Target DateTime has passed --

        // Stop Timer --
        clearInterval(countdown);

        // Remove Countdown's parent element from the DOM --
        cdNode.parentNode.remove();
    } else {
        // Set Countdown Timer text --
        cdNode.innerHTML = 
        `These deals end in 
        ${targetDateTime.days % 365} Days, 
        ${targetDateTime.hours % 24} Hours and 
        ${targetDateTime.minutes % 60} Minutes`;
    }
}, 1000);
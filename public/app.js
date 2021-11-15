console.log("Created by Lucas Mace");
import { timeUntil } from './countdown.js';

const cdNode = document.getElementById("countdown-output");

const countdown = setInterval(() => {
    const targetDateTime = timeUntil('2021-11-29T23:59:59');
    // const targetDateTime = timeUntil('2021-11-16T15:09:00');

    // targetDateTime.done is true when the Target DateTime has passed --
    if (targetDateTime.done) {
        // Stop Timer --
        clearInterval(countdown);

        // Updates text to show the offer has expired --
        cdNode.innerHTML = "This offer has unfortunately expired"
    } else {
        // Set Countdown Timer text --

        // Individual time variables --
        const days = targetDateTime.days % 365;
        const hours = targetDateTime.hours % 24;
        const minutes = targetDateTime.minutes % 60;

        // If time is 1, remove plural --
        const dayPlural = (days === 1) ? "" : "s";
        const hourPlural = (hours === 1) ? "" : "s";
        const minutePlural = (minutes === 1) ? "" : "s";

        cdNode.innerHTML = `These deals end in: 
        ${days} Day${dayPlural}, 
        ${hours} Hour${hourPlural} and 
        ${minutes} Minute${minutePlural}`;
    }
}, 1000);

// Building the Slider information into an array of objects --
// makes it simple to scale. This can easily be pulled from --
// a backend in either REST or GraphQL. The title and button --
// position is customizable. TL for top left, BR for botom right --
// and so on. Title can read HTML <br> tags if the position is --
// set to top. Button text content is also customizable, but --
// defaults to "shop now" if it is left blank or undefined --
const imageGallery = [
    {
        title: "Cycling<br>Deals",
        alt: "Cyclist on road with field in background",
        src: "Cycling_Slider.jpg",
        link: "https://www.eriksbikeshop.com/cycling/bicycles",
        target: "_self",
        titlePosition: "TR",
        buttonPosiiton: "TL"
    },
    {
        title: "Ski Deals",
        alt: "Skier decending down hill while turning",
        src: "Ski_Slider.jpg",
        link: "https://www.eriksbikeshop.com/winter/ski",
        target: "_blank",
        titlePosition: "BL",
        buttonPosiiton: "BL"
    },
    {
        title: "Snowboard Deals",
        alt: "Snowboarder descending down hill while turning",
        src: "Snowboard_Slider.jpg",
        link: "https://www.eriksbikeshop.com/winter/snowboard",
        target: "_self",
        titlePosition: "BR",
        buttonPosiiton: "BR",
        buttonText: "Low Inventory"
    },
];

let sliderGateOpen = true;
const sliderImage = document.getElementById("slider-image");
const sliderTitle = document.getElementById("slider-title");
const sliderLink = document.getElementById("slider-link");
const sliderButton = document.getElementById("slider-button");
const sliderDotContainer = document.getElementById("dot-container");
const sliderImagePrefix = "./images/";
let sliderIndex = 0;

const slider = () => {
    // Prevents function from neddless logic. Runs once on page load --
    if (sliderGateOpen) {
        // Prevents the "shop now" button from jumping around before loading --
        sliderButton.style.display = "block";

        // Creates dot for each object in array --
        for (let i = 0; i < imageGallery.length; i++) {
            const newDot = document.createElement("div");
            newDot.id = "dot-" + i;
            newDot.className = "slider-dot";
            sliderDotContainer.appendChild(newDot);
        }
        sliderGateOpen = false;
    }

    // Sets Image with alt text --
    sliderImage.src = sliderImagePrefix + imageGallery[sliderIndex].src;
    sliderImage.alt = imageGallery[sliderIndex].alt;

    // Sets Title --
    sliderTitle.innerHTML = imageGallery[sliderIndex].title;

    // Sets Link and Target --
    sliderLink.href = imageGallery[sliderIndex].link;
    sliderLink.target = imageGallery[sliderIndex].target;

    // Sets the title's position --
    switch (imageGallery[sliderIndex].titlePosition) {
        case "TR":
            sliderTitle.style.top = "2rem";
            sliderTitle.style.right = "2rem";
            sliderTitle.style.bottom = "auto";
            sliderTitle.style.left = "auto";

            break;
        case "TL":
            sliderTitle.style.top = "2rem";
            sliderTitle.style.right = "auto";
            sliderTitle.style.bottom = "auto";
            sliderTitle.style.left = "2rem";

            break;
        case "BR":
            sliderTitle.style.top = "auto";
            sliderTitle.style.right = "2rem";
            sliderTitle.style.bottom = "3.5rem";
            sliderTitle.style.left = "auto";

            break;
        case "BL":
            sliderTitle.style.top = "auto";
            sliderTitle.style.right = "auto";
            sliderTitle.style.bottom = "3.5rem";
            sliderTitle.style.left = "2rem";

            break;

        default:
            break;
    }

    // Sets button text. Defaults to "Shop Now" --
    sliderButton.innerHTML = imageGallery[sliderIndex].buttonText || "Shop Now";

    // Sets button position --
    switch (imageGallery[sliderIndex].buttonPosiiton) {
        case "TR":
            sliderButton.style.top = "2rem";
            sliderButton.style.right = "2rem";
            sliderButton.style.bottom = "auto";
            sliderButton.style.left = "auto";

            break;
        case "TL":
            sliderButton.style.top = "2rem";
            sliderButton.style.right = "auto";
            sliderButton.style.bottom = "auto";
            sliderButton.style.left = "2rem";

            break;
        case "BR":
            sliderButton.style.top = "auto";
            sliderButton.style.right = "2rem";
            sliderButton.style.bottom = "3.5rem";
            sliderButton.style.left = "auto";

            break;
        case "BL":
            sliderButton.style.top = "auto";
            sliderButton.style.right = "auto";
            sliderButton.style.bottom = "3.5rem";
            sliderButton.style.left = "2rem";

            break;

        default:
            break;
    }

    // Changes all dots in slider to inactive / white --
    for (let i = 0; i < imageGallery.length; i++) {
        const inactiveDot = document.getElementById("dot-" + i);
        inactiveDot.style.backgroundColor = "white";
    }

    // Sets active dot in slider to red --
    const activeDot = document.getElementById("dot-" + sliderIndex);
    activeDot.style.backgroundColor = "red";

    // Moves to next positon or loops in imageGallery array --
    if (sliderIndex === imageGallery.length - 1) {
        sliderIndex = 0;
    } else {
        sliderIndex++;
    }
}

const sliderSeconds = 5;
const sliderTimer = setInterval(() => {
    slider();
}, sliderSeconds * 1000);
slider();

const co2Form = document.getElementById("co2-form");
const milesInput = document.getElementById("miles-input");
const co2Button = document.getElementById("co2-button");
const pedalBikeOutput = document.getElementById("pedal-bike-output");
const electricBikeOutput = document.getElementById("electric-bike-output");
const electricCarOutput = document.getElementById("electric-car-output");
const gasolineCarOutput = document.getElementById("gasoline-car-output");
const pedalBiketime = document.getElementById("pedal-bike-time");
const electricBiketime = document.getElementById("electric-bike-time");
const electricCartime = document.getElementById("electric-car-time");
const gasolineCartime = document.getElementById("gasoline-car-time");
const timeTitle = " minute trip";

const calculateCo2 = (event) => {
    // Prevents page refresh on form submit --
    event.preventDefault();

    const oneWayCommute = Number(milesInput.value);

    // Grams of Co2 per mile --
    const pedalBikePerMile = 0;
    const electricBikePerMile = 3.75;
    const electricCarPerMile = 200;
    const gasolineCarPerMile = 404;

    // Average speed of vehicles in MPH --
    const pedalBikeSpeed = 10;
    const electricBikeSpeed = 20;
    const electricCarSpeed = 50;
    const gasolineCarSpeed = 50;

    const workDaysInAYear = 261;
    const gramsToPoundsConversion = 454;
    const milesToMinutesConversion = 60;

    const twoWayCommute = oneWayCommute * 2;
    const milesCommutedInYear = twoWayCommute * workDaysInAYear;

    const pedalBikeCo2 = (milesCommutedInYear * pedalBikePerMile / gramsToPoundsConversion).toFixed(2);
    const electricBikeCo2 = (milesCommutedInYear * electricBikePerMile / gramsToPoundsConversion).toFixed(2);
    const electricCarCo2 = (milesCommutedInYear * electricCarPerMile / gramsToPoundsConversion).toFixed(2);
    const gasolineCarCo2 = (milesCommutedInYear * gasolineCarPerMile / gramsToPoundsConversion).toFixed(2);

    pedalBikeOutput.innerHTML = pedalBikeCo2;
    electricBikeOutput.innerHTML = electricBikeCo2;
    electricCarOutput.innerHTML = electricCarCo2;
    gasolineCarOutput.innerHTML = gasolineCarCo2;

    pedalBiketime.innerHTML = oneWayCommute / pedalBikeSpeed * milesToMinutesConversion + timeTitle;
    electricBiketime.innerHTML  = oneWayCommute / electricBikeSpeed * milesToMinutesConversion + timeTitle;
    electricCartime.innerHTML  = oneWayCommute / electricCarSpeed * milesToMinutesConversion + timeTitle;
    gasolineCartime.innerHTML  = oneWayCommute / gasolineCarSpeed * milesToMinutesConversion + timeTitle;

}

co2Form.onsubmit = calculateCo2;
co2Button.onclick = calculateCo2;

// Co2 Sources:
// https://ebikeshq.com/electric-bikes-environment-carbon-footprint-energy-battery-disposal/
// https://www.cnbc.com/2021/07/26/lifetime-emissions-of-evs-are-lower-than-gasoline-cars-experts-say.html
// https://blog.arcadia.com/biking-to-work-does-it-really-make-a-difference/


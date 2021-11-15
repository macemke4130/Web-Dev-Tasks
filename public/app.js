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

const imageGallery = [ 
    {
        title: "Cycling Deals",
        src: "Cycling_Slider.jpg",
        link: "https://www.eriksbikeshop.com/cycling/bicycles",
        target: "_self",
        titlePosition: "TR"
    },
    {
        title: "Ski Deals",
        src: "Ski_Slider.jpg",
        link: "https://www.eriksbikeshop.com/winter/ski",
        target: "_self",
        titlePosition: "BL"
    },
    {
        title: "Snowboard Deals",
        src: "Snowboard_Slider.jpg",
        link: "https://www.eriksbikeshop.com/winter/snowboard",
        target: "_self",
        titlePosition: "BR"
    },
];

const sliderImage = document.getElementById("slider-image");
const sliderTitle = document.getElementById("slider-title");
const sliderLink = document.getElementById("slider-link");
const sliderImagePrefix = "./images/";
let sliderIndex = 0;

const slider = () => {
    sliderImage.src = sliderImagePrefix + imageGallery[sliderIndex].src;
    sliderTitle.innerHTML = imageGallery[sliderIndex].title;

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

    // sliderTitle.style.top = 

    if (sliderIndex === imageGallery.length - 1) {
        sliderIndex = 0;
    } else {
        sliderIndex++;
    }
}

const sliderSeconds = 1;
const sliderTimer = setInterval(() => {
    slider();
}, sliderSeconds * 1000);
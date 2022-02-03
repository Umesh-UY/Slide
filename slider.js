const slides = document.querySelector(".slide");
var sliderIndex = 1;
const imgs = [
    { src: "/img/slide4.jpg" },
    { src: "/img/slide2.jpg" },
    { src: "/img/slide3.jpg" },
    { src: "/img/slide.jpg" },
    { src: "/img/slide1.jpg" }
];
imgs.map((img) => {
    var imgTag = document.createElement("img");
    imgTag.src = img.src;
    slides.appendChild(imgTag);
});

const nextslide = () => {
    if (sliderIndex < imgs.length) {
        ++sliderIndex;
    } else if (sliderIndex === imgs.length) {
        updateImg();
    }
    updateImg();
};
const nextbtn = document.querySelector(".next");
nextbtn.onclick = nextslide;

const prevslide = () => {
    if (sliderIndex !== 1) {
        --sliderIndex;
    } else if (sliderIndex === 1) {
        updateImg();
    }
    updateImg();
};
const prevbtn = document.querySelector(".prev");
prevbtn.onclick = prevslide;

function updateImg() {
    const activeslide = slides.querySelector("[data-active]");
    slides.children[sliderIndex - 1].dataset.active = true;
    activeslide && delete activeslide.dataset.active;
};
updateImg();
setInterval(function() {
    if (sliderIndex !== imgs.length) {
        ++sliderIndex;
        updateImg();
    } else if (sliderIndex === imgs.length) {
        sliderIndex = 1;
        updateImg();
    }
}, 9000);
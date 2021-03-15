let imgsToLoad = document.querySelectorAll("[data-src]");


const imgOptions = {
    threshold: 0,
    rootMargin: "0 0 50px 0"

    // ^^^^^^ How close you need to be to load the image. 
};

const loadImages = (image) => {
    image.setAttribute("src", image.getAttribute("data-src"));
    image.onload = () => {
        image.removeAttribute("data-src");
    };
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            loadImages(entry.target);
            imgObserver.unobserve(entry.target);
        }
    });
}, loadImages);

imgsToLoad.forEach((img) => {
    imgObserver.observe(img);
});
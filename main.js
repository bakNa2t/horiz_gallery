// ---------------------SCROLL IMAGES -----------------------------

let scrollContainer = document.querySelector(".gallery");
let arleftBtn = document.getElementById("arleftBtn");
let arrightBtn = document.getElementById("arrightBtn");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior = "auto";
});

arrightBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 1000;
}); 

arleftBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 1000;
});

//------------------------POPUP IMAGE------------------------------- 

document.querySelectorAll('.gallery img').forEach(image =>{
    image.onclick = () =>{
        document.querySelector('.popup-image').style.display = 'block';
        document.querySelector('.popup-image img').src = image.getAttribute('src');
    }
})

document.querySelector('.popup-image span').onclick = () =>{
    document.querySelector('.popup-image').style.display = 'none';
}

const popupImage = document.querySelector('.popup-image');

document.addEventListener('click', function(e){
    if(e.target === popupImage){
        document.querySelector('.popup-image').style.display = 'none';
    }
})

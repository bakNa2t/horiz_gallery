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
    scrollContainer.scrollLeft += 1100;
}); 

arleftBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 1100;
})

//------------------------POPUP IMAGE------------------------------- 

document.querySelectorAll('.gallery img').forEach(image =>{
    image.onclick = () =>{
        document.querySelector('.popup_image').style.display = 'block';
        document.querySelector('.popup_image img').src = image.getAttribute('src');
    }
})

document.querySelector('.popup_image span').onclick = () =>{
    document.querySelector('.popup-image').style.display = 'none';
}

const popupImage = document.querySelector('.popup_image');

document.addEventListener('click', function(e){
    if(e.target === popupImage){
        document.querySelector('.popup_image').style.display = 'none';
    }
})

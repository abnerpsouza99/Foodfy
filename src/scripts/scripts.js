const modalOverlay = document.querySelector('.modal-overlay');
const foods = document.querySelectorAll('.foodContent');

for(let food of foods) {
    food.addEventListener("click", function(){
        const imageId = food.getAttribute("id");
        const foodTitle = food.querySelector("h1").textContent
        const foodAuthor = food.querySelector("h2").textContent
        modalOverlay.classList.remove('hidden');
        modalOverlay.classList.add('active');
        modalOverlay.querySelector("img").src = `/public/assets/${imageId}.png`;
        modalOverlay.querySelector("h1").innerHTML = foodTitle;
        modalOverlay.querySelector("h2").innerHTML = foodAuthor;
    })
}

document.querySelector('#closeModal').addEventListener("click", function(){
    modalOverlay.classList.remove('active');
    modalOverlay.classList.add('hidden');
})
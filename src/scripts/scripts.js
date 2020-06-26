const modalOverlay = document.querySelector('.modal-overlay');
const foods = document.querySelectorAll('.foodContent');

for(let food of foods) {
    food.addEventListener("click", function(){
        let foodId = food.getAttribute("id")
        window.location.href = `/foods/${foodId}`
    })
}

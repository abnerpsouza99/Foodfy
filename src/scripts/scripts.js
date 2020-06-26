const modalOverlay = document.querySelector('.modal-overlay');
const foods = document.querySelectorAll('.foodContent');

for (let i = 0; i < foods.length; i++) {
	foods[i].addEventListener('click', function () {
		
		window.location.href=`/foods/${i}`
	});
}
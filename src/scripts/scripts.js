
const p1 = document.querySelector('.p-ingredients')
const p2 = document.querySelector('.p-preparation')
const p3 = document.querySelector('.p-information')
const buttons = document.querySelectorAll('button')
let foods = document.querySelectorAll('.foodContent');

for (let i = 0; i < foods.length; i++) {
	foods[i].addEventListener('click', function () {
		
		window.location.href=`/foods/${i}`
	});
}

for (let button of buttons){
    button.addEventListener('click', function(){
        if(button.innerHTML == "Esconder"){  
            button.innerHTML = "Mostrar" 
        }else{
            button.innerHTML = "Esconder"
        }
    })
}

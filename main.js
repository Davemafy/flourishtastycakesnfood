const btn = document.querySelector("[href='#sec2']")
const indicator = document.querySelector('#indicator')
btn.addEventListener('click', slide)

function slide(e){
	
	indicator.classList.toggle('slide')
}

 
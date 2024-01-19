const ans_divs = document.querySelectorAll('.answer-div');
console.log(ans_divs)
const plusbuttons = document.querySelectorAll('.plus')
console.log(plusbuttons)
const minusbuttons = document.querySelectorAll('.minus')
console.log(minusbuttons)
for(let i = 0;i< plusbuttons.length; i++) {
    plusbuttons[i].addEventListener('click',() =>{
        ans_divs[i].classList.remove("hiding")
        plusbuttons[i].classList.add("hiding")
        minusbuttons[i].classList.remove("hiding")
    })
}
for(let j = 0; j< minusbuttons.length; j++){
    minusbuttons[j].addEventListener('click',()=>{
        ans_divs[j].classList.add("hiding")
        plusbuttons[j].classList.remove("hiding")
        minusbuttons[j].classList.add("hiding")
    })
}


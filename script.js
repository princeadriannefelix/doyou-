
const yes = document.getElementById('yesbtn')
const no = document.getElementById('nobtn')

const t = document.querySelector(".text")

function changePos (x, y){
    no.style.position = 'absolute'
    no.style.left = x+'px'
    no.style.top = y+'px'
}

yes.addEventListener('click', () => {
    t.innerHTML = "Awww love you moree <3"
    no.disabled = true;
    yes.disabled = true;
    console.log("click yes")
})

no.addEventListener('click', () => {
    const x = Math.floor((Math.random() * 400) + -100);
    const y = Math.floor((Math.random() * 400) + 1);
    changePos(x, y)
    console.log("click no")
})

document.querySelector('#guess').addEventListener('click', giveFlag)
localStorage.setItem('wins', 0)
localStorage.setItem('played', 0)

function giveFlag(){
let random = Math.floor(Math.random()*250)
let numPlayed = Number(localStorage.getItem('played'))
numPlayed += 1
let numWon = Number(localStorage.getItem('wins'))

fetch('https://restcountries.com/v3.1/all')
.then(res => res.json())
.then(data => {
    console.log(data)
    
    document.querySelector('img').src = data[random].flags.png
    document.querySelector('#guess2').addEventListener('click', giveAnswer)

    function giveAnswer(){

            document.querySelector('span').innerHTML = data[random].name.common  
            
       let answer = document.querySelector('input').value.toLocaleLowerCase()
       if (answer === data[random].name.common.toLocaleLowerCase()){
           document.querySelector('h2').innerText = 'Correctamundo!!!'
           numWon += 1
       }else{
        document.querySelector('h2').innerText = 'Sorry!!!'
       }
    }    
    document.querySelector('h3').innerHTML = `${numWon} / ${numPlayed}`
} )
.catch(err => {
    console.log(`error ${err}`) } );
}


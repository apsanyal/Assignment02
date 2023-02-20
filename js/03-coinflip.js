let coinFlip = Math.round(Math.random())

let choice = prompt("Pick one: Heads or Tails").toLowerCase()

console.log(coinFlip, choice) // use to determine if messages are generating correctly, will show up in console but not as a message to user


if (coinFlip < 1) {
    //coin flip is heads
    if (choice == 'heads') {
        alert('The flip was heads and you chose heads...you win!')
    } else if ( choice=='tails'){
        alert('The flip was heads but you chose tails...you lose!')
    }

} else if ( coinFlip > 0 ) {
    //coin flip is tails
    if (choice == 'heads') {
        alert('The flip was tails but you chose heads...you lose!')
    }else if ( choice== 'tails'){
        alert('The flip was tails and you chose tails...you win!')
    }

}
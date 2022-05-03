function writeCards(array, eventName){
    let thankYouCards = []
    for(let i = 0; i < array.length; i++){ 
        console.log(thankYouCards.push(`Thank you, ${array[i]}, for the wonderful ${eventName} gift!`))
        debugger
    }
     return thankYouCards
}

let i
function countDown(i){
    while (i>=0){
    console.log(i)
    i--
}
}
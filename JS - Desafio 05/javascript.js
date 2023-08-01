
const raffle = document.getElementById("raffle")


function generateNumber(){

    const numberFrom = Math.ceil(document.getElementById("numberFrom").value)
    const numberTo = Math.floor(document.getElementById("numberTo").value)

    alert(Math.floor((Math.random() * (numberTo - numberFrom + 1)) + numberFrom))
}

raffle.addEventListener("click", generateNumber);



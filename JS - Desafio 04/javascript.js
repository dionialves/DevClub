
const convertFrom = document.getElementById("convertFrom");
const convertTo = document.getElementById("convertTo");
const imgConvertFrom = document.getElementById("imgConvertFrom");
const imgConvertTo = document.getElementById("imgConvertTo");
const textCoinFrom = document.getElementById("textCoinFrom");
const textCoinTo = document.getElementById("textCoinTo");
const valueCoinFrom = document.getElementById("valueCoinFrom");
const valueCoinTo = document.getElementById("valueCoinTo");

const coin = {
    real: {
        code: "R$",
        name: "Real Brasileiro",
        shortName: "Real",
        pathImage: "./img/real.png"
    },
    dolar: {
        code: "US$",
        name: "Dolar Americano",
        shortName: "Dolar",
        pathImage: "./img/dolar.png"
    }
}

const listOfOptions = [""];
const listImage = [""];
const listOfCoins = Object.keys(coin);

createLists()

addOptions(listOfOptions, convertFrom, 1)
addOptions(listOfOptions, convertTo, 2)

convertFrom.addEventListener('change', changeValueFrom);
convertTo.addEventListener('change', changeValueTo);

function createLists(){

    
    for (let i=0; i < listOfCoins.length; i++){
        listOfOptions.push(coin[listOfCoins[i]].code + " " + coin[listOfCoins[i]].name)
        listImage.push(coin[listOfCoins[i]].pathImage)
    }
}

function addOptions(list, select, initialValue){

    for (let i=0; i < list.length; i++) {
    
        const option = document.createElement('option');
        option.value = i;
        option.text = list[i]
    
        select.appendChild(option);
        select.value = initialValue   
    }
}

function changeValueFrom(){
    if (convertFrom.selectedIndex != 0){
        imgConvertFrom.src = listImage[convertFrom.selectedIndex]
        textCoinFrom.textContent = listOfOptions[convertFrom.selectedIndex]
        valueCoinFrom.textContent = coin[listOfCoins[convertFrom.selectedIndex-1]].code + " 0,00"
    
        if (convertFrom.selectedIndex == convertTo.selectedIndex) {
            convertTo.selectedIndex = 0;
        }
    }
}

function changeValueTo(){
    if (convertFrom.selectedIndex != 0){
        imgConvertTo.src = listImage[convertTo.selectedIndex]
        textCoinTo.textContent = listOfOptions[convertTo.selectedIndex]
        valueCoinTo.textContent = coin[listOfCoins[convertTo.selectedIndex-1]].code + " 0,00"
    
        if (convertFrom.selectedIndex == convertTo.selectedIndex) {
            convertFrom.selectedIndex = 0;
        }
    }
}
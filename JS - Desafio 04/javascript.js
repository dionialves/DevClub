
const convertFrom = document.getElementById("convertFrom");
const convertTo = document.getElementById("convertTo");
const value = document.getElementById("value");
const buttonConverter = document.getElementById("buttonConverter");
const imgConvertFrom = document.getElementById("imgConvertFrom");
const imgConvertTo = document.getElementById("imgConvertTo");
const textCoinFrom = document.getElementById("textCoinFrom");
const textCoinTo = document.getElementById("textCoinTo");
const valueCoinFrom = document.getElementById("valueCoinFrom");
const valueCoinTo = document.getElementById("valueCoinTo");

let oldValueInSelectFrom = 0;
let oldValueInSelectTo = 1;

const coin = {
    real: {
        code: "R$",
        name: "Real Brasileiro",
        shortName: "Real",
        pathImage: "./img/real.png",
        conversionRate: 4.73
    },
    dolar: {
        code: "US$",
        name: "Dolar Americano",
        shortName: "Dolar",
        pathImage: "./img/dolar.png",
        conversionRate: 1
    },
    euro: {
        code: "€",
        name: "Euro",
        shortName: "Euro",
        pathImage: "./img/euro.png",
        conversionRate: 0.91
    },
    libra: {
        code: "£",
        name: "Libra",
        shortName: "Libra Esterlina",
        pathImage: "./img/libra.png",
        conversionRate: 0.78
    },
    bitcoin: {
        code: "₿",
        name: "Bitcon",
        shortName: "Bitcoin",
        pathImage: "./img/bitcoin.png",
        conversionRate: 0.000034
    }
};


const listOfCoins = Object.keys(coin);

const listOfOptions = createListOfCoins(listOfCoins);
const listImage = createListImageOfCoins(listOfCoins);

addOptions(listOfOptions, convertFrom, 0);
addOptions(listOfOptions, convertTo, 1);

convertFrom.addEventListener('change', changeValueFrom);
convertTo.addEventListener('change', changeValueTo);
buttonConverter.addEventListener('click', convertCoin);

function createListOfCoins(CoinsInObjects){

    list = [];
    for (let i=0; i < CoinsInObjects.length; i++){
        list.push(coin[CoinsInObjects[i]].code + " " + coin[CoinsInObjects[i]].name)
    };

    return list;
};

function createListImageOfCoins(CoinsInObjects){

    list = [];
    for (let i=0; i < CoinsInObjects.length; i++){
        list.push(coin[CoinsInObjects[i]].pathImage);
    }

    return list;
};

function addOptions(list, select, initialValue){

    for (let i=0; i < list.length; i++) {
    
        const option = document.createElement('option');
        option.value = i;
        option.text = list[i];
    
        select.appendChild(option);
        select.value = initialValue;
    };
};

function changeValueFrom(){

    if (convertFrom.selectedIndex == convertTo.selectedIndex) {
        invertValuesBetweenFromTo();
    }
    oldValueInSelectFrom = convertFrom.selectedIndex;
    oldValueInSelectTo = convertTo.selectedIndex;
    updateResultConvertion();
};

function changeValueTo(){

    if (convertFrom.selectedIndex == convertTo.selectedIndex) {
        invertValuesBetweenFromTo();
    }
    oldValueInSelectFrom = convertFrom.selectedIndex;
    oldValueInSelectTo = convertTo.selectedIndex;
    updateResultConvertion();
};

function invertValuesBetweenFromTo(){
    convertFrom.selectedIndex = oldValueInSelectTo;
    convertTo.selectedIndex = oldValueInSelectFrom;

    oldValueInSelectFrom = convertFrom.selectedIndex;
    oldValueInSelectTo = convertTo.selectedIndex;
};

function updateResultConvertion(){
    imgConvertFrom.src = listImage[convertFrom.selectedIndex];
    textCoinFrom.textContent = listOfOptions[convertFrom.selectedIndex];
    valueCoinFrom.textContent = coin[listOfCoins[convertFrom.selectedIndex]].code + " 0,00";

    imgConvertTo.src = listImage[convertTo.selectedIndex];
    textCoinTo.textContent = listOfOptions[convertTo.selectedIndex];
    valueCoinTo.textContent = coin[listOfCoins[convertTo.selectedIndex]].code + " 0,00";
};

function convertCoin (){
    console.log(value.value)
    console.log(coin[listOfCoins[convertFrom.selectedIndex]].conversionRate)


    result =  coin[listOfCoins[convertTo.selectedIndex]].conversionRate / coin[listOfCoins[convertFrom.selectedIndex]].conversionRate
    result = result * value.value
    console.log(result.toFixed(2))
}
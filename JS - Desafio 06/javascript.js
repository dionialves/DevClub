let p = document.querySelector('p')
let input = document.querySelector('input')
let button = document.querySelector('button')

const contacts = [
    {name: 'Rodolfo', number: '(19) 94343-3134'},
    {name: 'Paulo', number: '(12) 99964-0598'},
    {name: 'Aline', number: '(14) 98878-5689'},
    {name: 'Maria', number: '(21) 99958-3698'},
]

function searchContact(){
    let result = ""
    p.innerHTML = ""

    const name = input.value.trim()

    for(const nameInContacts of contacts){
        
        if(nameInContacts.name.toLowerCase() === name.toLowerCase()){
            p.innerHTML = `${nameInContacts.name} foi encontado na lista, seu telefone é: ${nameInContacts.number}`
            break
        }else if(name){
            p.innerHTML  = `Infelismento o nome ${name} não foi encontrado!`
        }
    }

    input.value = ""
}

button.addEventListener('click', searchContact)
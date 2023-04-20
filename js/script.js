let doc = document
let buttonSpaceGrey = doc.querySelector('.space-grey')
let buttonWhite = doc.querySelector('.white')
let image = doc.querySelector('.mbp-image')
let color = doc.querySelector('.color')
let imageOne = './images/white.jpg'
let imageTwo = './images/spacegrey.jpg'

let background = (btnOne, btnTwo) =>{
    btnOne.style.backgroundColor = '#0071E3'
    btnTwo.style.backgroundColor = '#CFE7FF'
}

buttonWhite.onclick = () =>{
    image.setAttribute('src', imageOne)
    color.textContent = "White"
    background(buttonWhite, buttonSpaceGrey)
}
buttonSpaceGrey.onclick = () =>{
    image.setAttribute('src', imageTwo)
    color.textContent = "Space Gray"
    background(buttonSpaceGrey, buttonWhite)
}

let storageOne = doc.querySelector('.storage-one')
let storageTwo = doc.querySelector('.storage-two')
let storageThree = doc.querySelector('.storage-three')
let storageFour = doc.querySelector('.storage-four')
let price = doc.querySelector('.price')
let innicialPrice = 1999
let priceOne = 200
let priceTwo = 600
let priceThree = 1200

let borderColor = (btnOne, btnTwo) =>{
    btnOne.style.borderColor = '#0071E3'
    btnTwo.style.borderColor = '#CFE7FF'
}

storageOne.onclick = () =>{
    borderColor(storageOne, storageFour)
    borderColor(storageOne, storageThree)
    borderColor(storageOne, storageTwo)
    let firstPart =`$${innicialPrice}`.toString().slice(0, 2)
    let secondPart = `$${innicialPrice}`.toString().slice(2, 7)
    secondPart = firstPart+','+secondPart
    price.textContent = secondPart

    
}
storageTwo.onclick = () =>{
    borderColor(storageTwo, storageOne)
    borderColor(storageTwo, storageThree)
    borderColor(storageTwo, storageFour)
    let firstPart =`$${innicialPrice + priceOne}`.toString().slice(0, 2)
    let secondPart = `$${innicialPrice + priceOne}`.toString().slice(2, 7)
    secondPart = firstPart+','+secondPart
    price.textContent = secondPart
}
storageThree.onclick = () =>{
    borderColor(storageThree, storageTwo)
    borderColor(storageThree, storageOne)
    borderColor(storageThree, storageFour)
    let firstPart =`$${innicialPrice + priceTwo}`.toString().slice(0, 2)
    let secondPart = `$${innicialPrice + priceTwo}`.toString().slice(2, 7)
    secondPart = firstPart+','+secondPart
    price.textContent = secondPart
}
storageFour.onclick = () =>{
    borderColor(storageFour, storageThree)
    borderColor(storageFour, storageOne)
    borderColor(storageFour, storageTwo)
    let firstPart =`$${innicialPrice + priceThree}`.toString().slice(0, 2)
    let secondPart = `$${innicialPrice + priceThree}`.toString().slice(2, 7)
    secondPart = firstPart+','+secondPart
    price.textContent = secondPart
}


let doc = document
let buttonSpaceGrey = doc.querySelector('.space-grey')
let buttonWhite = doc.querySelector('.white')
let image = doc.querySelector('.mbp-image')
let color = doc.querySelector('.color')
let imageOne = './images/white.jpg'
let imageTwo = './images/spacegrey.jpg'
let price = doc.querySelector('.price')

let background = (btnOne, btnTwo) =>{
    btnOne.style.backgroundColor = '#0071E3'
    btnTwo.style.backgroundColor = '#CFE7FF'
}
if(color.textContent === "White"){
    buttonWhite.style.backgroundColor = '#0071E3'
}else{
    buttonSpaceGrey.style.backgroundColor = '#CFE7FF'
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
let storageButtonsCont = doc.querySelectorAll('.button')
storageButtonsCont[0].classList.add('active')
storageButtonsCont.forEach(item => {
    // Добавляем обработчик события 'click'
    item.addEventListener('click', () => {
    // Удаляем класс 'active' у всех кнопок
    storageButtonsCont.forEach(item => {
    item.classList.remove('active');
    });
    // Добавляем класс 'active' текущей выбранной кнопке
    item.classList.add('active');
    let getValue = item.querySelector('.active')
    let  value = item.value
    if(value == 0){
        price.textContent = '$1,999'
    }else if (value == 200) {
        price.textContent = '$2,199'
    } else if(value == 600){
        price.textContent = '$2,599'
    } else if(value == 1200)
        price.textContent = '$3,199'
    });
    });


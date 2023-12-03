
const card_num = document.getElementById('card_num')
console.log(card_num);
const card_hold = document.getElementById('card_hold')
const cardholder_card = document.getElementById('cardholder')
const cvc = document.getElementById('cvc')
const cvc_card = document.querySelector('.cvc input')
const exp = document.getElementsByClassName('exp')
const exp_card = document.querySelectorAll('.expires input')

card_num.addEventListener('input', (e) => {
    let temp = e.target.value
    // console.log(temp.substring(0,4));
    let inp1 = document.querySelector('.card_number input:nth-of-type(1)')
    inp1.value = temp.substring(0, 4)
    inp1.nextElementSibling.value = temp.substring(4, 8)
    inp1.nextElementSibling.nextElementSibling.value = temp.substring(8, 12)
    inp1.nextElementSibling.nextElementSibling.nextElementSibling.value = temp.substring(12, 16)

    e.target.value = e.target.value.substring(0, 16)
})

card_hold.addEventListener('input', (e) => {
    let _inp = e.target.value
    cardholder_card.value = _inp
})

cvc.addEventListener('input', (e) => {
    let _inp = e.target.value
    cvc_card.value = _inp.substring(0, 3)
    cvc.value = _inp.substring(0, 3)
})

exp[0].addEventListener('input', (e) => {
    // console.log(exp_card[0]);
    let _inp = e.target.value
    exp_card[0].value = _inp
})
exp[1].addEventListener('input', (e) => {
    // console.log(exp_card[0]);
    let _inp = e.target.value
    exp_card[1].value = _inp
})

/****/
document.getElementsByClassName('card')[0].addEventListener('mousemove', (e) => {
    document.getElementsByClassName('card')[0].style.transition = '0s'

    // console.log(e);
    let x = (e.offsetX) / 10
    let w = (e.target.clientWidth) / 10

    let y = (e.offsetY) / 10
    let h = (e.target.clientHeight) / 10


    document.getElementsByClassName('card')[0].style.transform = "perspective(800px) rotateY(" + (x - (w / 2)) + "deg) rotateX(" + (y - (h / 2)) + "deg)"

})

document.getElementsByClassName('card')[0].addEventListener('mouseleave', () => {
    document.getElementsByClassName('card')[0].style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg)"
    document.getElementsByClassName('card')[0].style.transition = '1s'
})
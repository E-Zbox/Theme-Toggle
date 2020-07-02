var radios = document.querySelectorAll("input[name=theme]")
var radioArray = new Array(radios)
var html = document.querySelector('html')

radioArray[0].forEach(radio=> {
    radio.addEventListener('click', ()=> {
        console.log(radio.id)
        html.setAttribute('data-theme', `${radio.id}`)
        console.log(html.getAttribute('data-theme'))
    })
})
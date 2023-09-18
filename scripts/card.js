let properties = []


const Mdiv = document.createElement('div')
Mdiv.classList.add('card')
const cardPic = document.createElement('div')
cardPic.classList.add('card-pic')
const carddn = document.createElement('div')
carddn.classList.add('card-dn')
const htwo = document.createElement('h2')
const hthree = document.createElement('h3')
const hfour = document.createElement('h4')
const cardft = document.createElement('div')
cardft.classList.add('card-ft')

const ft1 = document.createElement('div')
ft1.classList.add('ft1')
const svg = document.createElement('img')

const fh4 = document.createElement('h4')


const ft2 = document.createElement('div')
ft2.classList.add('ft2')
const svg2 = document.createElement('img')

const fh42 = document.createElement('h4')


const ft3 = document.createElement('div')
ft3.classList.add('ft3')
const svg3 = document.createElement('img')

const fh43 = document.createElement('h4')



Mdiv.appendChild(cardPic)
Mdiv.appendChild(carddn)
carddn.appendChild(htwo)
carddn.appendChild(hthree)
carddn.appendChild(hfour)
Mdiv.appendChild(cardft)
cardft.appendChild(ft1)
cardft.appendChild(ft2)
cardft.appendChild(ft3)
ft1.appendChild(svg)
ft1.appendChild(fh4)
ft2.appendChild(svg2)
ft2.appendChild(fh42)
ft3.appendChild(svg3)
ft3.appendChild(fh43)

const addCard = () => {
    properties.forEach((Element) => {

        const image = document.createElement('img')
        image.style.height = '271px'
        // const blob = new Blob([Element.drag]);
        const url = URL.createObjectURL(Element.drag)
        image.src = url

        cardPic.appendChild(image)





        htwo.innerText = Element.address
        hthree.innerText = Element.room
        hfour.innerText = Element.price
        svg.src = './imgs/s.svg'
        fh4.innerText = '4'
        svg2.src = './imgs/t.svg'
        fh42.innerText = '2'
        svg3.src = './imgs/u.svg'
        fh43.innerText = '2'
    })
}




// addCard()
// document.querySelector('.lists').appendChild(Mdiv)



const form = document.querySelector('.add-props form')
const btn = document.querySelector('.bn')

btn.addEventListener('click', (e) => {
    e.preventDefault()


    const name = document.querySelector('#name')
    const address = document.querySelector('#address')
    const unit = document.querySelector('#unit')
    const city = document.querySelector('#city')
    const state = document.querySelector('#state')
    const room = document.querySelector('#room')
    const price = document.querySelector('#price')
    const description = document.querySelector('textarea')
    const drag = document.querySelector('#photo')

    const data = {
        name: name.value,
        address: address.value,
        unit: unit.value,
        city: city.value,
        state: state.value,
        room: room.value,
        price: price.value,
        description: description.value,
        drag: drag.files[0]
    }
    name.value = ''
    address.value = ''
    unit.value = ''
    city.value = ''
    state.value = ''
    room.value = ''
    price.value = ''
    description.value = ''
    drag.value = ''

    properties.push(data)
    document.querySelectorAll('.card').innerHTML = ''
    addCard()

})

document.querySelector('.lists').appendChild(Mdiv)

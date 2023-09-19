let properties = [
    /* {
        address: "2578 Folsom street, san francisco, CA, 94110",
        room: "Private Room",
        price: "$1200/month",
        drag: "./imgs/room2.png"
    },
    {
        address: "2578 Folsom street, san francisco, CA, 94110",
        room: "Private Room",
        price: "$1200/month",
        drag: "./imgs/room2.png"
    } */
]
const lists = document.querySelector('.lists')

const addCard = () => {
    lists.innerHTML = ''
    properties.forEach((Element) => {
        const Mdiv = document.createElement('div')
        Mdiv.setAttribute('class', 'card')
        const cardPic = document.createElement('div')
        cardPic.setAttribute('class', 'card-pic')
        const image = document.createElement('img')
        image.style.height = '271px'
        // const blob = new Blob([Element.drag]);
        const url = URL.createObjectURL(Element.drag)
        image.src = url

        cardPic.appendChild(image)
        const carddn = document.createElement('div')
        carddn.setAttribute('class', 'card-dn')
        const htwo = document.createElement('h2')
        htwo.innerText = Element.address
        const hthree = document.createElement('h3')
        hthree.innerText = Element.room
        const hfour = document.createElement('h4')
        hfour.innerText = Element.price
        const cardft = document.createElement('div')
        cardft.setAttribute('class', 'card-ft')
        const ft1 = document.createElement('div')
        ft1.setAttribute('class', 'ft1')
        const svg = document.createElement('img')
        svg.src = './imgs/s.svg'
        const fh4 = document.createElement('h4')
        fh4.innerText = '4'
        const ft2 = document.createElement('div')
        ft2.setAttribute('class', 'ft2')
        const svg2 = document.createElement('img')
        svg2.src = './imgs/t.svg'
        const fh42 = document.createElement('h4')
        fh42.innerText = '2'
        const ft3 = document.createElement('div')
        ft3.setAttribute('class', 'ft3')
        const svg3 = document.createElement('img')
        svg3.src = './imgs/u.svg'
        const fh43 = document.createElement('h4')
        fh43.innerText = '2'
        ft1.appendChild(svg)
        ft1.appendChild(fh4)
        ft2.appendChild(svg2)
        ft2.appendChild(fh42)
        ft3.appendChild(svg3)
        ft3.appendChild(fh43)
        cardft.appendChild(ft1)
        cardft.appendChild(ft2)
        cardft.appendChild(ft3)
        carddn.appendChild(htwo)
        carddn.appendChild(hthree)
        carddn.appendChild(hfour)
        Mdiv.appendChild(cardPic)
        Mdiv.appendChild(carddn)
        Mdiv.appendChild(cardft)

        lists.appendChild(Mdiv)

    })
}
addCard()
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
    addCard()

})
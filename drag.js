const droparea = document.querySelector('.droparea')
droparea.addEventListener('dragover', (e) => {
    e.preventDefault()
})
droparea.addEventListener('drop', (e) => {
    e.preventDefault

    const image = e.dataTransfer.files[0]
    const type = image.type

    if (
        type == "image/png" || type == "image/jpg" || type == "image.jpeg"
    ) {
        return upload(image)
    } else {
        return false
    }
})
const upload = (image) => {
    droparea.innerText = 'added' + image.name
}
const app = document.getElementById("root")

const logo = document.createElement('img')
logo.src = 'logo.png'

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(logo)
app.appendChild(container)

fetch('https://ghibliapi.herokuapp.com/films')
.then(responce =>{
    return responce.json()
})
.then(films => {
    films.forEach(film => {

        const card = document.createElement('div')
        card.setAttribute('class', 'card')

        const h1 = document.createElement('h1')
        h1.textContent = film.title

        const p = document.createElement('p')
        film.description = film.description.substring(0, 300)
        p.textContent = `${film.description}...`

        container.appendChild(card)

        card.appendChild(h1)
        card.appendChild(p)

    });

})

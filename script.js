import { books } from "./deckare"

const cardGrid = document.querySelector('.card-grid')

//console.log('Deckare', books, cardGrid)

books.forEach(book =>{
	const card = document.createElement('section')
	const cardTitle = document.createElement('h3')
	const cardAuthor = document.createElement('p')
	const cardPrice = document.createElement('p')

	card.classList.add('card')

	cardTitle.innerText = book.title
	cardAuthor.innerText = book.author
	cardPrice.innterText = book.price

	card.append(cardPrice)
})
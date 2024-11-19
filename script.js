import { books } from "./deckare.js";

const cardGrid = document.querySelector('.card-grid');

//console.log('Deckare', books, cardGrid)

books.forEach(book => {
	const card = document.createElement('section');
	const cardTitle = document.createElement('h3');
	const cardAuthor = document.createElement('p');
	const cardPrice = document.createElement('p');

	card.classList.add('card');

	cardTitle.innerText = book.title;
	cardAuthor.innerText = book.author;
	cardPrice.innerText = book.price;

	card.append(cardTitle, cardPrice, cardAuthor);
	cardGrid.append(card);

	console.log(card)
})
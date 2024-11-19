import { books } from "./deckare.js";

const cardGrid = document.querySelector('.card-grid');

//console.log('Deckare', books, cardGrid)

books.forEach(book => {
	const card = document.createElement('section');
	const cardTitle = document.createElement('h3');
	const cardAuthor = document.createElement('p');
	const cardPrice = document.createElement('p');
	const borrowButton = document.createElement('button');

	card.classList.add('card');

	cardTitle.innerText = book.title;
	cardAuthor.innerText = book.author;
	cardPrice.innerText = book.price;
	borrowButton.innerText = 'Låna'

	borrowButton.addEventListener('click', () =>  {
		card.remove()
	})
	

	card.append(cardTitle, cardPrice, cardAuthor, borrowButton);
	cardGrid.append(card);

	console.log(card)
})

document.getElementById('flik1').addEventListener('click', function(){
	openTab('flik1');
});
document.getElementById('flik2').addEventListener('click', function(){
	openTab('flik2');
});
document.getElementById('flik3').addEventListener('click', function(){
	openTab('flik3');
});
document.getElementById('flik4').addEventListener('click', function(){
	openTab('flik4');
});


// const cardPriceButton = document.querySelector('#card-price-button')
// cardPriceButton.addEventListener('click', () =>{
	//öka priset 10% -> modifiera listan med lista.map eller vanlig for-loop
	//ta bort alla cards
	//lägg till cards igen - kan vi använda en funktion?
	// for (let i = 0; i < books.price; i++){
		// books[i].price *= 0.10;
	// }
	// console.log(books);
// }
// )


// const cardPriceButton = document.querySelector('#card-price-button')
// cardPriceButton.addEventListener('click', () => {
// 	let expensiveBooks = books.map(item=> {
// 		return{
// 			...item,
// 			price: item.price * 1.10
// 		}}
// 		,console.log ('10% dyrare, expensiveBooks')
// 	)})


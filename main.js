var cardsArray = [
	{
		name: "baloon",
		img :"images/baloon.jpg"
	},
	{
		name: "baloon",
		img :"images/baloon.jpg"
	},
	{
		name: "boat",
		img :"images/boat.jpg"
	},
	{
		name: "boat",
		img :"images/boat.jpg"
	},
	{
		name: "bycicle",
		img :"images/bycicle.jpg"
	},
	{
		name: "bycicle",
		img :"images/bycicle.jpg"
	},
	{
		name: "car",
		img :"images/car.jpg"
	},
	{
		name: "car",
		img :"images/car.jpg"
	},
	{
		name: "flight",
		img :"images/flight.jpg"
	},
	{
		name: "flight",
		img :"images/flight.jpg"
	},
	{
		name: "helicop",
		img :"images/helicop.jpg"
	},
	{
		name: "helicop",
		img :"images/helicop.jpg"
	},
	{
		name: "moto",
		img :"images/moto.jpg"
	},
	{
		name: "moto",
		img :"images/moto.jpg"
	},
	{
		name: "plane",
		img :"images/plane.jpg"
	},
	{
		name: "plane",
		img :"images/plane.jpg"
	}
]

var template = document.querySelector("#template")

var showTemplate = function (){
	for(var i = 0; i < cardsArray.length; i++){
		var cards = document.createElement('img');		
		cards.setAttribute('src',"images/back.jpg")
		cards.setAttribute('data-id',i)
		//card.evenListener('click',rotateCard)
		template.appendChild(cards)
	}
}

showTemplate()


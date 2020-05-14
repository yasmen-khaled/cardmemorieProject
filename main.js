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
 
 cardsArray.sort(() => 0.5 - Math.random())

 var cardrot = [];
 var cardsArrayId = [];
 var cardMatched = []
var template = document.querySelector("#template")
var score = document.querySelector("#score")

var showTemplate = function (){
	for(var i = 0; i < cardsArray.length; i++){
		var cards = document.createElement('img');		
		cards.setAttribute('src',"images/back.jpg")
		cards.setAttribute('data-id',i)
		cards.addEventListener('click',rotateCard)
		template.appendChild(cards)
	}
}

var rotateCard = function  (){
	var cardId = this.getAttribute('data-id');
	cardrot.push(cardsArray[cardId].name)
	cardsArrayId.push(cardId)
	this.setAttribute('src', cardsArray[cardId].img)
	 if(cardrot.length === 2 ){
	 	setTimeout(checkTwoCard, 500)

	 }
}

var checkTwoCard = function () {
	var card = document.querySelectorAll('img')
	var cardOne = cardsArrayId[0];
	var cardTwo = cardsArrayId[1];
	console.log(card[cardOne])
	if(cardrot[0] !== cardrot[1]){
		card[cardOne].setAttribute('src','images/back.jpg')
		card[cardTwo].setAttribute('src','images/back.jpg')
		
	} else {
		cardMatched.push(cardrot)
		
	}
	cardrot = [];
 	cardsArrayId = [];
 	score.textContent = cardMatched.length;
 	if(cardMatched.length === cardsArray.length/2){
 		score.textContent = "Bravo !!";
 	}
}



showTemplate()

var cardsArray = [
	{
		name: "flower1",
		img :"images/flower1.png"
	},
	{
		name: "flower1",
		img :"images/flower1.png"
	},
	{
		name: "flower2",
		img :"images/flower2.png"
	},
	{
		name: "flower2",
		img :"images/flower2.png"
	},
	{
		name: "flower3",
		img :"images/flower3.png"
	},
	{
		name: "flower3",
		img :"images/flower3.png"
	},
	{
		name: "flower4",
		img :"images/flower4.png"
	},
	{
		name: "flower4",
		img :"images/flower4.png"
	},
	{
		name: "flower5",
		img :"images/flower5.png"
	},
	{
		name: "flower5",
		img :"images/flower5.png"
	},
	{
		name: "flower6",
		img :"images/flower6.png"
	},
	{
		name: "flower6",
		img :"images/flower6.png"
	},
	{
		name: "flower7",
		img :"images/flower7.png"
	},
	{
		name: "flower7",
		img :"images/flower7.png"
	},
	{
		name: "flower8",
		img :"images/flower8.png"
	},
	{
		name: "flower8",
		img :"images/flower8.png"
	}
]
var cardsArray2 = [
	{
		name: "1",
		img :"images/3.jpg"
	},
	{
		name: "1",
		img :"images/3.jpg"
	},
	{
		name: "2",
		img :"images/2.jpg"
	},
	{
		name: "2",
		img :"images/2.jpg"
	},
	{
		name: "3",
		img :"images/4.jpg"
	},
	{
		name: "3",
		img :"images/4.jpg"
	},
	{
		name: "4",
		img :"images/5.jpg"
	},
	{
		name: "4",
		img :"images/5.jpg"
	},
	{
		name: "5",
		img :"images/6.jpg"
	},
	{
		name: "5",
		img :"images/6.jpg"
	},
	{
		name: "6",
		img :"images/7.jpg"
	},
	{
		name: "6",
		img :"images/7.jpg"
	},
	{
		name: "7",
		img :"images/8.jpg"
	},
	{
		name: "7",
		img :"images/8.jpg"
	},
	{
		name: "8",
		img :"images/9.jpg"
	},
	{
		name: "8",
		img :"images/9.jpg"
	}
]

 
 var cardrot = [];
 var cardsArrayId = [];
 var cardMatched = []
var template = document.querySelector("#template")
var score = document.querySelector("#score")

cardsArray2.sort(() => 0.5 - Math.random())
cardsArray.sort(() => 0.5 - Math.random())

var showTemplate = function (){
	for(var i = 0; i < cardsArray.length; i++){
		var cards = document.createElement('img');
		console.log(cardsArray[0].name.substring(0, 6))	
		if(cardsArray[0].name.substring(0, 6) !== "flower" ){
			cards.setAttribute('src',"images/back2.jpg")
		} else {
			cards.setAttribute('src',"images/back.jpg")
		}							
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
		
		if(cardsArray[0].name.substring(0, 6) !== "flower"){
			card[cardOne].setAttribute('src','images/back2.jpg');
			card[cardTwo].setAttribute('src','images/back2.jpg');
		} else {
			card[cardOne].setAttribute('src','images/back.jpg');
			card[cardTwo].setAttribute('src','images/back.jpg');
		}
		
		// card[cardOne].setAttribute("class",'red');
		// card[cardTwo].setAttribute("class",'red');

		
	} else {
		cardMatched.push(cardrot)
		card[cardOne].setAttribute('class','green')
		card[cardTwo].setAttribute('class','green')
	}
	
	cardrot = [];
 	cardsArrayId = [];
       card[cardOne].classList.remove("animate");
	   card[cardTwo].classList.remove("animate");
 	score.textContent = cardMatched.length;
 	if(cardMatched.length === cardsArray.length/2){
 		score.textContent = "Bravo !!";
 	}
}


var card = document.querySelectorAll('img')
function animateCard() {

		console.log('test',this)
		this.classList.toggle('animate')
}
card.forEach(function(card){
	card.addEventListener('click',animateCard)

})




//overlay part !!

var divInput  = document.createElement('div');
var inputName = document.createElement('input');
var button1   = document.createElement('button');
var button2   = document.createElement('button');
var textButton1 = document.createTextNode("flower")
var textButton2 = document.createTextNode("starWars")
var text      = document.createElement('p');
var textToappend = document.createTextNode("incert your name")
var body 	  = document.getElementsByTagName("BODY")[0];

inputName.setAttribute('type','text')
divInput.classList.add('over')
divInput.classList.add('visible')
button2.classList.add('star')


//var getInputName = document.querySelector('input')

body.appendChild(divInput);
text.appendChild(textToappend)
button1.appendChild(textButton1)

button2.appendChild(textButton2)
divInput.appendChild(text);
divInput.appendChild(inputName);
divInput.appendChild(button1);
divInput.appendChild(button2);


var buttonClicked = document.querySelector('button')
var buttonClicked2 = document.querySelector('.star')
buttonClicked.addEventListener('click',function(){
	
	var selectInp = document.querySelector('input').value
	var nameSelector = document.querySelector('#name');
	var textInput = document.createTextNode(selectInp)
	nameSelector.appendChild(textInput);
	divInput.classList.toggle('visible');
	showTemplate()

	var card = document.querySelectorAll('img')
	function animateCard() {

		console.log('test',this)
		this.classList.toggle('animate')
	}
	card.forEach(function(card){
	card.addEventListener('click',animateCard)

})

	
})

buttonClicked2.addEventListener('click',function(){
	cardsArray = cardsArray2
	var selectInp = document.querySelector('input').value;
	var nameSelector = document.querySelector('#name');
	var textInput = document.createTextNode(selectInp);
	var titleFont = document.querySelectorAll('h3');
	nameSelector.appendChild(textInput);
	divInput.classList.toggle('visible');
	showTemplate()

	var card = document.querySelectorAll('img')
	var imgSelector = document.querySelector('img')
	function animateCard() {

		console.log('test',this)
		this.classList.toggle('animate')
	}
	card.forEach(function(card){
	card.addEventListener('click',animateCard)
	card.style.height  = "145px";
	})
	body.style.backgroundImage = "url('https://media.giphy.com/media/aRZ4vTsHnyW6A/giphy.gif')";
	imgSelector
	titleFont.style.fontFamily = "'Press Start 2P', cursive";

})


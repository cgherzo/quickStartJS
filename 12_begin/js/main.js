alert("It is a Zombie Apocalypse. You are looting a store and suddenly a Zombie burst through the door!");

var weapon = prompt("You search frantically for a weapon. What do you choose? A bow and arrow, an axe, or a rubber chicken");

var randomNumber = Math.round(Math.random());

alert("You attack the zombie with your" + " " + weapon);

if(randomNumber === 0){
	alert("The Zombie bites you. You lose! :(");	
}else if(randomNumber === 1){
	alert("You kill the Zombie with you" + " " + weapon + ". " + "You win! :)");
}
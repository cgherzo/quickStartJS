var namePlayer = prompt("Please, insert you name here: ");

alert("Hi here, " + namePlayer + "." + " " + "It is a Zombie Apocalypse. You are looting a store and suddenly a Zombie burst through the door!");

var weapon = prompt("You search frantically for a weapon. What do you choose? A bow and arrow, an axe, or a rubber chicken");

var randomNumber = Math.round(Math.random());

console.log(randomNumber);

alert("You attack the zombie with your" + " " + weapon);

if ((randomNumber === 0 || randomNumber === 1) && weapon === "rubber chicken"){
	confirm("The Zombie bites you.");
	alert(namePlayer + "," + " " + "You Loose! :'( ");
}else if(randomNumber === 0  && (weapon === "bow and arrow" || weapon === "axe")){
	alert(namePlayer + " " +"You get hurt! Get cover!");
}else if(randomNumber === 1 && (weapon === "bow and arrow" || weapon === "axe")){
		
	confirm("You kill the Zombien with you" + " " + weapon);
	alert(namePlayer + "," + " " + "You win! :D");
}
var colors=[];
var square=document.querySelectorAll(".square");
var message=document.querySelector(".message");
var answer=document.querySelector(".answer");
var h1=document.querySelector(".header");
var reset=document.querySelector(".reset");
var mode=document.querySelectorAll(".mode");
var size=6;
var colorpicked;
init(size);

reset.addEventListener("click",function(){
	init(6);
	h1.style.backgroundColor="steelblue";
	reset.textContent="New Colors";
})

for(var i=0;i<mode.length;i++){
	mode[i].addEventListener("click",function(){
		mode[0].classList.remove("selected");
		mode[1].classList.remove("selected");
		this.classList.add("selected");
		h1.style.backgroundColor="steelblue";
		message.textContent="";
		this.textContent=="Easy"?size=3:size=6;
		colors=generatecolors(size);
		colorpicked=getcolor(size);
		reset.textContent="New Colors";
		init(size);

	})
}
function init(size){
colors=generatecolors(size);

colorpicked=getcolor(size);

for(var i=0;i<square.length;i++){
	if(colors[i]){
	square[i].style.display="block";	
	square[i].style.backgroundColor=colors[i];
}else{
	square[i].style.display="none";
}
}
answer.textContent=colorpicked;	

for(var i=0;i<colors.length;i++){
	square[i].addEventListener("click",function(){
		if(this.style.backgroundColor==colorpicked){
			message.textContent="Correct!";
			colorall(colorpicked);
			reset.textContent="Play Again?"
			h1.style.backgroundColor=colorpicked;
		}
		else{
			message.textContent="Try Again!";
			this.style.backgroundColor="black";
		}
	})
}
}
function getcolor(size){
	var x=Math.floor(Math.random()*size);
	return colors[x];
}
function colorall(x){
	for(var i=0;i<square.length;i++){
square[i].style.backgroundColor=x;
}
}
function generatecolors(size){
	var arr=[]
	for(var i=0;i<size;i++){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	var x="rgb("+r+", "+g+", "+b+")"; 
	arr.push(x);

}
return arr;
}
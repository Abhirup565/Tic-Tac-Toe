var name1 = localStorage.getItem("playerX");
var name2 = localStorage.getItem("playerO");
document.querySelector('.name1').innerText = name1;
document.querySelector('.name2').innerText = name2;
var start=1, flag;
var count=0, win=0;
var box = document.querySelectorAll('.box');
flag = start;
const winpatterns = [
	[0, 1, 2],
	[0, 3, 6],
	[0, 4, 8],
	[1, 4, 7],
	[2, 5, 8],
	[2, 4, 6],
	[3, 4, 5],
	[6, 7, 8],
];

if(flag==1){
	document.querySelector('.name1').style.color = "yellow";
	document.querySelector('.name2').style.color = "white";
}
else{
	document.querySelector('.name2').style.color = "yellow";
	document.querySelector('.name1').style.color = "white";
}

box.forEach((button) =>{
	button.addEventListener('click', ()=>{
		if(flag==1){
			button.innerText = 'X';
			document.querySelector('.name2').style.color = "yellow";
			document.querySelector('.name1').style.color = "white";
			flag = 0;
		}
		else{
			button.innerText = 'O';
			document.querySelector('.name1').style.color = "yellow";
			document.querySelector('.name2').style.color = "white";
			flag = 1;
		}
		button.disabled = true;
		count++;
		winChecker();
		drawChecker();
	})
})
const winChecker = ()=>{
	for(let pattern of winpatterns){
		let pos1val = box[pattern[0]].innerText;
		let pos2val = box[pattern[1]].innerText;
		let pos3val = box[pattern[2]].innerText;

		if(pos1val !="" && pos2val !="" && pos3val!=""){
			if(pos1val===pos2val && pos2val===pos3val){
				win = 1;
				box[pattern[0]].style.color = "#99ff33";
				box[pattern[1]].style.color = "#99ff33";
				box[pattern[2]].style.color = "#99ff33";
				setTimeout(()=>{
					document.querySelector('.cover').style.display = "block";
					document.querySelector('.messageBox').style.display = "block";
				},1000);
				box.forEach((boxes)=>{
					boxes.disabled = true;
				})
				document.querySelector('.name2').style.color = "white";
				document.querySelector('.name1').style.color = "white";
				document.querySelector('.resetBtn').disabled = true;
				document.querySelector('.messageBox').style.top = "25%";
				document.querySelector('.messageBox').style.height = "15em";
				document.querySelector('hr').style.top = "24%";
				document.querySelector('.message').innerText = "Winner";
				if(pos1val == 'X')
					document.querySelector('.winnerName').innerText = name1;
				else
					document.querySelector('.winnerName').innerText = name2;
			}
		}
	}
}
function drawChecker(){
	if(count==9 && win==0){
		document.querySelector('.cover').style.display = "block";
		document.querySelector('.messageBox').style.display = "block";
		document.querySelector('.messageBox').style.top = "30%";
		document.querySelector('.messageBox').style.height = "10em";
		document.querySelector('hr').style.top = "32%";
		document.querySelector('.message').innerText = "Draw!";
	}
}
document.querySelector('.rematchBtn').addEventListener('click',()=>{
	win = 0;
	count = 0;
	if(start==1){
		start = 0;
		flag = start;
		document.querySelector('.name2').style.color = "yellow";
	}
	else{
		start = 1;
		flag = start;
		document.querySelector('.name1').style.color = "yellow";
	}
	document.querySelector('.cover').style.display = "none";
	document.querySelector('.messageBox').style.display = "none";
	document.querySelector('.winnerName').innerText = "";
	document.querySelector('.resetBtn').disabled = false;
	box.forEach((boxes)=>{
		boxes.disabled = false;
		boxes.innerText = null;
		boxes.style.color = "white";
	})
})
document.querySelector('.resetBtn').addEventListener('click',()=>{
	flag = start;
	if(flag==1){
		document.querySelector('.name1').style.color = "yellow";
		document.querySelector('.name2').style.color = "white";
	}
	else{
		document.querySelector('.name2').style.color = "yellow";
		document.querySelector('.name1').style.color = "white";
	}
	win = 0;
	count = 0;
	document.querySelector('.cover').style.display = "none";
	document.querySelector('.messageBox').style.display = "none";
	document.querySelector('.winnerName').innerText = "";
	box.forEach((boxes)=>{
		boxes.disabled = false;
		boxes.innerText = null;
		boxes.style.color = "white";
	})
})

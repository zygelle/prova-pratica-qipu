const box = document.getElementsByTagName("input"),
btn_opt_1 = document.getElementById("opt-1"),
btn_opt_2 = document.getElementById("opt-2"),
btn_opt_3 = document.getElementById("opt-3"),
btn_restart = document.getElementById("restart"),
list_of_matches = document.getElementById("info");

var player = "O";
var winner = "-";
var game_mode = "-";


btn_opt_1.addEventListener("click", game1);

function game1() {
	game_mode = "Humano vs Humano";
	restart();
	for(let i=0; i < box.length; i++){
		box[i].addEventListener("click", (event) => {
			completeBox(event);
		});
	}
}

btn_opt_2.addEventListener("click", game2);

function game2() {
	game_mode = "Humano vs CPU";
	restart();
	for(let i=0; i < box.length; i++){
		box[i].addEventListener("click", (event) => {
			completeBox(event);
		});
	}
}

btn_opt_3.addEventListener("click", game3);

function game3() {
	game_mode = "CPU vs Humano";
	restart();
	for(let i=0; i < box.length; i++){
		box[i].addEventListener("click", (event) => {
			completeBox(event);
		});
	}
}

function completeBox(event) {
	if(game_mode == "Humano vs Humano"){
		if((event.target.value == "-") && (winner == "-")){
			event.target.value = player;
			event.target.style.color = "#333";

			winner = victory();
			completeListOfMatches();
			
			if(player == "X") {
				player = "O";
			}else{
				player = "X";
			}
		}
	} else if(game_mode == "Humano vs CPU"){
		if((event.target.value == "-") && (winner == "-")){
			event.target.value = "O";
			event.target.style.color = "#333";
			bot();
			winner = victory();
			completeListOfMatches();
			console.log(winner);
		}
	} else if(game_mode == "CPU vs Humano"){
		if((event.target.value == "-") && (winner == "-")){
			event.target.value = "X";
			event.target.style.color = "#333";
			bot();
			winner = victory();
			completeListOfMatches();
			console.log(winner);
		}
	}
}

btn_restart.addEventListener("click", restart);

function restart() {
	for(let i=0; i < box.length; i++) {
		box[i].value = "-";
        box[i].style.backgroundColor = "#fafafa";
        box[i].style.color = "#fafafa";
	}
	
	if(game_mode == "CPU vs Humano"){
		game_mode = "CPU vs Humano";
		bot();
	} else if(game_mode == "Humano vs CPU"){
		player = "O";
		game_mode = "Humano vs CPU";
	} else if(game_mode == "Humano vs Humano"){
		player = "O";
		game_mode = "Humano vs Humano";
	}

	winner = "-";
}

function bot(){
	let array = [];
	for(let i=0; i < box.length; i++){
		if(box[i].value == "-"){
			array.push(i);
		}
	} console.log(array);
	let randomBox = array[Math.floor(Math.random() * array.length)];
	console.log(randomBox);
	if(array.length > 0){
		if(game_mode == "Humano vs CPU"){
			box[randomBox].value = "X";
			box[randomBox].style.color = "#333";
		} else if(game_mode = "CPU vs Humano"){
			box[randomBox].value = "O";
			box[randomBox].style.color = "#333";
		}
	}
}

function createDate() {
	var currentDate = new Date();
	var hours = currentDate.getHours();
	var minutes = currentDate.getMinutes();
	var seconds = currentDate.getSeconds();
	var modifiedDate = hours + ":" + minutes + ":" + seconds;
	return modifiedDate;
}

function completeListOfMatches(){
	if(winner == "O"){
		list_of_matches.innerHTML += `<tr><td>${createDate()}</td><td>${game_mode}</td><td>O</td></tr>`;
	} else if(winner == "X"){
		list_of_matches.innerHTML += `<tr><td>${createDate()}</td><td>${game_mode}</td><td>X</td><tr>`;
	}
}

function victory() {
	if((box[0].value == box[1].value) && (box[1].value == box[2].value) && box[0].value != "-") {
		box[0].style.backgroundColor="#3DD91E";
		box[1].style.backgroundColor="#3DD91E";
		box[2].style.backgroundColor="#3DD91E";
		return box[0].value;
	} else if((box[3].value == box[4].value) && (box[4].value == box[5].value) && box[3].value != "-") {
		box[3].style.backgroundColor="#3DD91E";
		box[4].style.backgroundColor="#3DD91E";
		box[5].style.backgroundColor="#3DD91E";
		return box[3].value;
	} else if((box[6].value == box[7].value) && (box[7].value == box[8].value) && box[6].value != "-") {
		box[6].style.backgroundColor="#3DD91E";
		box[7].style.backgroundColor="#3DD91E";
		box[8].style.backgroundColor="#3DD91E";
		return box[6].value;
	} else if((box[0].value == box[3].value) && (box[3].value == box[6].value) && box[0].value != "-") {
		box[0].style.backgroundColor="#3DD91E";
		box[3].style.backgroundColor="#3DD91E";
		box[6].style.backgroundColor="#3DD91E";
		return box[0].value;
	} else if((box[1].value == box[4].value) && (box[4].value == box[7].value) && box[1].value != "-") {
		box[1].style.backgroundColor="#3DD91E";
		box[4].style.backgroundColor="#3DD91E";
		box[7].style.backgroundColor="#3DD91E";
		return box[1].value;
	} else if((box[2].value == box[5].value) && (box[5].value == box[8].value) && box[2].value != "-") {
		box[2].style.backgroundColor="#3DD91E";
		box[5].style.backgroundColor="#3DD91E";
		box[8].style.backgroundColor="#3DD91E";
		return box[2].value;
	} else if((box[0].value == box[4].value) && (box[4].value == box[8].value) && box[0].value != "-") {
		box[0].style.backgroundColor="#3DD91E";
		box[4].style.backgroundColor="#3DD91E";
		box[8].style.backgroundColor="#3DD91E";
		return box[0].value;
	} else if((box[2].value == box[4].value) && (box[4].value == box[6].value) && box[2].value != "-") {
		box[2].style.backgroundColor="#3DD91E";
		box[4].style.backgroundColor="#3DD91E";
		box[6].style.backgroundColor="#3DD91E";
		return box[2].value;
	}

    return "-";
}
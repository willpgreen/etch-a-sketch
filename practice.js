// const container = document.querySelector('#container');

// const content = document.createElement('div');
// content.classList.add('content');
// content.textContent = 'This is the glorious text-content';

// container.appendChild(content);

// const redP = document.createElement('p');
// redP.classList.add('redP');
// redP.textContent = "Hey I'm red";
// container.appendChild(redP);
// redP.style.color = 'red';

// const blueH3 = document.createElement('h3');
// blueH3.classList.add('blueH3');
// blueH3.textContent = "I'm a blue h3";
// blueH3.style.color = "blue";
// container.appendChild(blueH3);

// const bigDiv = document.createElement('div');
// bigDiv.classList.add('bigDiv');
// bigDiv.style.border = "1px solid black";
// bigDiv.style.background = "pink";

// const h1 = document.createElement("h1");
// h1.textContent = "Im in a div";

// const p = document.createElement("p");
// p.textContent = "Me too";

// bigDiv.append(h1, p);


// container.appendChild(bigDiv);

// var btn = document.querySelector("#btn");
// btn.addEventListener('click', function(e){
//     e.target.style.background = "blue";
// });

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

const listItems = document.getElementsByTagName('li');
const boldRed = document.getElementsByClassName('BoldRed');

// document.write(boldRed);
    

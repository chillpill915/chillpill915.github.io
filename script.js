function dropdownFunction(){
    document.getElementById("myDropdown").classList.toggle("show");
}

// var showing = 0
// function showNav(){
//     if(showing){
//         document.getElementById("myFrame").style.display = "block"
//         showing = 0;
//         console.log('hey');
//     }else{
//         document.getElementById("myDropdown").style.height = "100%";
//         showing = 1;
//         console.log("what");
//     }
// }

filterSelection("all")
function filterSelection(c){
    let x, i;
    x = document.getElementsByClassName("galleryColumn");
    if(c=="all") c="";
    for(i=0; i<x.length; i++){
        RemoveClass(x[i],"show");
        if(x[i].className.indexOf(c) > -1)AddClass(x[i],"show");
    }
}

function AddClass(element, name){
    let i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for(i=0; i<arr2.length; i++){
        if(arr1.indexOf(arr2[i])==-1){
            element.className += " " + arr2[i];
        }
    }
}

function RemoveClass(element, name){
    let i,arr1,arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for(i=0; i<arr2.length; i++){
        while(arr1.indexOf(arr2[i])>-1){
            arr1.splice(arr1.indexOf(arr2[i]),1);
        }
    }
    element.className = arr1.join(" ");
}
function galleryChoice(){
    // Add active class to the current button (highlight it)
    let header = document.getElementById("galleryBtnContainer");
    let btns = header.getElementsByClassName("galleryBtn");
    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
            let current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
            });
        }
}


//initialize variables to get modal information
let photoPosition;
let modal = document.getElementById("myModal");
let modalImg = document.getElementById("img01");
let captionText = document.getElementById("caption");
//function to show and send img information to modal

function sendImg(src,alt,position){
    modal.style.display = "block";
	modalImg.src = src;
	captionText.innerHTML = alt;
	photoPosition = position;
	}
	//get the <span> element that closes the modal
	let span = document.getElementsByClassName("close")[0];
	//when the user clicks <span> (x), the modal closes
    span.onclick = function modalClose(){
        modal.style.display = "none";
	    }
	let prev = document.getElementsByClassName("prev")[0];
    prev.onclick = function(){
        let i = parseInt(photoPosition)-1;
        let id = i.toString();
        let prevPhoto = document.getElementById(id);
        sendImg(prevPhoto.src,prevPhoto.alt,prevPhoto.id)
	    }
	let next = document.getElementsByClassName("next")[0];
    next.onclick = function(){
        let i = parseInt(photoPosition)+1;
        let id = i.toString();
        let nextPhoto = document.getElementById(id);
        sendImg(nextPhoto.src,nextPhoto.alt,nextPhoto.id)
        }
        

// Full-width images
function one() {
    // Get the elements with class="column"
    let elements = document.getElementsByClassName("column");
    // Declare a loop variable
    let i;
	for (i = 0; i < elements.length; i++) {
		elements[i].style.msFlex = "100%";  // IE10
		elements[i].style.flex = "100%";
		}
	}

// Two images side by side
function two() {
    // Get the elements with class="column"
    let elements = document.getElementsByClassName("column");
    // Declare a loop variable
    let i;
	for (i = 0; i < elements.length; i++) {
		elements[i].style.msFlex = "50%";  // IE10
		elements[i].style.flex = "50%";
		}
	}

function three(){
    // Get the elements with class="column"
    let elements = document.getElementsByClassName("column");
    // Declare a loop variable
    let i;
	for (i=0; i<elements.length; i++){
		elements[i].style.msFlex = "33.33%";
		elements[i].style.flex = "33.33%";
		}
    }
    
// Four images side by side
function four() {
    // Get the elements with class="column"
    let elements = document.getElementsByClassName("column");
    // Declare a loop variable
    let i;
	for (i = 0; i < elements.length; i++) {
				  elements[i].style.msFlex = "25%";  // IE10
				  elements[i].style.flex = "25%";
			  }
		  }

// Add active class to the current button (highlight it)
let header = document.getElementById("pictureGrid");
let btns = header.getElementsByClassName("gridBtn");
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function updateButton() {
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
        });
    }
    
	  
//width function for mobile
let size = window.innerWidth;
function smallScreen(){
	if(size<=750){
		let current = document.getElementsByClassName("active");
		current[0].className = current[0].className.replace(" active", "");
		btns[0].className += " active";
		return one();
		}		
	}	

//Get the button
let topButton = document.getElementById("topBtn");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topButton.style.display = "block";
        } else {
            topButton.style.display = "none";
            }
    }

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    }


//drop down menu selection
var write;
var textPosition;
var myIFrame
function selectWork(value){
    document.getElementById("myFrame").src = value;
    myIFrame = document.getElementById('myFrame');
    draw();
    }
function draw(){
    textPosition = 59;
    clearTimeout(write);
    document.getElementById("show").innerHTML = "";
    let text = myIFrame.contentWindow.document.body.innerHTML;
    console.log("text");
    typeWriter();
    function typeWriter(){
        if(textPosition<text.length-6){
            document.getElementById("show").innerHTML += text.charAt(textPosition);
            textPosition++;
            write = setTimeout(typeWriter, 50)
            }
        }
}
function outputWork(){
    clearTimeout(write);
    document.getElementById('show').innerHTML = "";
    let text = myIFrame.contentWindow.document.body.innerHTML;
    document.getElementById('show').innerHTML = text;
}



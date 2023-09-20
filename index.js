var numOfDrumButtons = document.querySelectorAll(".drum").length;

for(var i = 0; i < numOfDrumButtons; i++){
    
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var btnHTML = this.innerHTML;
        sounds(btnHTML);
        animate(btnHTML)
    });
    
}

document.addEventListener("keypress", function(e){
 sounds(e.key);
 animate(e.key);
})



function sounds(key){
    switch (key) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case "j":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case "k":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case "l":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
        default:
            console.log()
            break;
    }
}

function animate(currentKey){
    var active = document.querySelector(`.${currentKey}`);
    active.classList.add("pressed");
    setTimeout(function(){
        active.classList.remove("pressed");
    }, 100)
}

























// var numOfDrumButtons = document.querySelectorAll(".drum");

// for(let i = 0; i < numOfDrumButtons.length; i++){
//     numOfDrumButtons[i].addEventListener("click", () => {
//        console.log(this.numOfDrumButtons[i].innerHTML);
//     });

// }

// var btn_w = document.querySelector('.w');
// var btn_a = document.querySelector('.a');
// var btn_s = document.querySelector('.s');
// var btn_d = document.querySelector('.d');
// var btn_j = document.querySelector('.j');
// var btn_k = document.querySelector('.k');
// var btn_l = document.querySelector('.l');

// btn_w.addEventListener('click', function () {
// 	alert('W Cliked!');
// });
// btn_a.addEventListener('click', function () {
// 	alert('A Cliked!');
// });
// btn_s.addEventListener('click', function () {
// 	alert('S Cliked!');
// });
// btn_d.addEventListener('click', function () {
// 	alert('D Cliked!');
// });
// btn_j.addEventListener('click', function () {
// 	alert('J Cliked!');
// });
// btn_k.addEventListener('click', function () {
// 	alert('K Cliked!');
// });
// btn_l.addEventListener('click', function () {
// 	alert('L Cliked!');
// });

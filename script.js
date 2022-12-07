function rand(min, max) {
    return Math.floor(Math.random()*(max - min + 1) + min);
}

var d1 = rand(1,6);
var d2 = rand(1,6);
var d3 = rand(1,6);
var d4 = rand(1,6);
var d5 = rand(1,6);
var d6 = rand(1,6);

document.getElementById('dice1').src = "Dice/dice_"+d1+".png";
document.getElementById('dice2').src = "Dice/dice_"+d2+".png";
document.getElementById('dice3').src = "Dice/dice_"+d3+".png";
document.getElementById('dice4').src = "Dice/dice_"+d4+".png";
document.getElementById('dice5').src = "Dice/dice_"+d5+".png";
document.getElementById('dice6').src = "Dice/dice_"+d6+".png";

// d1
if (d1 == 3) {
    document.getElementById('ans1').innerHTML = 2;
}
else if (d1 == 5) {
    document.getElementById('ans1').innerHTML = 4;
}
else {
    document.getElementById('ans1').innerHTML = 0;
}

// d2
if (d2 == 3) {
    document.getElementById('ans2').innerHTML = 2;
}
else if (d2 == 5) {
    document.getElementById('ans2').innerHTML = 4;
}
else {
    document.getElementById('ans2').innerHTML = 0;
}

// d3
if (d3 == 3) {
    document.getElementById('ans3').innerHTML = 2;
}
else if (d3 == 5) {
    document.getElementById('ans3').innerHTML = 4;
}
else {
    document.getElementById('ans3').innerHTML = 0;
}

// d4
if (d4 == 3) {
    document.getElementById('ans4').innerHTML = 2;
}
else if (d4 == 5) {
    document.getElementById('ans4').innerHTML = 4;
}
else {
    document.getElementById('ans4').innerHTML = 0;
}

// d5
if (d5 == 3) {
    document.getElementById('ans5').innerHTML = 2;
}
else if (d5 == 5) {
    document.getElementById('ans5').innerHTML = 4;
}
else {
    document.getElementById('ans5').innerHTML = 0;
}

// d6
if (d6 == 3) {
    document.getElementById('ans6').innerHTML = 2;
}
else if (d6 == 5) {
    document.getElementById('ans6').innerHTML = 4;
}
else {
    document.getElementById('ans6').innerHTML = 0;
}

var a1 = document.getElementById('ans1').innerHTML;
var a2 = document.getElementById('ans2').innerHTML;
var a3 = document.getElementById('ans3').innerHTML;
var a4 = document.getElementById('ans4').innerHTML;
var a5 = document.getElementById('ans5').innerHTML;
var a6 = document.getElementById('ans6').innerHTML;

var hasil = parseInt(a1) + parseInt(a2) + parseInt(a3) + parseInt(a4) + parseInt(a5) + parseInt(a6) 
document.getElementById('answer').innerHTML = hasil;


function cek() {
    var jawab = document.getElementById('y_answer').value;
    var jawab1 = parseInt(jawab);
    var hasil1 = parseInt(hasil);
    document.getElementById('r_ans').setAttribute('class','');
    document.getElementById('cek_hasil').setAttribute('class','');
    if (jawab1 == hasil1) {
        document.getElementById('cek_hasil').innerHTML = "Great !!!";
    }
    else {
        document.getElementById('cek_hasil').innerHTML = "Sorry....";
    }
}
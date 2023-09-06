choices=["Stone","Paper","Scissor"];

let underscore_span=document.getElementById
    ("user-score");
let computerscore_span=document.getElementById
    ("computer-score");

let resulttext=document.querySelector(".result-text");

let userscore=0;
let computerscore=0;
let userchoice="";
let computerchoice="";

main();

function main(){
    const Stone_div=document.getElementById("rock");
    const Paper_div=document.getElementById("paper");
    const Scissor_div=document.getElementById("scissor");

    Stone_div.addEventListener("click",()=>  game("Rock"));
    Paper_div.addEventListener("click",()=> game("Paper"));
    Scissor_div.addEventListener("click",()=> game("Scissor"));
}

function game(userchoice){
    const randomindex=Math.floor(Math.random()*choices.length);
    computerchoice=choices[randomindex];

    switch (userchoice+computerchoice) {
        case"RockScissor":
        case"PaperRock":
        case"ScissorPaper":
            win(userchoice,computerchoice)
            break;

        case"RockPaper":
        case"PaperScissor":
        case"ScissorRock":
            lose(userchoice,computerchoice)
            break;
    
        case"RockRock":
        case"PaperPaper":
        case"ScissorScissor":
            draw(userchoice,computerchoice)
            break;
    
    }
}

function win(userchoice,computerchoice){
    userscore++;
    underscore_span.innerHTML=userscore;
    resulttext.innerHTML=`${userchoice} beats ${computerchoice} You Win`;
}

function lose(userchoice,computerchoice){
    computerscore++;
    computerscore_span.innerHTML=computerscore;
    resulttext.innerHTML=`${computerchoice} beats ${userchoice} You Lose`;
}

function draw(userchoice,computerchoice){
    resulttext.innerHTML=`${userchoice} and beats ${computerchoice} Its a draw`;
}
let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#resetbtn");
let newbtn = document.querySelector("#newBtn");
let mescon = document.querySelector(".msg");
let winmsg = document.querySelector("#winMsg");



let turnO = true ; 

const winingPattern = [
    [0,1,2],  
    [0,3,6],
    [0,4,8], 
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

const resetGame = ()=>{
    turnO = true;
    enabledBox();
    mescon.classList.add("hide");
}

boxes.forEach((box)  => {
    box.addEventListener("click" , () =>{
       
        if(turnO){
            box.innerText = "O";
            turnO = false;

        }
        else{
            box.innerText = "X";
            turnO = true;

        }
        box.disabled = true;
        checkWinner();
    });
});

const disabledBox = ()=>{
    for(box of boxes){
        box.disabled = true;

    }
}

const enabledBox = ()=>{
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";


    }
}

const showWinner = (winner) =>{
    winmsg.innerText = `congratulations , winner is ${winner}` ;
    mescon.classList.remove("hide");
   
    disabledBox();
}
const checkWinner = () =>{
    for(let pattern of winingPattern ){

            let pos1 =  boxes[pattern[0]].innerText;
            let pos2 =  boxes[pattern[1]].innerText;
            let pos3 =  boxes[pattern[2]].innerText;
        if(pos1 != "" && pos2 != "" && pos3 != "")    {
            if(pos1 === pos2 && pos2 === pos3){
              
                showWinner(pos1);
                
            }
        }
    }
}


newbtn.addEventListener("click" , resetGame );


resetbtn.addEventListener("click" , resetGame );
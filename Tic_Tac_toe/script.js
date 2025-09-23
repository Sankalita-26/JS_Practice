const board= document.querySelector('.board');
const square= document.querySelectorAll('.square');
const reset=document.querySelector('.reset');
const msg=document.querySelector('.message');
const players=['X', 'O'];
let currentPlayer=players[0];

const WinPatterns=[

    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
msg.textContent=`First turn is X's Turn!! Good Luck 🤞`;
for(let i=0; i<square.length; i++)
{
    square[i].addEventListener('click',()=>{
        if(square[i].textContent !== "" || checkWinner(currentPlayer)){
            return;
        }

        

        square[i].textContent=currentPlayer;

        if(checkWinner(currentPlayer)){
            msg.textContent=`Game Over!!.${currentPlayer} wins the game!!🥳🥳 ! Please Restart`;
            return
        }

        if(checkTie()){
            msg.textContent=`Game tied!!😶  Please Restart`;
            return
        }

        currentPlayer=currentPlayer===players[0] ? players[1] : players[0];


        if(currentPlayer===players[0]){
            msg.textContent=`X's Turn`
        }
        else{
            msg.textContent=`O's Turn`
        }
    });
}

function checkWinner(currentPlayer){

    for(let i=0;i<WinPatterns.length;i++){
        const[a,b,c]=WinPatterns[i]


        if(square[a].textContent===currentPlayer &&
            square[b].textContent===currentPlayer && 
            square[c].textContent===currentPlayer 

        ){
            return true
        }
    }
    return false
}


function checkTie(){
    for (let i=0; i<square.length;i++){
        if(square[i].textContent===''){
            return false
        }
    }
    return true
}
function Restart(){
    for(let i=0;i<square.length;i++){
        square[i].textContent=""
    }
    msg.textContent=`First turn is X's Turn!! Good Luck 🤞`;
    currentPlayer=players[0]
}

reset.addEventListener('click',()=>{
    Restart();
})
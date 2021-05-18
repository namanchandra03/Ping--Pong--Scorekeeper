
const p1={
        score:0,
        display:document.querySelector('#display1'),
        button:document.querySelector('#player1')

}
const p2={

        score:0,
        display:document.querySelector('#display2'),
        button:document.querySelector('#player2')
}


const resetButton= document.querySelector('#reset');


const winvalue= document.querySelector('#winvalue');
let winnerValue=3;
let isGameOver=false;
function updateScores(player,opponent){

        if(isGameOver!==true){

                player.score+=1;
               
               if(player.score===winnerValue){
                   isGameOver=true;
                   player.display.classList.add('has-text-success');
                   opponent.display.classList.add('has-text-danger');
                   player.button.disabled=true;
                   opponent.button.disabled=true;
               }

               player.display.innerText= player.score;
               
        }
}

p1.button.addEventListener('click',function(){
        
          updateScores(p1,p2);

})
p2.button.addEventListener('click',function(){

        updateScores(p2,p1);

})

resetButton.addEventListener('click',reset);

winvalue.addEventListener('change',function (){

          winnerValue=parseInt(this.value);
          reset();

});
 function reset(){

                isGameOver=false;
       for(let p of [p1,p2]){
               p.score=0;
               p.display.innerText='0';
               p.button.disabled=false;
               p.display.classList.remove('has-text-success','has-text-danger');
       }
       
        
 }  
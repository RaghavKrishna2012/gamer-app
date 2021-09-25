score = 0;

function updateScore()
{
score = score + 1;    
 document.getElementById("score").innerHtml = "Score: " +score;   
}

function saveScore()
{
localStorage.setltem("score",score);     }



function nextPage(){
window.location="activity_2.html";
}
score=0;
function updateScore()
{
    score+= 2;
    document.getElementById("score").innerHTML="Points:"+ score;

}

function saveScore()
{
    localStorage.setItem("score",score);
}
function nextPage()
{
    window.location="https://www.youtube.com/watch?v=aa3k806uonM&list=RDGMEM6ijAnFTG9nX1G-kbWBUCJA&start_radio=1&rv=WLKi0AjfoXU";

}
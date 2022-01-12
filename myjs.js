let data = document.getElementById("carogame")
let board=[];
let disPlay="";
for (let i = 0; i < 5; i++) {
    board[i]= new Array(0,0,0,0,0);
}
for (let i = 0; i < 5; i++) {
    disPlay +="<br/>";
    for (let j = 0; j < 5; j++) {
        disPlay += board[i][j] + "&nbsp;&nbsp;&nbsp";
    }
}
disPlay+="<br/><br/><input type='button' value='PlayGame' onclick='playGame()'>";
data.innerHTML = disPlay;
function playGame(){
    let positionX= +prompt("Enter X: ");
    let positionY= +prompt("Enter Y: ");
    disPlay="";
    board[positionX][positionY] = "x";
    for (let i = 0; i < 5; i++) {
        disPlay +="<br/>";
        for (let j = 0; j < 5 ; j++) {
            disPlay+=board[i][j] + "&nbsp;&nbsp;&nbsp";
        }
    } disPlay+="<br/><br/><input type='button' value='PlayGame' onclick='playGame()'>"
    data.innerHTML=disPlay
}

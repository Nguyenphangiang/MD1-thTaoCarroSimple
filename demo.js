// tạo mảng 2 chiều 00000
// tạo biến display để display.
display=document.getElementById("demoCaro")
// tạo mảng trống để chưa mảng.
let emptyArrays= [];
// tạo biến data để chứa dấu cách và khời tạo nút
data = "";
//khởi tạo mảng 00000 trong mảng trống  dùng hàm for để tạo.
for (let i = 0; i < 5; i++) {
    emptyArrays[i]= new Array(0,0,0,0,0);
}
for (let i = 0; i < 5; i++) {
    // để mỗi dòng in ra có xuống dòng
    data+= "<br/>";
    for (let j = 0; j < 5; j++) {
        // để mỗi phần tử 0 trong mảng có dấu cách
        data+= emptyArrays[i][j] + "&nbsp;&nbsp;&nbsp;";
    }
}
// gọi nút bấm play
data += "<br/><br/><input type='button' value='Play' onclick='playCaro()' >"
// hiển thị mảng
display.innerHTML = data
// tạo hàm để thay đổi tọa độ
function playCaro(){
    // lấy tọa độ X,Y
    let positionX= +prompt("Enter X:");
    let positionY= +prompt("Enter Y:");
    //tạo biến data để lưu lại thay đổi
    data="";
    emptyArrays[positionX][positionY]= "X"
    //tạo lại hàm đê tạo khoảng cách lại cho data
    for (let i = 0; i < 5; i++) {
        data+= "<br/>";
        for (let j = 0; j < 5; j++) {
           data += emptyArrays[i][j] + "&nbsp&nbsp;&nbsp;"
        }
    }// tạo lại 1 cái nút và cho thằng display ra
    data += "<br/><br/><input type='button' value='Play' onclick='playCaro()' >"
    display.innerHTML = "<hr/>" + data
}






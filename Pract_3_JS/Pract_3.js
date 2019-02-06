function changeColor(){
    let colors = ["red", "blue", "green", "violet", "gold", "black"];
    let rand = Math.floor(Math.random() * colors.length);
    let oldColor = document.getElementById("machine").style.color;
    let newColor = (colors[rand]);
    if (oldColor != newColor) {
        document.getElementById("machine").style.color = newColor;
        console.log("Цвет заменён!");
    } else changeColor();
}
function generateColor(){
    
}
function mouseOn(){
    document.title = "Заменённый текст";
}
function mouseOut(){
    document.title = "Стандартный заголовок";
}
function changeColor(){
    let colors = ["red", "blue", "green", "violet", "gold", "black"];
    let rand = Math.floor(Math.random() * colors.length);
    let oldColor = document.getElementById("machine").style.color;
    let newColor = (colors[rand]);
    if (oldColor != newColor) {
        document.getElementById("Ptext").style.color = newColor;
    } else changeColor();
}
function mouseOn(){
    document.getElementById("H1header").innerHTML= "Changed Header";
}
function mouseOut(){
    document.getElementById("H1header").innerHTML= "Normal Header";
}
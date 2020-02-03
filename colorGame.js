var numSquares =6;
var colors= genereateRandomColors(numSquares);
var pickedColor = colors[1];
var squares = document.querySelectorAll(".square");
var message = document.querySelectorAll("span")[1];
var h1 = document.querySelector("h1");
var button = document.querySelector("#reset");
var colorDisplay =document.querySelector("#colorDisplay");
var easyButton = document.querySelector("#easyBtn");
var hardButton = document.querySelector("#hardBtn");
var msgDisp = document.querySelector("#message")

easyButton.addEventListener("click",function()
{
    hardButton.classList.remove("selected")
    easyButton.classList.add("selected")
    numSquares = 3;
    colors = genereateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i =0; i<squares.length;i++)
    {
        if(colors[i])
        {
            squares[i].style.background = colors[i];
        }
        else
        {
            squares[i].style.display="none"; 
        }
    }
    
});
hardButton.addEventListener("click",function()
{
    easyButton.classList.remove("selected")
    hardButton.classList.add("selected")
    numSquares=6;
    colors = genereateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i =0; i<squares.length;i++)
    {

            squares[i].style.background = colors[i];
            squares[i].style.display = "block";
    }
     
})

button.addEventListener("click",function()
{
    msgDisp.textContent = "";
    colors = genereateRandomColors(numSquares);
    pickedColor = pickColor();
    for (var i=0; i< squares.length; i++)
{
    squares[i].style.backgroundColor = colors[i];
}
    colorDisplay.textContent = pickedColor;
    button.textContent = "Shuffle Colors!";
    h1.style.background ="steelblue";
});

for (var i=0; i< squares.length; i++)
{
    
    squares[i].style.backgroundColor = colors[i];
    colorDisplay.textContent = pickedColor;
    squares[i].addEventListener("click",function(){
            var clickedColor = this.style.backgroundColor;
            
            if(clickedColor === pickedColor)
            {
                message.textContent = "Correct!"
                changeColor(clickedColor);
                h1.style.backgroundColor = clickedColor;
                button.textContent = "Play Again?";
            }
            else{
                this.style.backgroundColor = "#232323"
                message.textContent = "wrong!"
                
            }
    });
}

function changeColor(color)
{
    for(var i = 0; i<squares.length;i++)
    {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(color)
{
   color = Math.floor(Math.random() * colors.length)
   return colors[color]
}

function genereateRandomColors(num){
    //make an array
    var arr = [];
    //add num random colors to array
    for(var i =0; i <num ; i++)
    {
        //get random color and push into array
        arr.push(randomColor());
    }
    //return that array
    return arr;
} 

function randomColor()
{
    // pick red 0-255
    var r = Math.floor(Math.random()*256);
    // pick blue 0-255
    var g = Math.floor(Math.random()*256);
    // pick green 0-255
    var b = Math.floor(Math.random()*256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
let container = document.querySelector('.container');

let number = 256;

// Loop to append divs to the container
for(i=0; i<number; i++){
    let div = document.createElement('div');
    div.addEventListener('mouseenter', backGround);
    // div.style.backgroundColor =randomRGB();
    container.appendChild(div);
}

// Function that returns random RGB color
function randomRGB() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var RGBColor = "rgb(" + x + "," + y + "," + z + ")";  
    return RGBColor;
  }
// Function that returns a random rgb color
function backGround(e){
    e.target.style.backgroundColor = randomRGB();
}
  
 


function hslColor(h, s, l) {
  var hue = h;
  var saturation = s + "%";
  var luminance = l + "%";

  var color = "hsl(" + hue + "," + saturation + "," + luminance + ")";

  return color;
}



/* TO DO */

// 1. Select container element
// 2. Add 500 divs with the class "shape" to it

for (var i = 0; i < 500; i++) {

  //create a div
  var shape = document.createElement('div');

  //add a class "shape" to container div
  shape.classList.add('shape');

  var duration = randomNumber (1000, 200);


  shape.style.animationDuration = duration + 'ms';


  //select container div
  var container = document.querySelector('.content');

  // add a div with a class "shape" to container div
  container.append(shape);
}

var shapes = document.querySelectorAll('.shape');

shapes.forEach(function(shape, i) {
  shape.addEventListener('mouseover', function(event) {

    if (shape.classList.contains('shape-interaction')) {
       shape.classList.remove('shape-interaction');
    } else {
  shape.classList.add('shape-interaction');
    }
    document.change("textchange").innerHTML = "...";
    
  });
});





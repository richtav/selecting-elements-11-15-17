var changeBg = document.querySelector("#change-bg");
var colors = ['pink', 'green', 'blue', 'purple', 'red'];
var clicks = 0;

changeBg.addEventListener('click', function() {
 document.body.style.backgroundColor = colors[clicks];
 clicks++;
 if (clicks === colors.length) {

 }
});

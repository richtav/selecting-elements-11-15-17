// document.queryselector will return a single element matching the criteria within the ()
document.querySelector("#header").textContent = "Hello World";


// docuement.querySelectorAll will return a array like data stcuture which contains all elements that match the criteria passed with the ()
var pStyles = document.querySelectorAll('.p-styles');

for (var x = 0; x < pStyles.length; x++) {
    pStyles[x].textContent = "I'm p-styles " + (x + 1);
}

var lis = document.querySelectorAll('li');

for (var x = 0; x < lis.length; x++) {
    lis[x].textContent = x + 1;
}


// another way to select an element b its id is document.getElementById


document.getElementById('second-header').textContent = "Something";

var awesomes = document.getElementsByClassName("awesome");

for (var x = 0; x < awesomes.length; x++) {
  awesomes[x].textContent = x + 1;
}


var h3s = document.getElementsByTagName('h3');

for (var x = 0; x < h3s.length; x++) {
  h3s[x].textContent = "buddha";
}

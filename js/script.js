var counter = 0;

$('#cat-image').click(function(e) {
  //the element has been clicked... do stuff here
    var $counterElem = $('#counter');
    counter++;
    $counterElem.text(counter);
});

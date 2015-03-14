var cats = []; //cats will be added to this
var counterElements = [];

var catHTML = '<span class="cat-container">\
    <img class="cat-image" id="cat%catNum%" src="%img%" alt="cat image" />\
    </div>\
    <div class="counter-container">\
    <h3 class="counter" id="counter-label">You have clicked me this many times:&nbsp;</h3>\
    <h2 class="counter" id="counter%catNum%" class="counter">0</h2>\
    </span>';


// Generates the cats when the page loads.
document.addEventListener('DOMContentLoaded', function() {
    var numCats = 4;
    var cols = 3;
    var s = 500;

    for (var i = 0; i < numCats; i++) {
        var cat = new Cat(i);
        cats.push(cat);
        var formattedHTML = catHTML.replace("%img%", cat.img).replace(/%catNum%/g, i);
        $("#cats-container").append(formattedHTML);
        cat.setClick();
        $("#cat" + i).basicLeft = (i % cols) * s;
        //$("#cat" + i).style.top = (Math.floor(i / cols) * s) + 'px';
    }
    counterElements = document.querySelectorAll(".counter-container");
});



var Cat = function(id) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    console.log("creating cat " + id);
    this.catID = id;
    this.img = "http://placekitten.com/g/500/200";
    this.counter = 0;    
};

Cat.prototype.setClick = function() {
    var catID = this.catID;
    $('#cat'+this.catID).click(function(e) {
        //the element has been clicked... do stuff here
        var $counterElem = $('#counter'+catID);
        console.log($counterElem);
        cats[catID].counter++;
        $counterElem.text(cats[catID].counter);
        console.log("clicked cat " + catID + " " + cats[catID].counter + " times");
    });
};










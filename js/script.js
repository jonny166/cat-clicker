var cats = {}; //cats will be added to this

var catHTML = '<span class="cat-container">\
    <img class="cat-image" id="cat-image" src="%img%" alt="cat image" />\
    </div>\
    <div class="counter-container">\
    <h3 class="counter" id="counter-label">You have clicked %catName% this many times:&nbsp;</h3>\
    <h2 class="counter" id="counter" class="counter">0</h2>\
    </span>';



// Generates the cats when the page loads.
document.addEventListener('DOMContentLoaded', function() {
    // Create all the cats
    cats["Spooky"] = new Cat("Spooky", "images/cat1.jpg");
    cats["Ellie"] = new Cat("Ellie", "images/cat2.jpg");
    cats["Andre"] = new Cat("Andre", "images/cat3.jpg");
    cats["Katie"] = new Cat("Katie", "images/cat4.jpg");
    cats["Fred"] = new Cat("Fred", "images/cat5.jpg");

    //default to the first cat
    var formattedHTML = catHTML.replace("%img%", cats["Spooky"].img).replace(/%catName%/g, cats["Spooky"].catID);
    $("#cats-container").append(formattedHTML);

    $.each(cats, function(catName, cat) {
        cat.setClick();
    });

});



var Cat = function(catID, catIMG) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    console.log("creating cat " + catID);
    this.catID = catID;
    this.img = catIMG;
    this.counter = 0;    

    $('#cat-list').append(
        $('<li>').append(
            $('<span>').attr('id', 'cat'+catID).append(catID)
        ));
};

Cat.prototype.setClick = function() {
    var catID = this.catID;
    $('#cat'+this.catID).click(function(e) {
        //the element has been clicked... do stuff here
        var $counterElem = $('#counter');
        var $catElem = $('#cat-image');
        var $counterLabelElem = $('#counter-label');
        $catElem.attr('src', cats[catID].img);
        $counterLabelElem.text("You have clicked " + catID + " this many times: ");
        console.log($counterElem);
        cats[catID].counter++;
        $counterElem.text(cats[catID].counter);
        console.log("clicked cat " + catID + " " + cats[catID].counter + " times");
    });
};










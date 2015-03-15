$(function(){
    var Cat = function(catID, catIMG) {
        // Variables applied to each of our instances go here,
        // we've provided one for you to get started
        
        // The image/sprite for our enemies, this uses
        // a helper we've provided to easily load images
        console.log("creating cat " + catID);
        this.catID = catID;
        this.img = catIMG;
        this.counter = 0;    
    };
    
    
    var model = {
        cats:  {}, //cats will be added to this    
        currentCatID: "",
        
        init: function(cats, catID){
            this.cats = cats;
            this.currentCatID = catID;
        },
    };

    var catView = {
        catHTML: '<span class="cat-container">\
            <img class="cat-image" id="cat-image" src="%img%" alt="cat image" />\
        </div>\
            <div class="counter-container">\
            <h3 class="counter" id="counter-label">You have clicked %catName% this many times:&nbsp;</h3>\
            <h2 class="counter" id="counter" class="counter">0</h2>\
        </span>',
        
        init: function(cat){
            var formattedHTML = this.catHTML.replace("%img%", cat.img).replace(/%catName%/g, cat.catID);
            $("#cats-container").append(formattedHTML);
            
            $('#cat-image').click(function(e) {
                octopus.incrementCounter();
            });
        },

        render: function(cat){
            var $counterElem = $('#counter');
            var $catElem = $('#cat-image');
            var $counterLabelElem = $('#counter-label');
            $catElem.attr('src', cat.img);
            $counterLabelElem.text("You have clicked " + cat.catID + " this many times: ");
            console.log($counterElem);
            $counterElem.text(cat.counter);
            console.log("clicked cat " + cat.catID + " " + cat.counter + " times");
        },
    };


    var listView = {
        init: function(cats) {
            //add listener to each item on the list
            $.each(cats, function(catID, cat){
                $('#cat-list').append(
                    $('<li>').append(
                        $('<span>').attr('id', 'cat'+catID).append(catID)
                    ));
                
                $('#cat'+catID).click(function(e) {
                    octopus.swapCat(catID);
                });
            });
        },
    };

    var octopus = {
        init: function() {
            // Create all the cats
            cats = {};
            cats["Spooky"] = new Cat("Spooky", "images/cat1.jpg");
            cats["Ellie"] = new Cat("Ellie", "images/cat2.jpg");
            cats["Andre"] = new Cat("Andre", "images/cat3.jpg");
            cats["Katie"] = new Cat("Katie", "images/cat4.jpg");
            cats["Fred"] = new Cat("Fred", "images/cat5.jpg");
            model.init(cats, "Spooky");
            listView.init(model.cats);
            catView.init(model.cats[model.currentCatID]);
        },

        incrementCounter: function() {
            model.cats[model.currentCatID].counter++;
            catView.render(model.cats[model.currentCatID]);
        },

        swapCat: function(catID) {
            model.currentCatID = catID;
            catView.render(model.cats[catID]);
        },
    };

    octopus.init();
});












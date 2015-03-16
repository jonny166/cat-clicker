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
        init: function(cat){
            $('#cat-image').click(function(e) {
                octopus.incrementCounter();
            });

            //For admin mode
            $("#adminMode").submit(function( event ) {
                console.log("admin mode");
                $("#adminForm").show();
                event.preventDefault();
                return;
            });

            $("#cancelButton").click(function() {
                console.log("cancel admin mode");
                $("#adminForm").hide();
                return;
            });


            $("#adminForm").submit(function( event ) {
                var newName = $("#newName").val();
                var newIMG = $("#newIMG").val();
                var newCount = $("#newCount").val();
                octopus.updateCat(newName, newIMG, newCount);
                $("#adminForm").hide();
                event.preventDefault();
                return;
            });
        },

        render: function(cat){
            var $counterElem = $('#counter');
            var $catElem = $('#cat-image');
            var $counterLabelElem = $('#counter-label');
            var $adminCountElem = $('#newCount');
            var $adminImageElem = $('#newIMG');
            var $adminNameElem = $('#newName');

            $catElem.attr('src', cat.img);
            $counterLabelElem.text("You have clicked " + cat.catID + " this many times: ");
            console.log($counterElem);
            $counterElem.text(cat.counter);
            console.log("clicked cat " + cat.catID + " " + cat.counter + " times");
            
            //update the admin form values
            $adminImageElem.val(cat.img);
            $adminNameElem.val(cat.catID);
            $adminCountElem.val(cat.counter);
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

        renameCat: function(oldName, newName) {
            $("#cat"+oldName).text(newName);
            $("#cat"+oldName).attr("id", "cat" + newName);
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
            catView.init();
            catView.render(model.cats[model.currentCatID]);
        },

        incrementCounter: function() {
            model.cats[model.currentCatID].counter++;
            catView.render(model.cats[model.currentCatID]);
        },

        swapCat: function(catID) {
            model.currentCatID = catID;
            catView.render(model.cats[catID]);
        },

        updateCat: function(newName, newIMG, newCount) {
            listView.renameCat(model.currentCatID, newName);
            model.cats[model.currentCatID].catID = newName;
            model.cats[model.currentCatID].img = newIMG;
            model.cats[model.currentCatID].counter = parseInt(newCount);
            catView.render(model.cats[model.currentCatID]);
        },
    };

    octopus.init();
});












var catArray = [{name: "Ellie",
                 clicks: 0,
                 img: "http://lorempixel.com/200/200/cats/2/",
                 nicknames: ["ellie belly", "fluffums", "miss kitty"]
                },
                {name: "Andre",
                 clicks: 0,
                 img: "http://lorempixel.com/200/200/cats/1/",
                 nicknames: ["fatty", "fluffums", "moww power"]
                },
                {name: "Fred",
                 clicks: 0,
                 img: "http://lorempixel.com/200/200/cats/3/",
                 nicknames: ["danny", "fatty"]
                }
               ];

var ViewModel = function(){
    var self = this;
    this.cats = ko.observableArray([]);
    this.catMapping = {};
    catArray.forEach(function(catItem, catIndex){
        self.cats().push(new Cat(catItem.name, catItem.img, catItem.clicks, catItem.nicknames));
        self.catMapping[catItem.name] = catIndex;
        });
    this.currentCat = ko.observable(this.cats()[0]);

    this.incrementCount = function() {
        self.currentCat().count(self.currentCat().count() + 1); 
    };

    this.swapCat = function(cat) {
        var newCat = self.catMapping[cat.name];
        self.currentCat(cat);
    };
};

var Cat = function(name, img, count, nicknames){
    this.name = ko.observable(name);
    this.count = ko.observable(count);
    this.img = ko.observable(img);
    this.nicknames = ko.observableArray(nicknames);

    this.computedLabel= ko.pureComputed(function(){
        return "You have clicked " + this.name() + " " + this.count() + " times";
    }, this);

    this.computedLevel = ko.pureComputed(function(){
        if (this.count() < 10){
            return "newborn";
        }
        else if (this.count() < 20){
            return "kitten";
        }
        else if (this.count() < 30){
            return "cat";
        }
        else{
            return "geezer-cat";
        }
    }, this);

}

ko.applyBindings(new ViewModel());

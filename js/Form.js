class Form {
    constructor(){
        this.input = createInput("what is your name");
        this.button = createButton("lets's go");
        this.greeting = createElement('h3');
    }
    hide(){
        this.input.hide();
        this.button.hide();  
        this.greeting.hide();
    }

    
    display(){
        var title = createElement('h2');
        title.html("Car Go Brrrr");
        title.position(130,0);       
        this.input.position(130,160);
        this.button.position(250,200);
        this.button.mousePressed(function(){
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("hi if you win i will lose"+player.name);
            this.greeting.position(130,160);
        })


    }




}
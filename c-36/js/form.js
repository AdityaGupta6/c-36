class Form{

constructor(){

}

display(){
    var title=createElement('h2');
    title.html("Car Racing Game");
    title.position(150,10);

    var input=createInput('name');
    input.position(250,250);

    var button=createButton("Submit");
    button.position(300,300);

    var greeting=createElement('h3');

    button.mousePressed(function () {
            input.hide();
            button.hide();
            var name =input.value()
            greeting.html("Hello"+name);
            greeting.position(250,250);

            playerCount++;
            player.update(name);
            player.updateCount(playerCount)

    })
}


}























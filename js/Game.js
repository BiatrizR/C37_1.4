class Game {
  constructor() {}

  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }

  update(state){
    database.ref("/").update({
      gameState: state
    });
  }

  start() {
   // CHAMAR PLAYER 
    
    //CHAMAR FORM

    car1 = createSprite(width/2 - 50, height - 100);
    car1.addImage("car1", car1_img);
    car1.sale = 0.08;

  }


  handleElements(){
    form.hide();
    form.titleImg.position(40, 40);
    form.titleImg.class("gameTitleAfterEffects");
  }

  play(){
    this.handleElements();
    drawSprite();
  }
}

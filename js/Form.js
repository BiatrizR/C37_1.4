class Form {
  constructor() {
    // Criar input o botões
  }

  setElementsPosition() {
   //posicionar os elementos
  }
  
  setElementsStyle() {
  //Estilizar
  }

  hide() {
   // this.greeting.hide();
    //this.playButton.hide();
    //this.input.hide();
  }
  handleMousePressed() {
     this.playButton.mousePressed(() => {
       //esconder botão e input
     
    /* var message = `
      Olá ${this.input.value()}
      </br>espere o outro jogador entrar...`;
      this.greeting.html(message); */
      playerCount += 1;
    
       //adicioanr chamada dos valores
    });
  }

  display() {
    //chamar as funções criadas
  }
}

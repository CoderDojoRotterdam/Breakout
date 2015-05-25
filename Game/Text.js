var Text = function (x, y, txt) {
    
    
    /** text **/
    this.txtStyle = { font: "35px Arial", fill: "#ffffff", align: "center" };
    
    this.txt = game.add.text(x, y, txt, this.txtStyle);
    this.txt.anchor.set(0.5);
    
};

Text.prototype.setText = function(txt){
    
    this.txt.setText(txt);
    
};
/*
    -------------------
    |     Notes       |
    -------------------
    
    CoderDojo brands: https://brandfolder.com/coderdojonederland

*/

//Global Variables
var game, logo, hero, background, ball;
var viewWidth = 710;
var viewHeight = 470;
var bricks = [];
var text = [];

var totalMotion = 0;

 window.onload = function() {
    
    // Open game engine
    game = new Phaser.Game(viewWidth, viewHeight, Phaser.AUTO, '', {
        preload: preload,
        create: create,
        update: update
    });
    
     // Preload assets for further use
    function preload () {
        
        game.load.image('logo', '/Assets/CDLogo.png');
        game.load.image('platform', '/Assets/Platform.png');
        game.load.image('ball', '/Assets/Ball.png');
         
        game.load.image('blauw', '/Assets/Blue_brick.png');
        game.load.image('rood', '/Assets/Red_brick.png');
        game.load.image('groen', '/Assets/Green_brick.png');
    }
    
    // Initialize
    function create () {
        
        /** Logo **/
        // Get the image asset as sprite
        logo = game.add.sprite(viewWidth - 150, 0, 'logo');
        logo.scale.set(0.25 , 0.25);
        
        /** Hero **/
        hero = maakEenBalk();
        
        ball = maakEenBal();
        
        /** Bricks **/
        bricks = blokkenMaker();
       
        
        // register for motion updates
        if (window.DeviceMotionEvent) {
            window.addEventListener('devicemotion', processMotion, false);
        }
    }
    
    // Loop / update
    function update(){
        
        updatePlayerMovement();
        
        updateBallMovement();
        
        raakBlok();
        
    }
    
    // process motion events
    function processMotion(evt) {
        totalMotion -= evt.accelerationIncludingGravity.y;
    }
    
    // Update function for player
    function updatePlayerMovement(){
        
        /** Keyboard movement for Player **/
         beweegBalk();
        
        if(hero != null){
            
            /** Motion control **/
            if (totalMotion > 0) {
                if(hero.getX() <= (viewWidth - hero.getWidth())){
                    hero.move(totalMotion*2);
                }
            } else if (totalMotion < 0) {
                if(hero.getX() >= 0){
                    
                    hero.move(totalMotion*2);
                }
            }
            totalMotion = 0;
        }
        
    }
    
    function updateBallMovement(){
        
        if(ball != null){
            
            ball.move();
        
            if(ball.getX() >= (viewWidth - ball.getWidth()) || ball.getX() <= 0){
                    
                ball.setRichtingX();
                
            }
            
            if(ball.getY() >= (viewHeight - ball.getWidth()) || ball.getY() <= 0){
                
                if(ball.getY() >= (viewHeight - ball.getWidth())){
                    
                    // Extract life here
                }
                
                ball.setRichtingY();
            }
            
            if(controleerBotsing(ball.getSprite(), hero.getSprite())){
                
                ball.setRichtingY();
            }
        }
    }
    
    // When win conditions are met, do the following
    function playerLose(){
        
        ball.setSpeed(0);
        ball.setX(300);
        ball.setY(300);
    }
    
};
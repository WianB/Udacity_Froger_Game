// Enemies our player must avoid

var Enemy = function() {
    //Set default values for the picture as well as default speed.
    this.sprite = 'images/enemy-bug.png';
    this.speedMultiplier =100;
};

// Update the enemy's position
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    //Ensure the game runs at the same speed.
    //Ince the bug is off screen it resets.
    if(this.x < 850){
      this.setX( (this.x + (this.speedMultiplier * dt)) );
    }else{
      this.setX(-100);
    }


    //Makes the enemy jump up and down
    /**
    this.setY( Math.round((Math.sin(this.x)*2)) + this.y );
    console.log(Math.round((Math.sin(this.x)*2)));
    **/
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//Set x position values
Enemy.prototype.setX = function(x){
  this.x = x;
};

//Set y position values
Enemy.prototype.setY = function(y){
  this.y = y;
};

//Set the movement speed of the enemy - default 100
Enemy.prototype.setSpeed = function(speed){
  this.speedMultiplier = speed;
};

//Get the current x position of the enemy
Enemy.prototype.getX = function(){
  return this.x;
};

//Get the current y position of the enemy
Enemy.prototype.getY = function(){
  return this.y;
};

// Own player class
var Player = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for the player
    this.sprite = 'images/char-boy.png';
};


//Update function was unnecessary as x and y values can be changed and rendered through the render function
//Thus only needed if the character doesn't jump but smoothly moves
Player.prototype.update = function() {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

};

// Draw the player on the screen.
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.setX = function(x){
  this.x = x;
};

Player.prototype.setY = function(y){
  this.y = y;
};

Player.prototype.getX = function(){
  return this.x;
};

Player.prototype.getY = function(){
  return this.y;
};

//Handles the input of the player
//Changes x and y values accordingly to ensure the character remains in the middle
//of a sqaure
Player.prototype.handleInput = function(input){
  if(input =='left' && this.x !==0){
    this.setX(this.x - 100);
  }
  if(input =='right' && this.x < 700){
    this.setX(this.x + 100);
  }
  if(input =='up' && this.y > -15){
    this.setY(this.y - 83);
  }
  if(input =='down' && this.y != 400){
    this.setY(this.y + 83);
  }
};


//All enemies variabe
var allEnemies = [];


//Reset the enemies to the default start positions
var resetEnemies = function(){

  allEnemies.length = 0;

  //Create enemies with various positions and speed
  var Enemy1 =  new Enemy();
  Enemy1.setX(-100);
  Enemy1.setY(234);
  Enemy1.setSpeed(150);
  allEnemies.push(Enemy1);

  var Enemy2 =  new Enemy();
  Enemy2.setX(-100);
  Enemy2.setY(234);
  Enemy2.setSpeed(80);
  allEnemies.push(Enemy2);

  var Enemy3 =  new Enemy();
  Enemy3.setX(-100);
  Enemy3.setY(151);
  Enemy3.setSpeed(200);
  allEnemies.push(Enemy3);

  var Enemy4 =  new Enemy();
  Enemy4.setX(-100);
  Enemy4.setY(151);
  Enemy4.setSpeed(180);
  allEnemies.push(Enemy4);

  var Enemy5 =  new Enemy();
  Enemy5.setX(-100);
  Enemy5.setY(68);
  Enemy5.setSpeed(250);
  allEnemies.push(Enemy5);
};


//The player variable
var player = new Player();


//Resets the player to some random start point
var resetPlayer = function(){
  // Place the player object in a variable called player

  //Set Y position of the bottom tile
  player.setY(400);

  //Set random  X position
  player.setX(Math.floor(Math.random() * (8)) * 100);
}


//Call function for the first time
resetPlayer();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

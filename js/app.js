

// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug3.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {

  this.x = this.x + (100 * dt);

  if (this.x > 402){
    this.x= 0;
  }
};


// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
//    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  //  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
//    console.log("Render Enemy");

};


// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var playerX = 0;
var playerY = 430;


function Player() {
  this.update = function () {
  }

  this.render = function() {
    ctx.drawImage(playerImage, playerX, playerY);
  }

  this.handleInput = function(key) {

    if (key == "left") {
        playerX = playerX - 101;
        if(playerX < 0){playerX = 0};
    };

    if (key == "right") {
        playerX = playerX + 101
        if(playerX > 402){playerX = 402};

    }

    if (key == "up") {
        playerY = playerY - 30
        if(playerY < 0){playerY = 0};
    }

    if (key == "down") {
      playerY = playerY + 30
      if(playerY > 430){playerY = 430};
    }

    if (playerY == 0){
      alert('You Win');
    }


  }
  }


// Background block size: 101 × 171


(function makePlayerImage()
{
  playerImage = new Image();
  playerImage.src = 'images/flint-the-spy.png';
  playerImage.onload = function(){
//    ctx.drawImage(playerImage, 100, 100);
    console.log("Player Created");
  }
})();



// Now instantiate your objects.

// Place all enemy objects in an array called allEnemies
var allEnemies = [];

// Place the player object in a variable called player
var player = new Player();

var enemy1 = new Enemy();
enemy1.x = 0;
enemy1.y = 100;

var enemy2 = new Enemy();
enemy2.x = 0;
enemy2.y = 200;

var enemy3 = new Enemy();


allEnemies.push(enemy1);
allEnemies.push(enemy2);
allEnemies.push(enemy3);






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

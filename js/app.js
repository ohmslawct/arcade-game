'use strict';

// Enemies our player must avoid
var Enemy = function(x, y, speed) {
  this.x = x;
  this.y = y;
  this.sprite = 'images/enemy-bug3.png';
  this.speed = speed;

};

// Update the enemy's position
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {

  this.x = this.x + (this.speed * dt);
  //TODO: have app autoadjust to canvas size
  //  canvasWidth = document.queryselector(canvas).value

  // if enemy moves off canvas, have it start at the beginning of canvas
  if (this.x > 402) {
    this.x = 0;
  }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

function Player(x, y) {
  this.x = x;
  this.y = y;
  this.playerImage = new Image();
  this.playerImage.src = 'images/flint-the-spy.png';

  this.update = function() {};

  this.render = function() {
    ctx.drawImage(this.playerImage, this.x, this.y);
  };

  this.handleInput = function(key) {

    if (key == "left") {
      this.x = this.x - 101;
      if (this.x < 0) {
        this.x = 0;
      }
    }

    if (key == "right") {
      this.x = this.x + 101;
      if (this.x > 402) {
        this.x = 402;
      }
    }

    if (key == "up") {
      this.y = this.y - 30;
      if (this.y < 0) {
        this.y = 0;
      }
    }

    if (key == "down") {
      this.y = this.y + 30;
      if (this.y > 430) {
        player.y = 430;
      }
    }

    if (this.y === 0) {
      alert('You Win');
      this.x = 0;
      this.y = 430;
      this.speed = this.speed + 1000;
    }
  }
}

//  instantiate  objects.

// Place all enemy objects in an array called allEnemies
var allEnemies = [];

// Place the player object in a variable called player and set x and y coordinates
var player = new Player(0, 430);

var enemy1 = new Enemy(0, 100, 100); // x, y, speed

var enemy2 = new Enemy(70, 200, 80);

var enemy3 = new Enemy(0, 300, 150);

allEnemies.push(enemy1, enemy3, enemy2);

// This listens for key presses and sends the keys to your
// Player.handleInput() method.
document.addEventListener('keyup', function(e) {
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
    32: 'space'
  };
  player.handleInput(allowedKeys[e.keyCode]);
});

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

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

function Player() {
  this.update = function() {}

  this.render = function() {
    ctx.drawImage(playerImage, player.x, player.y);
  }

  this.handleInput = function(key) {

    if (key == "left") {
      player.x = player.x - 101;
      if (player.x < 0) {
        player.x = 0
      };
    };

    if (key == "right") {
      player.x = player.x + 101
      if (player.x > 402) {
        player.x = 402
      };

    }

    if (key == "up") {
      player.y = player.y - 30
      if (player.y < 0) {
        player.y = 0
      };
    }

    if (key == "down") {
      player.y = player.y + 30
      if (player.y > 430) {
        player.y = 430
      };
    }

    if (player.y == 0) {
      alert('You Win');
      player.x = 0;
      player.y = 430;
    }
  }
}(function makePlayerImage() {
  playerImage = new Image();
  playerImage.src = 'images/flint-the-spy.png';
  playerImage.onload = function() {
    //    ctx.drawImage(playerImage, 100, 100);
    console.log("Player Created");
  }
})();

//  instantiate  objects.

// Place all enemy objects in an array called allEnemies
var allEnemies = [];

// Place the player object in a variable called player
var player = new Player();
player.x = 0;
player.y = 430;

var enemy1 = new Enemy();
enemy1.x = 0;
enemy1.y = 100;

var enemy2 = new Enemy();
enemy2.x = 0;
enemy2.y = 200;

var enemy3 = new Enemy();
enemy3.x = 80;
enemy3.y = 300;

allEnemies.push(enemy1, enemy2, enemy3);

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

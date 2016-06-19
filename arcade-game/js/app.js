// Enemies our player must avoid
var Enemy = function(x,y,speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x=x;
    this.y=y;
    this.speed=speed;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;
    this.reset();
    this.checkCollisions();
    //I need to write another thing to handle collision
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Reset enemy's location at if it reaches endpoint
Enemy.prototype.reset = function() {
    if (this.x >= 500) {
        this.x = -100;
        //after reset the speed of enemy will be bewteen 50~300 randomly
        this.speed = Math.floor(Math.random() * (300 - 50 + 1)) + 50;
    }
};

// Check if enemy collide with player
Enemy.prototype.checkCollisions = function() {
    for (var i = 0; i < allEnemies.length; i++) {
        if ((allEnemies[i].x) <= player.x + 30 &&
            (allEnemies[i].x + 30) >= (player.x) &&
            (allEnemies[i].y) <= player.y + 30 &&
            (allEnemies[i].y + 30) >= (player.y)) {
            // reset player to start position if collide with enemy
            player.reset();
        }
    }
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function (x,y){
    this.sprite = 'images/char-boy.png';
    this.x=x;
    this.y=y;
}

Player.prototype.update = function(dt){};

Player.prototype.render = function() {
    //insruction ask me to use to code from enemy directly
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

};

Player.prototype.handleInput = function(direction) {
    if (direction == 'up') {
        this.y = this.y - 80;
    } else if (direction == 'down') {
        this.y = this.y + 80;
    } else if (direction == 'left') {
        this.x = this.x - 100;
    } else if (direction == 'right') {
        this.x = this.x + 100;
    }
    // keep player on canvas
    if (this.x < 0) {
        this.x = 0;

    } else if (this.x > 400) {
        this.x = 400;

    }
    // let's handel y coordinate
    if (this.y < 0) {
        //reset the player at the water
        alert("YOU WIN!!!");
        this.reset();
    } else if (this.y > 400) {
        this.y = 390;
    }
};

Player.prototype.reset = function() {
    this.x = 202;
    this.y = 390;
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var test1=new Enemy(0,60,200);
var test2=new Enemy(310,140,100);
var test3=new Enemy(310,230,100);
var allEnemies = [test1,test2,test3];
var player = new Player(202,390);
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

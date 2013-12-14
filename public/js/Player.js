function Player(){

    this.sprite = null;
    this.name = 'Bob';
    this.weapon = null;
    this.pos = {x:0,y:0};
    this.facing = "up";

    var self = this;

    this.init = function(game,sprite,x,y)
    {
        self.pos = {x:x,y:y};
        self.sprite = game.add.sprite(self.pos.x,self.pos.y,sprite);
        game.camera.follow(self.sprite);
    };

    this.update = function(game,cursors)
    {
        self.sprite.body.velocity.x =0;
        self.sprite.body.velocity.y = 0;

        if(cursors.left.isDown)
        {
            self.sprite.body.velocity.x = -150;
            self.facing = "left";
        }
        else if(cursors.right.isDown)
        {
            self.sprite.body.velocity.x = 150;
            self.facing = "right";
        }
    };

}

function Weapon(){

}

function NPC(){
    
}
/** game.js
    main game file to initiate phaser and run the game loop
    expect a lot of hacky code here

**/


function YOGO(wrapperID)
{
    this.phaser = null;
    this.wrapperID=null;
    this.player = null;
    this.w = 800; this.h = 600;

    var self = this;

    this.preload = function()
    {
        //console.log("preload called",this,self);
        //load assets
        //game.load.tilemap(name,src,?,type|Phaser.Tilemap.TILED_JSON)
        //game.load.tileset(name, src, framewidth,frameheight )
        //game.load.spritesheet(name, src, framewidth, frameheight )
        //game.load.image(name, src)
        self.phaser.load.spritesheet('blobred','img/blobred.png',64,64);

    };

    this.create = function()
    {
        //init for phaser
        self.player.init(self.phaser,'blobred',parseInt(self.w/2),parseInt(self.h/2));
        self.cursors = self.phaser.input.keyboard.createCursorKeys();

    };

    this.update = function()
    {
        //update cycle

        //collide with environment
        //this.phaser.physics.collide(this.player.sprite,this.layer);

        self.player.update(self.phaser,self.cursors);

    };

    this.render = function(){

    };

    this.wrapperID = wrapperID;
    this.w = 800; this.h=600;
    this.phaser = new Phaser.Game(this.w,this.h,Phaser.RENDERER_CANVAS,wrapperID,
        {
            preload:this.preload,
            create: this.create,
            update: this.update,
            render: this.render
        });

    this.player = new Player();
}



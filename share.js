MyGame.share = function(game) {
	game.whtY = 200;
};
var self;
MyGame.share.prototype = {
    create: function() {
		
		
		
		self = this;
		
       	game.outer = game.add.graphics(game.world.centerX, game.whtY);

	    game.outer.beginFill(0x0e1736, 1);
	    game.outer.drawCircle(0, 0, 1000);
	    game.outer.endFill();
	    
	    game.picGroup = game.add.group();


	    this.createFans(1,1,0-135,45,0+22.5,360+22.5)//dir,ydir,angle,deg,picangle,xuanangle

	    this.createFans(1,-1,45-135,45,45+22.5,45-360+22.5)

	    this.createFans(1,1,90-135,45,90+22.5,90+360+22.5)

	    this.createFans(1,-1,135-135,45,135+22.5,135-360+22.5)

	    this.createFans(1,1,180-135,45,180+22.5,180+360-360+22.5)

		this.createFans(1,-1,225-135,45,225+22.5,225-360-360+22.5)

		this.createFans(1,1,270-135,45,270+22.5,270+360-360+22.5)

		this.createFans(1,-1,315-135,45,315+22.5,315-360-360+22.5)
		

		
		
		for(var i=0;i<=data.length-1;i++)
		{
			this.createApp('game.app',''+sex+'_'+i+'',data[i].x,data[i].y)
		}
		
		
		

    },
    update: function() {
    	
    	
    	
    },
    createFans : function(xdir,ydir,angle,deg,picangle,xuanangle){
    	
    	
		game.pic = game.add.image(game.world.centerX,game.whtY,'pic')
	    game.pic.angle = picangle;
	    game.pic.anchor.set(0.5)
	    game.pic.scale.x = xdir;
	    game.pic.scale.y = ydir;
	    game.picGroup.add(game.pic);
	    

    	game.sector = game.add.graphics(game.world.centerX, game.whtY);
    	game.sector.angle = angle;
	    game.sector.clear();
	    game.sector.beginFill(0xa000f3);
	    game.sector.arc(0, 0, 500, 0, game.math.degToRad(360 - deg), true,128);
	    game.sector.endFill();
	    
	    
		game.pic.mask = game.sector;
		game.rotate = game.add.tween(game.pic).to({angle: xuanangle}, 8000, "Linear", true, 0, -1 ,false);
		
	    
    },
    createApp : function(o,key,x,y){
    	game.picGroup.forEach(function(i){
    		o = game.add.sprite(x,y,key);
			o.scale.x = o.scale.y = 1;
			i.addChild(o)
    	})

    }
};

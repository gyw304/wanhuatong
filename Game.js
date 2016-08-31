MyGame.Game = function(game) {
	game.whtY = 500;
	game.flag = true;
};
var self;
MyGame.Game.prototype = {
    create: function() {
		
		$('canvas').attr('id','oCanvas')
		
		
		self = this;
		
       	game.outer = game.add.graphics(game.world.centerX, game.whtY);
       	
	    //game.outer.lineStyle(30, 0x600060, 1);
	    game.outer.beginFill(0x0e1736, 1);
	    game.outer.drawCircle(0, 0, 1000);
	    game.outer.endFill();
	    
	    game.picGroup = game.add.group();
	    

	    
	    //game.obj = game.add.group();
	    
	    
	    /*for(var i=0;i<=8-1;i++)
		{
			self.addCopyObj('game.kouhong',0,0);
			
		}
		console.log(game.obj)*/
		
		
		
		
		
	    

	    this.createFans(1,1,0-135,45,0+22.5,360+22.5)//dir,ydir,angle,deg,picangle,xuanangle

	    this.createFans(1,-1,45-135,45,45+22.5,45-360+22.5)

	    this.createFans(1,1,90-135,45,90+22.5,90+360+22.5)

	    this.createFans(1,-1,135-135,45,135+22.5,135-360+22.5)

	    this.createFans(1,1,180-135,45,180+22.5,180+360-360+22.5)

		this.createFans(1,-1,225-135,45,225+22.5,225-360-360+22.5)

		this.createFans(1,1,270-135,45,270+22.5,270+360-360+22.5)

		this.createFans(1,-1,315-135,45,315+22.5,315-360-360+22.5)
		
		
		game.dragArea  = game.add.graphics(game.world.centerX + 250, game.world.centerY + 425);
		game.dragArea.lineStyle(25, 0x600060, 1);
	    game.dragArea.beginFill(0x0e1736, 1);
	    game.dragArea.drawCircle(0, 0, 1000);
	    game.dragArea.endFill();
	    
	    game.dragArea.scale.x = game.dragArea.scale.y = 0.5;
	    
	    
	    
	    game.itemWarp = game.add.image(80,1150,'item_warp');
	    game.sex = game.add.sprite(0,game.itemWarp.y - 100,''+sex+'_ico');
		
		
		
		this.adddragObj('game.'+sex+'_0Drag',game.itemWarp.x+75,game.itemWarp.y+50,''+sex+'_0');
		this.addCopyObj('game.'+sex+'_0',''+sex+'_0')
		
		
		this.adddragObj('game.'+sex+'_1Drag',game.itemWarp.x+250,game.itemWarp.y+85,''+sex+'_1')
		this.addCopyObj('game.'+sex+'_1',''+sex+'_1')
		
		this.adddragObj('game.'+sex+'_2Drag',game.itemWarp.x+375,game.itemWarp.y+75,''+sex+'_2')
		this.addCopyObj('game.'+sex+'_2',''+sex+'_2')
		
		this.adddragObj('game.'+sex+'_3Drag',game.itemWarp.x+75,game.itemWarp.y+225,''+sex+'_3')
		this.addCopyObj('game.'+sex+'_3',''+sex+'_3')
		
		this.adddragObj('game.'+sex+'_4Drag',game.itemWarp.x+250,game.itemWarp.y+225,''+sex+'_4')
		this.addCopyObj('game.'+sex+'_4',''+sex+'_4')
		
		this.adddragObj('game.'+sex+'_5Drag',game.itemWarp.x+375,game.itemWarp.y+225,''+sex+'_5')
		this.addCopyObj('game.'+sex+'_5',''+sex+'_5')
		

		
		game.relBtn = game.add.button(0,game.world.height + 25 ,'rel-btn',function(){
			
		},false);
		game.relBtn.anchor.set(0,1);
		game.relBtn.visible = false;
		
		
		game.okBtn = game.add.button(game.world.width - 25,game.world.height + 25 ,'ok-btn',function(){
			
		},false);
		//game.Btn.inputEnabled = true;
		game.okBtn.anchor.set(1);
		game.okBtn.visible = false;
		
		game.input.onDown.add(function(event){
			
			if(game.paused)
			{
				//rel
				if(event.x >= 0  && event.x <= 500 && event.y >= game.world.height - 350)
				{
					game.Btn.visible = true;
					game.relBtn.visible = false;
					game.okBtn.visible = false;
					game.paused = false;
				}
				
				//ok
				
				if(event.x >= 600  && event.y >= game.world.height - 350)
				{
					//alert('µÈ´ýÐûÅô')
					//console.log(convertCanvasToImage(document.getElementById('oCanvas')))
					
					/*var crop_canvas = document.getElementById('oCanvas');
					
					crop_canvas.getContext('2d').drawImage(0, 0, 2200, 500, 0, 0, 2200, 500);  
    				window.open(crop_canvas.toDataURL("image/png"));*/
					
				}
				
			}
		}, self);
		
		
		game.Btn = game.add.sprite(0,game.world.height + 25,'sc-btn');
		game.Btn.inputEnabled = true;
		game.Btn.anchor.set(0,1);
		
		game.Btn.events.onInputUp.add(function(){
			game.paused = true;
			game.Btn.visible = false;
			game.relBtn.visible = true;
			game.okBtn.visible = true;
		}, self);

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
    adddragObj : function(o,x,y,key){
    	o = game.add.sprite(x,y,key);
    	o.angle = 22.5;
    	o.anchor.set(0.5);
	    o.scale.x = o.scale.y = 0.5;
	    o.inputEnabled = true;
	    o.input.enableDrag(false, true);
	    o.events.onDragStart.add(this.dragStart);
    	o.events.onDragStop.add(this.dragStop);
    	o.events.onDragUpdate.add(this.dragUpdate);
    },
    addCopyObj : function(o,key){
    	game.picGroup.forEach(function(i){
    		o = game.add.sprite(-9999,-9999,key);
			o.scale.x = o.scale.y = 1;
			i.addChild(o)
    	})
    },
    dragStart : function(o){
    	o.alpha = 0.5;
    },
    dragStop : function(o){
    	o.alpha = 1;
		game.picGroup.forEach(function(i){
			i.children[o.key.split("_")[1]].x = (o.x - game.dragArea.x - o.width/2)*2;
			i.children[o.key.split("_")[1]].y = (o.y - game.dragArea.y - o.height/2)*2;
		})
    },
    dragUpdate : function(o){
    	console.log(o.x + '|' + o.y + '|' + o.width + '|' + o.height)
    	//console.log(o.x + '|' + o.y)
    }
};


function convertCanvasToImage(canvas) {  

    return canvas.toDataURL("image/png");  
}  


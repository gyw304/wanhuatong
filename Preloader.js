MyGame.Preloader = function(game){
};
MyGame.Preloader.prototype = {
    create:function(){
        this.load.onFileComplete.add(this.fileComplete, this);
        this.load.onLoadComplete.add(this.loadComplete, this);
        this.text = this.add.text(this.world.width/2, this.world.height/2-50, '', { fill: '#fff' ,font: "bold 80px Arial"});
        this.text.anchor.set(0.5);
        this.start();
    },
    start:function(){

    	game.load.image('pic','assets/pic.png')
    	
    	for(var i=0;i<=6-1;i++)
    	{
    		game.load.image('girl_'+i+'','assets/girl_'+i+'.png')
    	}
    	
    	for(var i=0;i<=6-1;i++)
    	{
    		game.load.image('boy_'+i+'','assets/boy_'+i+'.png')
    	}

    	
  		
  		game.load.image('item_warp','assets/item_warp.png');
  		game.load.image('girl_ico','assets/girl_ico.png');
  		game.load.image('boy_ico','assets/boy_ico.png');
  		game.load.image('sc-btn','assets/sc-btn.png');
  		game.load.image('ok-btn','assets/ok-btn.png');
  		game.load.image('rel-btn','assets/rel-btn.png');
    	
        this.load.start();
    },
    fileComplete:function(progress){
        this.text.setText( + progress + "%");
    },
    loadComplete:function(){
    	
    	if(share)
    	{
    		this.state.start('share');
    	}
    	else
    	{
    		this.state.start('Game');
    	}
    	
        
    }
};
var mapLayer = cc.Layer.extend({
		_tilemap:null,
		ctor:function (mapNo)
		{
			this._super();
			var c = cc.winSize;
			this._tilemap = new gameMap(res.gameBoardTMX);			
					
			this._tilemap.initMap();
			
			this.addChild(this._tilemap, 1);	
			return true;
		},
		
		reset:function()
		{
		//type reset here
		
		},
		onExit:function()
		{		
		this._super();
		this.removeAllChildren(true);
		},		
	});	
	
	
var gameMap= cc.TMXTiledMap.extend({
		centerTile:null,_numRows:0,_numCol:0,sideTiles:[],_mainLayer:null,
		ctor:function(str)
		{	
		
		this._super(str);	
			
		},
		initMap:function(){
		this._mainLayer=this.getLayer("BkgLayer");
		
		},
		});

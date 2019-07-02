var mapLayer = cc.TMXLayer.extend({
		_tilemap:null,
		_tileWidth:null,
		_tileHeight:null,
		_tilePositions:null,
		ctor:function (mapNo)
		{
			this._super();
			this._tilePositions=[];
			var c = cc.winSize;
			this._tilemap = new gameMap(res.gameBoardTMX);			
					
			this._tilemap.initMap();
			cc.log(this._tilePositions);
			
			this.addChild(this._tilemap, 1);	
			return true;
		},
		init:function()
		{
		// init functionality
		this._tileHeight=this._tilemap._mainLayer.tileHeight;		
		this._tileWidth=this._tilemap._mainLayer.tileWidth;
		this.calculateTilePositions();
		},
		calculateTilePositions:function()
		{
			for(var i=0;i<8;i++){
				for(var j=0;j<8;j++)
				{
					if(i%2==0 && j%2==0)
					{
						this._tilePositions.push(this.getPositionOfTile(cc.p(j,i)));
					}
					else if(i%2==1 && j%2==1)
					{
						this._tilePositions.push(this.getPositionOfTile(cc.p(j,i)));
					}

				}
			}

		},
		getInitPositions()
		{
			return this._tilePositions;

		},
		getPositionOfTile:function(pos)
		{
			//cc.log(pos);
			pos.y=7-pos.y;
			var tilePos=(this._tilemap._mainLayer.getPositionAt(pos));
			//cc.log(this.getPosition().x+tilePos.x+this._tileWidth*0.5, this.getPosition().y+tilePos.y+this._tileHeight*0.5);
			return cc.p(this.getPosition().x+tilePos.x+this._tileWidth*0.5, this.getPosition().y+tilePos.y+this._tileHeight*0.5);//this.getPosition().x+tilePos.x, this.getPosition().y+tilePos.y);//this.getPosition();
		},
		detectTouchedTile:function(touchPosition)
		{
			pos=cc.p(Math.floor(touchPosition.x/this._tileWidth),Math.floor(touchPosition.y/this._tileHeight));
			pos.y=7-pos.y;
			cc.log(pos);
			tile=this._tilemap._mainLayer.getTileAt(pos);
			return this._tilemap._mainLayer.getTileAt(pos);//touchPosition);
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
		getTileWidth()
		{
			return this._mainLayer.tileWidth;
		},
		getTileHeight()
		{
			return this._mainLayer.tileHeight;
		},
		});

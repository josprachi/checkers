var Player=cc.Node.extend({
men:[],
aliveMen:0,
_color:null,
ctor:function()
{
	for(var i=0;i<11;i++)
	{
		this.men.push(new man());
	}
//return true;
},
init:function(color,positions)
{
//this.color=color;
this.setInitialPositions(positions);
},
update:function(dt){},
setInitialPositions:function(positions)
{
for(var i=0;i<11;i++)
	{
		this.men[i].setPosition(positions[i]);
	}
},
detectPossibleMoves:function(){},
move:function(man,destPosition){},
killMan:function(man){},
promoteMan:function(man)
{
 man.promoteToKing();
},

});

var man=cc.Sprite.extend({
	canMove:false,
	isKing:false,
	normalTexture:null,
	kingTexture:null,
	_color:null,
	ctor:function(name)
	{cc.log("here");
		this._super(name);
		
	},
init:function(bcolor,normalTexture,KingTexture)
{
this._super();
		this.initWithFile(bcolor,normalTexture,KingTexture);
		//return true;
},
promoteToKing:function() {
	this.isKing=true;
	this.setTexture(this.kingTexture);
},
update:function(dt)
	{
		
		
	},

reset:function(){},
});




var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    player1:null,
    player2:null,
    //manSpr:null,
	//seedSpr:[],
    ctor:function () {
        this._super();
  var size = cc.winSize;
        this.player1=new Player();
        this.player2=new Player();
        return true;
    },

setInitialPositions(position)
{
this.player1.setInitialPositions(position.splice(0,31));
this.player2.setInitialPositions(position.splice(32,63));
//this.manSpr.setPosition(position);
},
update : function (dt) {
			
		},
	
});


var Player=cc.Node.extend({
men:null,
aliveMen:0,
_color:null,
ctor:function()
{
	this._super();
	this.men=[];
	for(var i=0;i<12;i++)
	{
		this.men.push(new man());
	}
return true;
},
init:function(color)
{	
this._color=color;
this.initMen(color);
return true;
},

initMen:function(color)
{
for(var i=0;i<this.men.length;i++)
 {
  if(color=="BLUE")
  {	  
  this.men[i].init(res.blueManPng,res.blueKingPng,color);
  }
  else
  {
  	 this.men[i].init(res.redManPng,res.redKingPng,color);
  }	
  this.addChild(this.men[i]);
 }
},
setInitialPositions:function(positions)
{
for(var i=0;i<12;i++)
	{
		this.men[i].setPosition(positions[i]);		
	}	
},
update:function(dt){},
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
	ctor:function()
	{//cc.log("here");
		this._super();
		return true;
		
	},
init:function(normalTexture,KingTexture,bcolor)
{
this._super();
		this.initWithFile(normalTexture);
		this._color=bcolor;
		this.normalTexture=normalTexture;
		this.kingTexture=KingTexture;
		return true;
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
   
    ctor:function () {
        this._super();
  var size = cc.winSize;
  cc.log("ctor");
        this.player1=new Player();
        this.player1.init("BLUE");
        this.player2=new Player();        
        this.player2.init("RED");
        this.player1.setAnchorPoint(0.5,0.5);
        this.player2.setAnchorPoint(0.5,0.5); 
        this.player1.setPosition(size.width*0.25,size.height*0.2);
        this.player2.setPosition(size.width*0.25,size.height*0.2);       
        return true;
    },

setInitialPositions(position)
{
this.player1.setInitialPositions(position.slice(0,12));
this.player2.setInitialPositions(position.slice(20,32));
this.addChild(this.player1);
this.addChild(this.player2);
},
update : function (dt) {
			
		},
	
});


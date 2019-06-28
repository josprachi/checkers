var Player=cc.Node.extend({
men:[],
aliveMen:0,
_color:null,
ctor:function()
{
	for(var i=0;i<12;i++)
	{
		this.men.push(new man());
	}
	cc.log(this.men.length);
return true;
},
init:function(color,positions)
{
	cc.log("here");
this._color=color;
this.initMen(color);

return true;
//this.setInitialPositions(positions);
},
update:function(dt){},
initMen:function(color)
{
for(var i=0;i<this.men.length;i++)
 {
  if(color=="BLUE")
  {	
  	cc.log("blue");
  this.men[i].init(color,res.blueManPng,res.blueKingPng);
  }
  else
  {
  	 this.men[i].init(color,res.redManPng,res.redKingPng);
  }	
  //this.addChild(this.men[i]);
 }
},
setInitialPositions:function(positions)
{
for(var i=0;i<12;i++)
	{
		this.men[i].setPosition(positions[i*2]);		
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
	{//cc.log("here");
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
        this.player1.init("BLUE");
        this.player2.init("RED");
        this.addChild(this.player1);
        this.addChild(this.player2);
        return true;
    },

setInitialPositions(position)
{
//cc.log("position length "+position.length);
this.player1.setInitialPositions(position.slice(0,32));
this.player2.setInitialPositions(position.slice(32,63));
//cc.log("position length ** "+position.length);
//this.manSpr.setPosition(position);
},
update : function (dt) {
			
		},
	
});


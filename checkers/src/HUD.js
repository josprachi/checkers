var UILayer = cc.Layer.extend({
tileIndicator1:null,
tileIndicator2:null,
ctor:function()
{  this._super();		
   this.init();
	},
init:function()
{

this.tileIndicator1= new cc.Sprite(res.tileIndicatorPng);
this.tileIndicator2= new cc.Sprite(res.tileIndicator2Png);
this.tileIndicator1.setVisible(false);
this.tileIndicator2.setVisible(false);
this.addChild(this.tileIndicator1);
this.addChild(this.tileIndicator2);
return true;
},
setIndicatorPosition:function(tilePos)
{
	this.tileIndicator1.setPosition(tilePos);
	this.tileIndicator1.setVisible(true);
},
hideIndicators:function()
{
this.tileIndicator1.setVisible(false);
this.tileIndicator2.setVisible(false);

},


});
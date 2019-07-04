var HelloWorldScene = cc.Scene.extend({
    gameBkg: null,
    playerLayer:null,
    HudLayer:null,

    ctor:function()
        {
        this._super();
        cc.log("onenter");
            cc.eventManager.addListener({
                event: cc.EventListener.TOUCH_ONE_BY_ONE,
                swallowTouches: true,
                sourceTile:null,
                destinationTile:null,
                onTouchBegan: function (touch, event) 
                {                    
                    var target = event.getCurrentTarget().gameBkg;
                    var location = target.convertToNodeSpace(touch.getLocation());
                    /*if(this.sourceTile==null)
                        {
                            this.sourceTile=target.detectTouchedTile(location);
                        }
                    else
                    {
                        this.destinationTile=target.detectTouchedTile(location);
                    }    
*/
                    return true;
                },
                onTouchEnded: function (touch, event)
                {  
                    var target = event.getCurrentTarget().gameBkg;
                    var location = target.convertToNodeSpace(touch.getLocation());
                    var tile=target.detectTouchedTile(location)
                    if(tile!=null)
                    {
                        tile.updateDisplayedColor(cc.color(255,0,0));                 
                        
                    }
                    
                    return true;    
                },
        }, this);
        },
        
    onEnterTransitionDidFinish:function () {
        this._super();
        this.HudLayer=new UILayer();
        this.HudLayer.setAnchorPoint(0.5,0.5);
        this.HudLayer.setPosition(cc.winSize.width*0.25,cc.winSize.height*0.2);
            
       
        this.gameBkg = new mapLayer();
        this.gameBkg.init();
        this.gameBkg.setAnchorPoint(0.5,0.5);
        this.gameBkg.setPosition(cc.winSize.width*0.25,cc.winSize.height*0.2);
        var pos=this.gameBkg.getInitPositions();
        this.addChild(this.gameBkg)
        
        this.playerLayer = new HelloWorldLayer();        
        this.addChild(this.playerLayer);
        this.playerLayer.setInitialPositions(pos);
        this.addChild(this.HudLayer);
    }
});
/****************************************************************************
 Copyright (c) 2017-2018 Xiamen Yaji Software Co., Ltd.
 
 http://www.cocos2d-x.org
 
 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:
 
 The above copyright notice an
 d this permission notice shall be included in
 all copies or substantial portions of the Software.
 
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/

var HelloWorldScene = cc.Scene.extend({
    gameBkg: null,
    playerLayer:null,

    ctor:function()
        {
        this._super();
            cc.eventManager.addListener({
                event: cc.EventListener.TOUCH_ONE_BY_ONE,
                swallowTouches: true,
                sourceTile:null,
                destinationTile:null,
                onTouchBegan: function (touch, event) 
                {
                    //var target = event.getCurrentTarget();
                    //var location = target.convertToNodeSpace(touch.getLocation());
                    //var locationTouch = target.convertTouchToNodeSpace(touch.getLocation());
                    //cc.log(location+"  "+locationTouch);

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
                    //var tile=target.detectTouchedTile(location)
                    if(tile!=null)
                    {
                        //tile.setPosition(cc.p(3,0));//updateDisplayedColor(cc.color(255,0,0));
                       // tile.color=(cc.color(255,0,0));
                        
                    }
                    cc.log(this.sourceTile+";"+this.destinationTile);
                        //target.detectHitDir(cc.p(location.x,location.y));
                    return true;    
                },
        }, this);
        },
        
    onEnterTransitionDidFinish:function () {
        this._super();
        
        this.gameBkg = new mapLayer();
        //this.manSprite = new man(res.blueManPng);
        //this.manSprite.init("blue",res.blueManPng,blueKingPng);
        //var cel=new Cell(res.blueManPng);


        this.gameBkg.init();
        this.gameBkg.setAnchorPoint(0.5,0.5);
        this.gameBkg.setPosition(cc.winSize.width*0.25,cc.winSize.height*0.2);
        cc.log(this.gameBkg.convertToWorldSpace(this.gameBkg.getPosition()));//this.gameBkg.getPosition()));
        //this.gameBkg.addChild(this.cel);
        //this.cel.setPosition(1,1);
        this.addChild(this.gameBkg)
        this.playerLayer = new HelloWorldLayer();
        var pos=this.gameBkg.getInitPositions();//_tilePositions;//this.gameBkg.convertToWorldSpace(this.gameBkg.getPosition());
        cc.log(pos.length);
        this.playerLayer.setInitialPositions(pos);//this.gameBkg._tilemap._mainLayer.getPositionAt(cc.p(2,2)));//this.gameBkg.getPositionOfTile(2,2));
        this.addChild(this.playerLayer);
        cc.log("positions");
        cc.log(this.gameBkg.getInitPositions().length);
        
    }
});
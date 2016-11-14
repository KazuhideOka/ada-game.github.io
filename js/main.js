var state;
var player;
var obj = new Array(10);
var map = new Array(30);
//------------------------------------------------------------------------------
function load(){
    
	canvas = document.getElementById("canvas");
	ctx = canvas.getContext("2d");
    timer=new Date();
    width = 1920;
    height = 1080;
    scroll = true;
    sizing();

    state = "opening";
    
    player = new Player();
    
    for(var i=0;i<obj.length;i++){
        obj[i] = new Obj("man01",Math.floor(Math.random()*1920),500/*Math.floor(Math.random()*3000)*/,200,Math.floor(Math.random()*1000));
    }
    
    for(var i=0;i<map.length;i++){
        map[i] = new Array(map.length);
        for(var j=0;j<map[i].length;j++){
            map[i][j] = new Map(Floor_img_green,i,j);
        }
    }

    
	loop();
}
//------------------------------------------------------------------------------
function move(){

    player.move();
    
    var map_x = Math.floor(player.x/Map_w);
    var map_y = Math.floor(player.y/Map_h);
    if(map_x<1) map_x=1;
    if(map_y<1) map_y=1;
    for(var i=map_x-1;i<map_x+2;i++){
        for(var j=map_y-1;j<map_y+2;j++){
            map[i][j].move();
        }
    }
    
    for(var i=0;i<obj.length;i++){
        obj[i].move();
    }
    

    
}
//------------------------------------------------------------------------------
function draw() {
    ctx.globalCompositeOperation="source-over";
	drawRect(width/2,height/2,width,height,0,0,0,255);
    drawText("Now Loading...",200,1920/2,64,255,255,255,255);
    
    var map_x = Math.floor(player.x/Map_w);
    var map_y = Math.floor(player.y/Map_h);
    if(map_x<1) map_x=1;
    if(map_y<1) map_y=1;
    for(var i=map_x-1;i<map_x+2;i++){
        for(var j=map_y-1;j<map_y+2;j++){
            map[i][j].draw();
        }
    }
    
    
    for(var i=0;i<obj.length;i++){
        obj[i].drawBack();
    }
    
    player.draw();
    
    
    for(var i=0;i<obj.length;i++){
        obj[i].drawFore();
    }

    
    
    setFontSize(32);
    ctx.fillStyle ='rgb(255,255,255)';
    ctx.fillText("touch_x : "+touch_x,50,100+30*0);
    ctx.fillText("touch_y : "+touch_y,50,100+30*1);
	ctx.fillText("timer   : "+timer,50,100+30*2);
}

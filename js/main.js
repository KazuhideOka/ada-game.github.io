var state;
var player;
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
    ctx.msImageSmoothingEnabled = false;
    ctx.mozImageSmoothingEnabled = false;
    ctx.imageSmoothingEnabled = false;
    
    player.move();
    
    var map_x = Math.floor(player.x/Map_w);
    var map_y = Math.floor(player.y/Map_h);
    for(var i=map_x-1;i<map_x+2;i++){
        for(var j=map_y-10;j<map_y+2;j++){
            if(i>=0 && j>=0 && i<30 && j<30) map[i][j].move();
        }
    }
    

    
}
//------------------------------------------------------------------------------
function draw() {
    ctx.globalCompositeOperation="source-over";
	drawRect(width/2,height/2,width,height,0,0,0,255);
    drawText("Now Loading...",200,1920/2,64,255,255,255,255);
    
    var map_x = Math.floor(player.x/Map_w);
    var map_y = Math.floor(player.y/Map_h);
    
    for(var i=map_x-1;i<map_x+2;i++){
        for(var j=map_y-10;j<map_y+2;j++){
            if(i>=0 && j>=0 && i<30 && j<30) map[i][j].drawFloor();
        }
    }

    for(var i=map_x-1;i<map_x+2;i++){
        for(var j=map_y-10;j<map_y+2;j++){
            if(i>=0 && j>=0 && i<30 && j<30) map[i][j].drawObjBack();
        }
    }
    
    player.draw();
    
    for(var i=map_x-1;i<map_x+2;i++){
        for(var j=map_y-10;j<map_y+2;j++){
            if(i>=0 && j>=0 && i<30 && j<30) map[i][j].drawObjFore();
        }
    }

    
    
    setFontSize(32);
    ctx.fillStyle ='rgb(255,255,255)';
    ctx.fillText("touch_x : "+touch_x,50,100+30*0);
    ctx.fillText("touch_y : "+touch_y,50,100+30*1);
	ctx.fillText("timer   : "+timer,50,100+30*2);
}

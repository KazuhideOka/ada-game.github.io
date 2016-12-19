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
    
    
    
    var pix_img = new Array(16);
    for(var i=0;i<pix_img.length;i++){
        pix_img[i] = new Array(16);
        for(var j=0;j<pix_img[i].length;j++){
            pix_img[i][j] = new Array(4);
            pix_img[i][j][0] = 255;
            pix_img[i][j][1] = 255;
            pix_img[i][j][2] = 255;
            pix_img[i][j][3] = 0;
        }
    }
    
    pix_img[6][15][0] = 100;
    pix_img[6][15][1] = 50;
    pix_img[6][15][2] = 50;
    pix_img[6][15][3] = 255;
    pix_img[7][15][0] = 100;
    pix_img[7][15][1] = 50;
    pix_img[7][15][2] = 50;
    pix_img[7][15][3] = 255;
    
    var r_rate = 0.5;
    var g_rate = 1.0;
    var b_rate = 0.1;
    
    for(var j=pix_img[0].length-2;j>=0;j--){
        for(var i=0;i<pix_img.length;i++){
            if(pix_img[i][j+1][3]>0 && Math.floor(Math.random()*(16-j)/1)==0){
                pix_img[i][j][0] = pix_img[i][j+1][0] + Math.floor((-25 + Math.floor(Math.random()*50)) * r_rate);
                pix_img[i][j][1] = pix_img[i][j+1][1] + Math.floor((-25 + Math.floor(Math.random()*50)) * g_rate);
                pix_img[i][j][2] = pix_img[i][j+1][2] + Math.floor((-25 + Math.floor(Math.random()*50)) * b_rate);
                pix_img[i][j][3] = 255;
            }
            else if(i<pix_img.length-1 && pix_img[i+1][j+1][3]>0 && Math.floor(Math.random()*(16-j)/3)==0){
                pix_img[i][j][0] = pix_img[i+1][j+1][0] + Math.floor((-25 + Math.floor(Math.random()*50)) * r_rate);
                pix_img[i][j][1] = pix_img[i+1][j+1][1] + Math.floor((-25 + Math.floor(Math.random()*50)) * g_rate);
                pix_img[i][j][2] = pix_img[i+1][j+1][2] + Math.floor((-25 + Math.floor(Math.random()*50)) * b_rate);
                pix_img[i][j][3] = 255;
            }
            else if(i>0 && pix_img[i-1][j+1][3]>0 && Math.floor(Math.random()*(16-j)/3)==0){
                pix_img[i][j][0] = pix_img[i-1][j+1][0] + Math.floor((-25 + Math.floor(Math.random()*50)) * r_rate);
                pix_img[i][j][1] = pix_img[i-1][j+1][1] + Math.floor((-25 + Math.floor(Math.random()*50)) * g_rate);
                pix_img[i][j][2] = pix_img[i-1][j+1][2] + Math.floor((-25 + Math.floor(Math.random()*50)) * b_rate);
                pix_img[i][j][3] = 255;
            }
        }
    }
    
    
    for(var i=0;i<obj.length;i++){
        obj[i] = new Obj(pix_img,Math.floor(Math.random()*1000),Math.floor(Math.random()*600),300,Math.floor(Math.random()*1000),false);
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
    ctx.msImageSmoothingEnabled = false;
    ctx.mozImageSmoothingEnabled = false;
    ctx.imageSmoothingEnabled = false;
    
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

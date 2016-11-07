var state;
var obj_num = 10;
var obj = new Array(obj_num);
var floor_num = 100;
var floor = new Array(floor_num);
//------------------------------------------------------------------------------
function load(){
    
	canvas = document.getElementById("canvas");
	ctx = canvas.getContext("2d");
    timer=new Date();
    width = 1920;
    height = 1080;
    scroll = true;

    state = "opening";
    
    for(var i=0;i<obj_num;i++){
        obj[i] = new Obj("man01",Math.floor(Math.random()*1920),500/*Math.floor(Math.random()*3000)*/,200,Math.floor(Math.random()*1000));
        //obj[i] = new Obj("man01",Math.floor(Math.random()*1920),500/*Math.floor(Math.random()*3000)*/,200,200);
    }
    
    for(var i=0;i<floor_num;i++){
        floor[i] = new Floor("select_back_01",width/2,100*i);
    }

    
	loop();
}
//------------------------------------------------------------------------------
function move(){

    
    for(var i=0;i<floor_num;i++){
        floor[i].move();
    }
    
    for(var i=0;i<obj_num;i++){
        obj[i].move();
    }
    

    
}
//------------------------------------------------------------------------------
function draw() {
    ctx.globalCompositeOperation="source-over";
	drawRect(width/2,height/2,width,height,0,0,0,255);
    drawText("Now Loading...",200,1920/2,64,255,255,255,255);
    
    for(var i=0;i<floor_num;i++){
        floor[i].draw();
    }
    for(var i=0;i<obj_num;i++){
        obj[i].draw();
    }

    
    
    setFontSize(32);
    ctx.fillStyle ='rgb(255,255,255)';
    ctx.fillText("touch_x : "+touch_x,50,100+30*0);
    ctx.fillText("touch_y : "+touch_y,50,100+30*1);
	ctx.fillText("timer   : "+timer,50,100+30*2);
    
}
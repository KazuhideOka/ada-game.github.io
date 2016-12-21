var canvas;
var ctx;
var width;
var height;
var screen_width;
var screen_height;
var dw;
var dh;
var touching = false;
var touch_x=0;
var touch_y=0;
var scroll = true;
var clicking = false;
var timer;
//------------------------------------------------------------------------------
function loop() {
	sizing();
    var t = new Date();
    timer = t.getTime();
    var loop_timer = timer;
	move();
	draw();
    var now_t = new Date();
	loop_timer = 16 - (now_t - loop_timer);
    ctx.fillText("fps : " + 60*loop_timer/16,50,500);
	if(loop_timer<0) loop_timer=0;
	setTimeout("loop()", loop_timer);
}
//------------------------------------------------------------------------------
function rand(n){
    return Math.floor(Math.random()*n);
}
//------------------------------------------------------------------------------
function creatImage(file_name){
    var img = new Image();
    img.src = "resources/" + file_name + ".png?" + timer;
    return img;
}
//------------------------------------------------------------------------------
function setFontSize(size){
    var font_size = size * (dw+dh)/2;
    ctx.font = font_size + "pt 'メイリオ'";
}
//------------------------------------------------------------------------------
function drawImage(img,x,y,w,h,r,a){
    ctx.save();
    ctx.globalAlpha = a/255.0;
    ctx.translate(x*dw,y*dh);
    ctx.rotate(r * Math.PI / 180);
    ctx.drawImage(img, (-w/2)*dw, (-h/2)*dw, w*dw, h*dh);
    ctx.restore();
}
//------------------------------------------------------------------------------
function drawText(text,x,y,size,r,g,b,a){
    setFontSize(size);
    ctx.fillStyle ='rgba('+r+','+g+','+b+','+a+')';
    ctx.fillText(text,x*dw,y*dh);
}
//------------------------------------------------------------------------------
function drawLine(x1,y1,x2,y2,r,g,b,a){
	//ctx.globalCompositeOperation="lighter";
	ctx.strokeStyle ='rgba('+r+','+g+','+b+','+a+')';
	ctx.beginPath();
	ctx.moveTo(x1*dw,y1*dh);
	ctx.lineTo(x2*dw,y2*dh);
	ctx.stroke();
}
//------------------------------------------------------------------------------
function drawRect(x,y,w,h,r,g,b,a){
	//ctx.globalCompositeOperation="lighter";
	ctx.fillStyle ='rgba('+r+','+g+','+b+','+a/255.0+')';
	ctx.fillRect((x-w/2)*dw, (y-h/2)*dh, w*dw, h*dh);
}
//------------------------------------------------------------------------------
function drawCircle(x,y,r,red,green,blue,alpha){
	//ctx.globalCompositeOperation="lighter";
	ctx.fillStyle ='rgba('+red+','+green+','+blue+','+alpha+')';
	ctx.beginPath();
	ctx.arc(x*dw,y*dw,r+(dw+dw)/2,0,2*Math.PI,true);
	ctx.fill();
}
//------------------------------------------------------------------------------
if(window.TouchEvent){
    if(document.addEventListener){
        // タッチを開始すると実行されるイベント
        document.addEventListener("touchstart",TouchStart);
        // タッチしたまま平行移動すると実行されるイベント
        document.addEventListener("touchmove",TouchMove);
        // タッチを終了すると実行されるイベント
        document.addEventListener("touchend",TouchEnd);
    }
}
//------------------------------------------------------------------------------
function TouchStart(e){
    // TouchList オブジェクトを取得
    var touch_list = e.changedTouches;
    var num = touch_list.length;
    for(var i=0;i < num;i++){
        var touch = touch_list[i];// Touch オブジェクトを取得
        //console.log(touch);// 出力テスト
    }
    touch_x = touch_list[0].pageX/dw;
    touch_y = touch_list[0].pageY/dh;
    touching = true;
    
    //if(touch_x>100 && touch_x<1080-100){
        e.preventDefault();
    //}else{
        
    //}
    
    if(!scroll){
        e.preventDefault();
    }
}
//------------------------------------------------------------------------------
function TouchMove(e){
    // TouchList オブジェクトを取得
    var touch_list = e.changedTouches;
    var num = touch_list.length;
    for(var i=0;i < num;i++){
        var touch = touch_list[i];// Touch オブジェクトを取得
        //console.log(touch);// 出力テスト
    }
    touch_x = touch_list[0].pageX/dw;
    touch_y = touch_list[0].pageY/dh;
}
//------------------------------------------------------------------------------
function TouchEnd(e){
    // TouchList オブジェクトを取得
    var touch_list = e.changedTouches;
    var num = touch_list.length;
    for(var i=0;i < num;i++){
        var touch = touch_list[i];// Touch オブジェクトを取得
        //console.log(touch);// 出力テスト
    }
    touch_x = touch_list[0].pageX/dw;
    touch_y = touch_list[0].pageY/dh;
    touching = false;
}
//------------------------------------------------------------------------------
document.onmousemove = function (e){
    if(!window.TouchEvent){
        if(!e) e = window.event; // レガシー
        if(clicking){
            touch_x = e.clientX/dw;
            touch_y = e.clientY/dh;
            var scroll_pos = DocumentGetScrollPosition(document);
            touch_x += scroll_pos.x/dw;
            touch_y += scroll_pos.y/dh;
        }
    }
};
//------------------------------------------------------------------------------
document.onmousedown = function (e){
    if(!window.TouchEvent){
        if(!e) e = window.event; // レガシー
        clicking = true;
        touch_x = e.clientX/dw;
        touch_y = e.clientY/dh;
        var scroll_pos = DocumentGetScrollPosition(document);
        touch_x += scroll_pos.x/dw;
        touch_y += scroll_pos.y/dh;
    }
};
//------------------------------------------------------------------------------
document.onmouseup = function (e){
    if(!window.TouchEvent){
        if(!e) e = window.event; // レガシー
        clicking = false;
    }
};
//------------------------------------------------------------------------------
function DocumentGetScrollPosition(document_obj){
    return{
	x:document_obj.body.scrollLeft || document_obj.documentElement.scrollLeft,
	y:document_obj.body.scrollTop  || document_obj.documentElement.scrollTop
    };
}
//------------------------------------------------------------------------------
function sizing(){
	screen_width = document.getElementById("wrapper").clientWidth;
	screen_height = screen_width * (height / width);
	var c = document.getElementById("canvas");
	c.width = screen_width;
	c.height = screen_height;
	dw = screen_width / width;
	dh = screen_height / height;
}

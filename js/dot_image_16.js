class DotImage16{
    constructor(img) {
        this.img = img;
        this.num = 16;
    }
    
    draw(x,y,w,h,alpha){
        var o_x = x-w/2;
        var o_y = y-h/2;
        
        var p_w = w/this.num;
        var p_h = h/this.num;
        
        var n = 0;
        for(var j=0;j<this.num;j++){
            for(var i=0;i<this.num;i++){
                drawRect(o_x+p_w*i,o_y+p_h*j,p_w,p_h,this.img[n],this.img[n+1],this.img[n+2],this.img[n+3]*alpha/255.0);
                n+=4;
            }
        }
    }
}

function imageDataToImage(image_data){
    var c = document.getElementById("canvas");
    c.width = 16;
    c.height = 16;
    ctx.putImageData(image_data,0,0,0,0,16,16);
    var img_url = canvas.toDataURL();
    //localStorage.setItem("dot_image0",canvas.toDataURL());
    
    var image_bitmap = new Image();
    image_bitmap.src = img_url;
    //image_bitmap.src = localStorage.getItem("dot_image0");
    
    return image_bitmap;
}

function pix16(x,y,c){
    return x*4 + y*16*4 + c;
}

class DotImage{
    constructor(img) {
        this.img = img;
        
    }
    
    draw(x,y,w,h,alpha){
        var o_x = x-w/2;
        var o_y = y-h/2;
        
        var p_w = w/this.img.length;
        var p_h = h/this.img.length;

        for(var j=0;j<this.img[0].length;j++){
            for(var i=0;i<this.img.length;i++){
                drawRect(o_x+p_w*i,o_y+p_h*j,p_w,p_h,this.img[i][j][0],this.img[i][j][1],this.img[i][j][2],this.img[i][j][3]*alpha/255.0);
            }
        }
    }
}

class Obj{
    constructor(img,x,y,w,h) {
        this.img = creatImage(img);
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.r = 0;
        this.y_rate = 0;
        this.h_rate = 0;
        this.a_rate = 0;
        
    }
    move(){
        if(touching){
            if(touch_y<height/2){
                this.y--;
            }else{
                this.y++;
            }
        }
        
        this.y_rate = (this.y-200)/(500.0);
        if(this.y_rate < 0) this.y_rate = 0;
        
        this.h_rate = 1000 * (this.y)/(5000.0);
        
        this.a_rate = (this.h+this.h_rate)/this.h;

    }
    draw(){
        if(this.a_rate>0 && this.h*this.y_rate < height){
            this.drawOnFloor(this.img, this.x, this.y*this.y_rate+200, this.w, (this.h+this.h_rate)/2, this.r, 255*this.a_rate);
        }
    }
    
    drawOnFloor(img, x, y, w, h, r, a){
        drawImage(img, x, y-h/2, w, h, r, a);
    }
}

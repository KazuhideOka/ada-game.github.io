class Floor{
    constructor(img,x,y) {
        this.img = creatImage(img);
        this.x = x;
        this.y = y;
        this.w = 300;
        this.h = 300;
        this.r = 0;
        this.rate = 0;
    }
    
    move(){
        if(touching){
            if(touch_y<height/2){
                this.y--;
            }else{
                this.y++;
            }
        }
        if(this.y>200){
            this.rate = (this.y-200)/(500.0);
        }
    }
    
    draw(){
        if(this.y>200 && this.h*this.rate < height){
            drawImage(this.img, this.x, ((this.y - this.h/2)*this.rate)+200, this.w, this.h*this.rate, this.r, 255);
        }
    }
}

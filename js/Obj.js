class Obj{
    constructor(img,x,y,w,h,img_or_vec) {
        this.is_img = img_or_vec;
        if(this.is_img) this.img = creatImage(img);
        else this.img = new DotImage(img);
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.r = 0;
        this.y_rate = 0;
        this.h_rate = 0;
        this.a_rate = 0;
        
        this.screen_x = 0;
        this.screen_y = 0;
        
    }
    move(){
        this.screen_x = this.x + center_x - player.x;
        this.screen_y = this.y + center_y - player.y;
        
        this.y_rate = (this.screen_y-200)/(500.0);
        if(this.y_rate < 0) this.y_rate = 0;
        
        this.h_rate = 1000 * (this.screen_y)/(5000.0);
        
        this.a_rate = (this.h+this.h_rate)/this.h;

    }
    
    drawBack(){
        if(this.screen_y*this.y_rate+200 < center_y){
            if(this.a_rate>0 && this.h*this.y_rate < height){
                this.drawOnFloor(this.img, this.screen_x, this.screen_y*this.y_rate+200, this.w, (this.h+this.h_rate)/2, this.r, 255*this.a_rate);
            }
        }
    }
    
    drawFore(){
        if(this.screen_y*this.y_rate+200 >= center_y){
            if(this.a_rate>0 && this.h*this.y_rate < height){
                this.drawOnFloor(this.img, this.screen_x, this.screen_y*this.y_rate+200, this.w, (this.h+this.h_rate)/2, this.r, 255*this.a_rate);
            }
        }
    }
    
    
    drawOnFloor(img, x, y, w, h, r, a){
        if(this.is_img){
            drawImage(img, x, y-h/2, w, h, r, a);
        }else{
            img.draw(x, y-h/2, w, h, a)
        }
        //drawCircle(this.screen_x,this.screen_y*this.y_rate+200,10,0,255,0,255);
    }
}

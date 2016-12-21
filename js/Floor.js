var Floor_img_green = creatImage("select_back_01");

class Floor{
    constructor(img,x,y) {
        this.img = img;
        this.x = x;
        this.y = y;
        this.w = 300;
        this.h = 300;
        this.r = 0;
        this.rate = 0;
    }
    
    move(){
        this.screen_x = this.x + center_x - player.x;
        this.screen_y = this.y + center_y - player.y;
        
        if(this.screen_y>200){
            this.rate = (this.screen_y-200)/(500.0);
        }
    }
    
    draw(){
        if(this.screen_y>200 && this.h*this.rate < height){
            drawImage(this.img, this.screen_x, ((this.screen_y - this.h/2)*this.rate)+200, this.w, this.h*this.rate, this.r, 255);
        }
    }

}

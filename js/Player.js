var center_x;
var center_y;

class Player{
    constructor() {
        this.img = creatImage("man01");
        this.x = 1000;
        this.y = 100;
        this.w = 200;
        this.h = 200;
        this.r = 0;
        this.x_speed = 3;
        this.y_speed = 2;
        
        center_x = width/2;
        center_y = (height*2)/3;
    }
    
    move(){
        if(touching){
            if(touch_x<300){
                this.x-=this.x_speed;
            }else if(touch_x>width-300){
                this.x+=this.x_speed;
            }else if(touch_y<height/2){
                this.y-=this.y_speed;
            }else{
                this.y+=this.y_speed;
            }
            this.r = 5 * Math.sin(2 * Math.PI * (timer%500)/500.0);
        }else{
            this.r = 0;
        }
    }
    
    draw(){
        drawImage(this.img, center_x, center_y-this.h/2, this.w, this.h, this.r, 255);
        //drawCircle(center_x,center_y,10,255,0,0,255);
    }
}

var center_x;
var center_y;

class Player{
    constructor() {
        this.img_1 = creatImage("man01_01");
        this.img_2 = creatImage("man01_02");
        this.img_3 = creatImage("man01_03");
        this.img_4 = creatImage("man01_04");
        this.x = 1000;
        this.y = 100;
        this.w = 120;
        this.h = 120;
        this.r = 0;
        this.x_speed = 6;
        this.y_speed = 3;
        this.dir = 1;
        
        center_x = width/2;
        center_y = (height*2)/3;
        
        
        
    }
    
    move(){
        if(touching){
            if(touch_x<500){
                this.x-=this.x_speed;
                this.dir = 2;
            }else if(touch_x>width-500){
                this.x+=this.x_speed;
                this.dir = 3;
            }else if(touch_y<height/2){
                this.y-=this.y_speed;
                this.dir = 4;
            }else{
                this.y+=this.y_speed;
                this.dir = 1;
            }
            if(this.x<0) this.x=0;
            if(this.y<0) this.y=0;
            this.r = 5 * Math.sin(2 * Math.PI * (timer%500)/500.0);
        }else{
            this.r = 0;
        }
     }
    
    draw(){
        if(this.dir == 1){
            drawImage(this.img_1, center_x, center_y-this.h/2, this.w, this.h, this.r, 255);
        }else if(this.dir == 2){
            drawImage(this.img_2, center_x, center_y-this.h/2, this.w, this.h, this.r, 255);
        }else if(this.dir == 3){
            drawImage(this.img_3, center_x, center_y-this.h/2, this.w, this.h, this.r, 255);
        }else if(this.dir == 4){
            drawImage(this.img_4, center_x, center_y-this.h/2, this.w, this.h, this.r, 255);
        }
        //drawCircle(center_x,center_y,10,255,0,0,255);

    }
}

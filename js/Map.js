var Map_floor_num = 4;
var Map_w = 300 * Map_floor_num;
var Map_h = 100 * Map_floor_num;

class Map{
    constructor(img,x,y) {
        this.img = img;
        this.x = x;
        this.y = y;
        
        this.floor = new Array(Map_floor_num);
        for(var i=0;i<Map_floor_num;i++){
            this.floor[i]=new Array(Map_floor_num);
            for(var j=0;j<Map_floor_num;j++){
                this.floor[i][j] = new Floor(this.img,this.x * Map_w + 300 * i,this.y * Map_h + 100 * j);
            }
        }
    }
    
    move(){
        for(var i=0;i<Map_floor_num;i++){
            for(var j=0;j<Map_floor_num;j++){
                this.floor[i][j].move();
            }
        }
    }
    
    draw(){
        for(var i=0;i<Map_floor_num;i++){
            for(var j=0;j<Map_floor_num;j++){
                this.floor[i][j].draw();
            }
        }
    }
}

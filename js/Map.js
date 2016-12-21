var Map_floor_num = 4;
var Map_w = 300 * Map_floor_num;
var Map_h = 100 * Map_floor_num;

class Map{
    constructor(img,x,y) {
        this.img = img;
        this.x = x;
        this.y = y;
        this.obj = new Array(32);
        
        
        this.floor = new Array(Map_floor_num);
        for(var i=0;i<Map_floor_num;i++){
            this.floor[i]=new Array(Map_floor_num);
            for(var j=0;j<Map_floor_num;j++){
                this.floor[i][j] = new Floor(this.img,this.x * Map_w + 300 * i,this.y * Map_h + 100 * j);
            }
        }
        
        var image_data = ctx.createImageData(16,16);
        var pix_img = image_data.data;
        
        pix_img[pix16(6,15,0)] = 100;
        pix_img[pix16(6,15,1)] = 50;
        pix_img[pix16(6,15,2)] = 50;
        pix_img[pix16(6,15,3)] = 255;
        pix_img[pix16(7,15,0)] = 100;
        pix_img[pix16(7,15,1)] = 50;
        pix_img[pix16(7,15,2)] = 50;
        pix_img[pix16(7,15,3)] = 255;
        
        
        var r_rate = 0.5;
        var g_rate = 1.0;
        var b_rate = 0.1;
        
        r_rate=0.0;
        g_rate=0.0;
        b_rate=0.0;
        
        for(var j=16-2;j>=0;j--){
            for(var i=0;i<16;i++){
                if(pix_img[pix16(i,j+1,3)]>0 && Math.floor(Math.random()*(16-j)/1)==0){
                    pix_img[pix16(i,j,0)] = pix_img[pix16(i,j+1,0)] + Math.floor((-20 + Math.floor(Math.random()*40)) * r_rate);
                    pix_img[pix16(i,j,1)] = pix_img[pix16(i,j+1,1)] + Math.floor((-20 + Math.floor(Math.random()*40)) * g_rate);
                    pix_img[pix16(i,j,2)] = pix_img[pix16(i,j+1,2)] + Math.floor((-20 + Math.floor(Math.random()*40)) * b_rate);
                    pix_img[pix16(i,j,3)] = 255;
                }
                else if(i<16-1 && pix_img[pix16(i+1,j+1,3)]>0 && Math.floor(Math.random()*(16-j)/3)==0){
                    pix_img[pix16(i,j,0)] = pix_img[pix16(i+1,j+1,0)] + Math.floor((-20 + Math.floor(Math.random()*40)) * r_rate);
                    pix_img[pix16(i,j,1)] = pix_img[pix16(i+1,j+1,1)] + Math.floor((-20 + Math.floor(Math.random()*40)) * g_rate);
                    pix_img[pix16(i,j,2)] = pix_img[pix16(i+1,j+1,2)] + Math.floor((-20 + Math.floor(Math.random()*40)) * b_rate);
                    pix_img[pix16(i,j,3)] = 255;
                }
                else if(i>0 && pix_img[pix16(i-1,j+1,3)]>0 && Math.floor(Math.random()*(16-j)/3)==0){
                    pix_img[pix16(i,j,0)] = pix_img[pix16(i-1,j+1,0)] + Math.floor((-20 + Math.floor(Math.random()*40)) * r_rate);
                    pix_img[pix16(i,j,1)] = pix_img[pix16(i-1,j+1,1)] + Math.floor((-20 + Math.floor(Math.random()*40)) * g_rate);
                    pix_img[pix16(i,j,2)] = pix_img[pix16(i-1,j+1,2)] + Math.floor((-20 + Math.floor(Math.random()*40)) * b_rate);
                    pix_img[pix16(i,j,3)] = 255;
                }
            }
        }
        
        var x = this.x;
        var y = this.y;
        var image_bitmap = window.createImageBitmap(image_data);
        image_bitmap.then(
                     function success(image_bitmap){
                          for(var i=0;i<32;i++){
                            map[x][y].obj[i] = new Obj(image_bitmap,x*Map_w+rand(Map_w),y*Map_h+rand(Map_h),400,Math.floor(Math.random()*1000),true);
                          }
                     },
                     function failure(e){
                          console.log(e);
                          }
                          
        );
        
        /*
        for(var i=0;i<32;i++){
            this.obj[i] = new Obj(image_bitmap,this.x*Map_w+rand(Map_w),this.y*Map_h+rand(Map_h),400,Math.floor(Math.random()*1000),true);
        }
        */
        
    }
    
    move(){
        for(var i=0;i<Map_floor_num;i++){
            for(var j=0;j<Map_floor_num;j++){
                this.floor[i][j].move();
            }
        }
        for(var i=0;i<this.obj.length;i++){
            if(this.obj[i]!=null) this.obj[i].move();
        }
        
        var o=this.obj;
        o.sort(function(a,b){
               if(o[a]==null && o[b]!=null) return -1;
               if(o[b]==null && o[a]!=null) return 1;
               if(o[a]==null && o[b]==null) return 0;
               return o[a].y - o[b].y;
        });
    }
    
    drawFloor(){
        for(var i=0;i<Map_floor_num;i++){
            for(var j=0;j<Map_floor_num;j++){
                this.floor[i][j].draw();
            }
        }
    }
    
    drawObjBack(){
        for(var i=0;i<this.obj.length;i++){
            if(this.obj[i]!=null) this.obj[i].drawBack();
        }
    }
    
    drawObjFore(){
        for(var i=0;i<this.obj.length;i++){
            if(this.obj[i]!=null) this.obj[i].drawFore();
        }
    }
}

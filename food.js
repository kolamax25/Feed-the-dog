class Food{
    constructor(){
this.foodStock = 0;
this.image = loadImage("Images/Milk.png")
    }
updateFoodStock(x){
 this.foodStock = x
}




    display(){

        var x = 100, y = 200;

        imageMode(CENTER);
        image(this.image,700,200,70,70);

        if(this.foodStock !=0){
            for(var i=0 ;i<this.foodStock;i++){
                if(i % 10 === 0 ){
                    x = 100;
                    y = y +50;
                }
                image(this.image,x,y,70,70);
                x = x+30;
                
            }
        }

    }
}
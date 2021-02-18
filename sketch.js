var dog,sadDog,happyDog;

var foodStock,  feedTime;
var lastFeed;
var database;

var foodPlus, feed,addFood,foodS, foodobj;

function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  database = firebase.database();
  createCanvas(1000,400);

  
 foodobj = new Food();
 //read foodstock from database

 database.ref("Food").on("value", function(data){
   foodS = data.val();
   foodobj.updateFoodStock(foodS);
  
 })
 
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;


  
  foodPlus = createButton('Add more food');
  foodPlus.position(450, 200 );
  foodPlus.mousePressed(updateFoodStock)

  feed = createButton('Feed');
  feed.position(550, 200);
  feed.mousePressed(feedDog);

  
}

function draw() {
  background(46,139,87);

//read feedtime


database.ref('FeedTime').on("value", function(data){

  lastFeed = data.val();
  
})
textSize(15);
fill("white");
text("Last fed : "+ lastFeed + " Hr", 440, 30)

  foodobj.display();
  drawSprites();
  
  
}

//feed the dog
function feedDog(){
  dog.addImage(happyDog);

  
  foodobj.updateFoodStock(foodS -=1);
  database.ref('/').update({
    Food : foodS ,
    FeedTime : hour()
  })
  
}


//function to add food in stock

function updateFoodStock(){
  foodS +=1;
  database.ref('/').update({
    Food : foodS
  })
}
var ball;
var database;
function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    database=firebase.database()
    //.ref()it refers to the data base location
    var databaseRef= database.ref("ball/position");
    //.on () reads from the changes of the database
    databaseRef.on("value",readPosition,showError)

}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }

    drawSprites();
}

function writePosition(x,y){
    database.ref("ball/position").set({
        x:ball.x+x,
        y:ball.y+y
    })
}
function readPosition(data){
position=data.val();
console.log(position.x)
console.log(position.y)
ball.x=position.x
ball.y=position.y
}
function showError(){
console.log("error in reading from the database")

}
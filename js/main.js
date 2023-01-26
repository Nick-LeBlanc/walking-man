let spritesheet;
let spritesheet2;
let sprites = [];
let player1;

class player{
    constructor(spritesheet, x, y){
        this.height = 80;
        this.width = 80;
        this.velocityX = 0;
        this.velocityY= 0;
        this.x = x;
        this.y = y;
        this.direction = "right";
        this.walkframe = 0;
        this.spritesheet = spritesheet
    }
    draw(){
        fill("red")
        console.log()
        rect(this.x, this.y, this.height, this.width)
        if(this.velocityX > 0){
            //image(spritesheet,this.x,this.y,80,80,160,0,80,80)
            
            //image(spritesheet,this.x,this.y,80,80,80,0,80,80);
            this.walkcycle(this.x);

            this.direction = "right";
        }
        if(this.velocityX < 0){
            push()
            scale(-1,1);
            // image(spritesheet,-this.x,this.y,80,80,80,0,80,80)
            this.walkcycle(-this.x);
            pop()
            this.direction = "left";
        }
        if(this.velocityX === 0){
            if(this.direction=== "right"){
                image(this.spritesheet,this.x,this.y,80,80,0,0,80,80)
            }else if(this.direction=== "left"){
                push()
            scale(-1,1);
            image(this.spritesheet,-this.x,this.y,80,80,0,0,80,80)
            pop()
            }
            
        }
    }
    update(){
        this.x += this.velocityX
        this.y += this.velocityY
        this.draw()
    }
    walkcycle(x){
        
        // image(spritesheet,this.x,this.y,80,80,80,0,80,80);
        if(frameCount % 100 < 6.25){
            image(this.spritesheet,x,this.y,80,80,80,0,80,80);
        }
        else if(frameCount % 100 < 12.5){
            image(this.spritesheet,x,this.y,80,80,80 * 2 ,0,80,80);
        }
        else if(frameCount % 100 <18.75){
            image(this.spritesheet,x,this.y,80,80,80 * 3 ,0,80,80);
        }
        else if(frameCount % 100 <25){
            image(this.spritesheet,x,this.y,80,80,80 * 4 ,0,80,80);
        }
        else if(frameCount % 100 <31.25){
            image(this.spritesheet,x,this.y,80,80,80 * 5 ,0,80,80);
        }
        else if(frameCount % 100 <37.5){
            image(this.spritesheet,x,this.y,80,80,80 * 6 ,0,80,80);
        }
        else if(frameCount % 100 <43.75){
            image(this.spritesheet,x,this.y,80,80,80 * 7 ,0,80,80);
        }
        else if(frameCount % 100 <50){
            image(this.spritesheet,x,this.y,80,80,80 * 8 ,0,80,80);
        }else if(frameCount % 100 < 50 + 6.25){
            image(this.spritesheet,x,this.y,80,80,80,0,80,80);
        }
        else if(frameCount % 100 < 50 + 12.5){
            image(this.spritesheet,x,this.y,80,80,80 * 2 ,0,80,80);
        }
        else if(frameCount % 100 <50 + 18.75){
            image(this.spritesheet,x,this.y,80,80,80 * 3 ,0,80,80);
        }
        else if(frameCount % 100 <50 + 25){
            image(this.spritesheet,x,this.y,80,80,80 * 4 ,0,80,80);
        }
        else if(frameCount % 100 <50 + 31.25){
            image(this.spritesheet,x,this.y,80,80,80 * 5 ,0,80,80);
        }
        else if(frameCount % 100 <50 + 37.5){
            image(this.spritesheet,x,this.y,80,80,80 * 6 ,0,80,80);
        }
        else if(frameCount % 100 <50 + 43.75){
            image(this.spritesheet,x,this.y,80,80,80 * 7 ,0,80,80);
        }
        else if(frameCount % 100 <50 + 50){
            image(this.spritesheet,x,this.y,80,80,80 * 8 ,0,80,80);
        }

            
    }
}

const keyPressed = {
    ArrowLeft:false,
    ArrowRight:false,
    a:false,
    d:false

}

function preload() {
    spritesheet = loadImage('PC Computer - Spelunky - Spelunky Guy.png');
    spritesheet2 = loadImage('PC Computer - Spelunky - Robot.png');
}

function setup() {    
    createCanvas(windowWidth/2, windowHeight/2);
    background("lightgray")
    frameRate(60);
    player1 = new player(spritesheet, 100,100);
    player2 = new player(spritesheet2, 200,200);
    imageMode(CENTER);
    
}

function draw() {
    background("lightgray")
    player1.update();
    player1.velocityX = 0;
    player2.update();
    player2.velocityX = 0;

    
    
    //movement
    if(keyPressed.ArrowLeft){
        player1.velocityX = -5;
    }
    if(keyPressed.ArrowRight){
        player1.velocityX = 5;
    }
    if(keyPressed.d){
        player2.velocityX = 5;
    }
    if(keyPressed.a){
        player2.velocityX = -5;
    }
}

window.addEventListener("keydown", e=>{
    switch (e.key) {
        case "ArrowLeft":
            keyPressed.ArrowLeft = true;
            break;
    case "ArrowRight":
        keyPressed.ArrowRight = true;
        break;
        default:
            break;
    }

    switch (e.key) {
        case "a":
            keyPressed.a = true;
            break;
    case "d":
        keyPressed.d = true;
        break;
        default:
            break;
    }
   
})
window.addEventListener("keyup", e=>{
    switch (e.key) {
        case "ArrowLeft":
            keyPressed.ArrowLeft = false;
            break;
    case "ArrowRight":
        keyPressed.ArrowRight = false;
        break;
        default:
            break;
    }

    switch (e.key) {
        case "a":
            keyPressed.a = false;
            break;
    case "d":
        keyPressed.d = false;
        break;
        default:
            break;
    }
   
})



function windowResized() {
    background("lightgray")
    resizeCanvas(windowWidth/2, windowHeight/2);
}

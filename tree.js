class Tree{
    constructor(x,y,width,height){
        var options={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2,
        }
      this.body = Bodies.rectangle(x, y, 20,70, options);
      this.width = 20;
      this.height = 70;
      this.image=loadImage("tree.png");
      World.add(world,this.body);
    }

    display(){
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
     }
   }
   
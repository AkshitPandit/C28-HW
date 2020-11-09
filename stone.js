class Stone{
 constructor(x,y,width,height){
     var options={
         isStatic:false,
         restitution:0,
         friction:1,
         density:1.2,
     }
      this.body = Bodies.rectangle(x, y, 10,50, options);
      this.width = 10;
      this.height = 50;
      this.image=loadImage("stone.png");
      World.add(world,this.body);
 }

 display(){
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
 }
}

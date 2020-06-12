class dog
{
	constructor(x,y,w,h)
	{
        var options={
			isStatic:false,
			restitution:0.01,
			friction:0.05,
			density:0.2
        }
		
		this.x=x;
		this.y=y;
		this.w=w
        this.h=h
        this.image=loadImage("doggo.png");
		this.body=Bodies.rectangle(x, y, w, h,options);
	
 		World.add(world, this.body);

	}
	display()
	{
			
			var Pos=this.body.position;		

			push()
			translate(Pos.x, Pos.y);
            imageMode(CENTER);
            image(this.image,0,0,this.width,this.height);
			pop();
			
	}

}
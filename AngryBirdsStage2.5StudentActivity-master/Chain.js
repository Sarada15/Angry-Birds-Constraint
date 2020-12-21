class Chain {

    constructor(body1,body2) {
        var options = {
            bodyA: body1,
            bodyB: body2,

            stiffness: 0.05,
            length: 10,
    
        }
        this.body1 = body1;
        this.body2 = body2;
        this.chain = Matter.Constraint.create(options);
        World.add(world,this.chain);
    }

        display() {
            
            var pos = this.body1.position;
            var pos1 = this.body2.position;

            line(pos.x,pos.y,pos1.x,pos1.y);
        }

}
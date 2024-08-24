
class Plane {
    public color: string = 'blue';
    public speed: number = 10;
    public size: number = 10;

    constructor(
        public x: number,
        public y: number
    ) {

    }
    move(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        // make a circle
        ctx.arc(this.x, this.y, 10, 0, Math.PI * 2);
        ctx.fill();
    }
}

export { Plane }

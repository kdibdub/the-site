export default class Point {
  public x: number;
  public y: number;
  public slope: number;
  public speed: number;
  public width: number;
  public height: number;

  constructor(
    x: number,
    y: number,
    slope: number,
    width: number,
    height: number
    ) {
      this.x = x;
      this.y = y;
      this.slope = slope;
      this.speed = 1;
      this.width = width;
      this.height = height;
  }

  setSpeed(speed: number) {
    this.speed = speed;
  }

  move() {
    this.x += this.speed * Math.cos(this.slope);
    if (this.x > this.width) {
      this.x = 0;
    }
    if (this.x < 0) {
      this.x = this.width;
    }
    this.y += this.speed * Math.sin(this.slope);
    if (this.y > this.height) {
      this.y = 0;
    }
    if (this.y < 0) {
      this.y = this.height;
    }
  }

  calculateDistance(point: Point) {
    return Math.sqrt(
      Math.pow(this.x - point.x, 2) + Math.pow(this.y - point.y, 2)
    );
  }
}

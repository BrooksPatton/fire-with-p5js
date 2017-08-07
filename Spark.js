class Spark {
  constructor(location) {
    this.location = location.copy();
    this.velocity = createVector(0, random(-2, -0.1));
    this.acceleration = createVector(0, 0);
    this.lifespan = random(100, 350);
    this.xoff = random(0, 1000000000000);
    this.noiseInc = random();
    this.alpha = 255;
    this.color = this.setColor();
  }

  setColor() {
    const r = random(0, 100);
    if(r > 10) {
      return [128, 9, 9];
    } else if(r > 5) {
      return [240, 127, 19];
    } else if(r > 3) {
      return [242, 125, 12];
    } else if(r > 2) {
      return [253, 207, 88];
    } else {
      return [117, 118, 118];
    }
  }

  run() {
    this.update();
    this.display();
  }

  update() {
    this.accelerate();
    this.velocity.add(this.acceleration);
    this.location.add(this.velocity);
    this.lifespan -= 2;
    this.acceleration.mult(0);
    this.alpha -= 1;
  }

  accelerate() {
    const r = noise(this.xoff);
    const x = map(r, 0, 1, -0.0125, 0.0125);
    this.acceleration.add(createVector(x, 0));
    this.xoff += this.noiseInc;
  }

  display() {
    stroke(this.color[0], this.color[1], this.color[2], this.alpha);
    fill(this.color[0], this.color[1], this.color[2], this.alpha);
    ellipse(this.location.x, this.location.y, 5, 5);
  }

  isDead() {
    return this.lifespan <= 0;
  }
}

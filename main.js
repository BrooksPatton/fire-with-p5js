const sparks = [];

function setup() {
  createCanvas(800, 300);
}

function draw() {
  background(255);
  addSparks(25);
  sparks.forEach((spark, i) => {
    spark.run();
    if(spark.isDead()) sparks.splice(i, 1);
  })
}

function addSparks(num) {
  for(let i = 0; i < num; i++) {
    const x = random(0, width);
    const location = createVector(x, height);
    sparks.push(new Spark(location));
  }
}

const sparks = [];

function setup() {
  createCanvas(1600, 300);
}

function draw() {
  background(255);
  addSparks(50);
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

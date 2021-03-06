let current;
let points;
let previous;

function setup() {
  createCanvas(windowWidth, windowHeight);
  points = [];
  const n = 3;
	let minDim = min(width,height)
  for (let i = 0; i < n; i++) {
    let angle = i * TWO_PI / n;
    let v = p5.Vector.fromAngle(angle);
    v.mult(minDim / 2 - 10);
    v.add(width / 2, height / 2);
    points.push(v);
  }
  reset();
}

function reset() {
  current = createVector(random(width), random(height));
  background(0);
  stroke(255);
  strokeWeight(8);
  for (let p of points) {
    point(p.x, p.y);
  }
}

function draw() {
  //for (let i = 0; i < 500-; i++) {
    strokeWeight(4);
    stroke(255, 0, 200, 200,200);
    let next = random(points);
//    if (next != previous) {
      current.x = lerp(current.x, next.x, 0.5);
      current.y = lerp(current.y, next.y, 0.5);
      point(current.x, current.y);
//    }
		previous = next;
  //}
}

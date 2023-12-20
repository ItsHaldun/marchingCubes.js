// Weight and Height, 
let w, h;
// Rows and Columns
let row, column;
// Size of Cells
let size;
// Offsets for Visuals
let HEADER_OFFSET, X_OFFSET, Y_OFFSET;

function setup() {
	// Hyperparameters
  HEADER_OFFSET = 57;
	size = 20;
	X_OFFSET = size/2;
	Y_OFFSET = size/2;

	// Calculate window sizes
  w = windowWidth;
  h = windowHeight - HEADER_OFFSET;


	// Calculate the row and column size
	row = int(h / size);
	column = int(w / size);

	// Create the Scalar Field
	let array = new multiDimensionalArray([row, column], 0);
	array.print();

  createCanvas(w, h);
}

function draw() {
  // put drawing code here
  background(220);
	for (let i = 0; i<row; i++) {
		for (let j = 0; j<column; j++) {
			stroke(0);
			strokeWeight(size/5);
			point(j*size + X_OFFSET, i * size + Y_OFFSET);
		}
	}
}
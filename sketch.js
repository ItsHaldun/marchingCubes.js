// Weight and Height, 
let w, h;
// Rows and Columns
let rows, columns;
// Size of Cells
let size;
// Offsets for Website
let HEADER_OFFSET;
// Scalar Field
let field;

function setup() {
	// Hyperparameters
  HEADER_OFFSET = 57;
	size = 50;

	// Calculate window sizes
  w = windowWidth;
  h = windowHeight - HEADER_OFFSET;

	// Calculate the row and column size
	rows = int(h / size);
	columns = int(w / size);

	// Initialize the Scalar Field
	field = new ScalarField(rows, columns, size);

  createCanvas(w, h);
}

function draw() {
  // put drawing code here
  background(0);
	field.draw();
}
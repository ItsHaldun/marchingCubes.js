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
	size = 20;

	// Calculate window sizes
  w = windowWidth;
  h = windowHeight - HEADER_OFFSET;

	// Calculate the row and column size
	rows = int(h / size) + 1;
	columns = int(w / size) + 1;

	// Initialize the Scalar Field
	field = new ScalarField(rows, columns, size, 0.15);

  createCanvas(w, h);
}

function draw() {
  // put drawing code here
  background("#3C2C4F");
	field.draw(true);
}
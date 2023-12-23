class ScalarField {
	constructor(rows, columns, cellSize) {
		// Save parameters
		this.rows = rows;
		this.columns = columns;
		this.cellSize = cellSize;

		// Calculate the offsets for better visuals
		this.X_OFFSET = size/2;
		this.Y_OFFSET = size/2;

		// The field is 2d array
		this.field = new multiDimensionalArray([this.rows, this.columns], 0);

		// Noise field increments
		this.nx=0;
		this.ny=0;
		this.nt=0;
		this.space_increment = 0.2;
		this.time_increment = 0.02;
		// Initialize the values via noise
		this.generateNoiseField();
	}

	generateNoiseField() {
		this.nx=0;
		this.ny=0;
		
		let increment = 0.1;
		//noise(nx, ny, nt);
		for(let i=0; i<this.rows; i++) {
			this.nx += this.space_increment;
			for(let j=0; j<this.columns; j++) {
				this.field.set([i,j], noise(this.nx, this.ny, this.nt));
				this.ny += this.space_increment;
			}
		}
		this.nt += this.time_increment;
	}

	draw() {
		this.generateNoiseField();
		
		for (let i = 0; i<this.rows; i++) {
			for (let j = 0; j<this.columns; j++) {
				stroke(255 * this.field.get([i, j]));
				strokeWeight(this.cellSize/5);
				point(j * this.cellSize + this.X_OFFSET, i * this.cellSize + this.Y_OFFSET);
			}
		}
	}
}
export class Triangle {
    constructor(numRow) {
        this.rows = [];
        for(var level = 0; level < numRow; level++) {
            this.rows.push(
                Array.from(Array(level+1), (x, idx) => {
                    if(idx == 0 || idx == level) {
                        return 1;
                    } else {
                        return this.rows[level-1][idx-1] + this.rows[level-1][idx];
                    }
                })
            )
        }

        this.lastRow = this.rows[numRow-1];
    }
}
export class Matrix {
    constructor(str){
        this.rows = str.split("\n")
        this.rows = this.rows.map(x => x.split(" ").map(ci => Number(ci)))
        this.columns = this.rows[0].map((col, i) => this.rows.map(row => row[i])); // transpose
    }   
}
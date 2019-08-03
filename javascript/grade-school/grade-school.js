export class GradeSchool {

    constructor() {
        this.db = {};
    }

    add(name, grade) {
        if (this.db[grade]) {
            this.db[grade].push(name);
            this.db[grade] = this.db[grade].sort();
        } else {
            this.db[grade] = [name];
        }
    }



    roster() {
        return clone(this.db);
    }

    grade(g) {
        return this.db[g] ? clone(this.db[g]) : [];
    }
}

function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
}
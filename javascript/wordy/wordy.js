var listOperator = ['plus', 'minus', 'multiplied', 'divided', ];

export class WordProblem {
    constructor(question) {
        var temp = question.replace('?', '').split(' ');

        this._operator = [];
        this._opernand = [];
        temp.forEach(element => {
            if(!isNaN(element)) {
                this._opernand.push(Number(element));
            } else if (listOperator.includes(element)) {
                this._operator.push(element)
            }
        });      
    }

    answer() {
        if(this._operator.length == 0 || this._opernand.length == 0 )
            throw new ArgumentError("not good");

        var numOperation = this._operator.length;
        var result = this._opernand[0];

        for(var i=0; i<numOperation; i++) {
            if(this._operator[i] == 'plus') {
                result += this._opernand[i+1];
            } else if(this._operator[i] == 'minus') {
                result -= this._opernand[i+1];
            } else if(this._operator[i] == 'multiplied') {
                result *= this._opernand[i+1];
            } else if(this._operator[i] == 'divided') {
                result /= this._opernand[i+1];
            }
        }
        return result;
    }
}

export class ArgumentError {
    constructor(msg) {
        this._msg = msg;
    }
}
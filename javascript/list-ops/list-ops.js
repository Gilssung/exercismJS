export function List(arr) {
    this.values = arr || [];
}

List.prototype = {
    append: function (list) {
        for (var i = 0; i < list.length(); i++) {
            this.values.push(list.values[i]);
        }
        return new List(this.values);
    },

    concat: function (listOfLists) {
        for(var i = 0; i < listOfLists.length(); i++){ 
            this.append(listOfLists.values[i]);
        }
        
        return new List(this.values);
    },

    filter: function (func) {
        var result = [];
        for(var i = 0; i < this.length(); i++) {
            if(func(this.values[i]))
                result.push(this.values[i]);
        }
        return new List(result);
    },

    length: function() {
        return this.values.length;
    },

    map: function(func) {
        var result = [];
        for(var i = 0; i < this.length(); i++) {
            result.push(func(this.values[i]));
        }
        return new List(result);
    },
    // foldLeft
    foldl: function(func, acc) {
        for(var i = 0; i < this.length(); i++) {
            acc = func(acc, this.values[i]);
        }
        return acc;
    },
    //foldRight
    foldr: function(func, acc) {
        for(var i = this.length() - 1; i >= 0; i--) {
            acc = func(acc, this.values[i]);
        }
        return acc;
    },

    reverse: function() {
        var result = [];
        for(var i = this.length() - 1; i >= 0; i--) {
            result.push(this.values[i]);
        }
        return new List(result);
    }
}
export class LinkedList {
    constructor() {
        this.head;
        this.tail;
        this.cnt = 0;
    }

    push(value) {
        if (this.head) {
            var nextNode = new Node(value);
            this.tail.next = nextNode;
            this.tail = nextNode;
        } else {
            this.head = new Node(value);
            this.tail = this.head;
        }
        this.cnt++;
    }

    pop() {
        if (this.cnt) {
            var pointer = this.head;
            var temp = pointer.next;
            if (temp) {
                while (temp.next) {
                    pointer = pointer.next;
                    temp = pointer.next;
                }
                pointer.next = null
                this.tail = pointer;
                this.cnt--;
                return temp.value;
            } else {
                var result = pointer.value;
                this.head = null
                this.cnt--;
                return result;
            }
        }
    }

    shift() {
        if(this.head) {
            var result = this.head.value;
            this.head = this.head.next;
            this.cnt--;
            return result;
        }
    }

    unshift(value) {
        if(this.head) {
            this.head = new Node(value, this.head);
        } else {
            this.head = new Node(value);
            this.tail = this.head;
        }
        this.cnt++;
    }

    count() {
        return this.cnt;
    }

    delete(value) {
        var pointer = this.head;
        var pre = pointer;
        
        while(pointer) {
            if(pointer.value == value) {
                pre.next = pointer.next;
                pointer = null
                this.cnt--;
                break;
            } else {
                pre = pointer;
                pointer = pointer.next;
            }
        }
    }

}

class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}
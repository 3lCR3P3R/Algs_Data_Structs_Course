function Node(dataval) {
    this.dataval = dataval;
    this.preval = null;
    this.nextval = null;
}

function add_array(self){
    let L3 = [];
    while (self) {
        L3.push(self.dataval);
        self = self.preval;
    }
    if (L1.toString() == L3.toString()) {
        console.log(`La lista 2 (${L2}) es palíndromo de la lista 1 (${L1}) \nLista 2 = (${L3})`)
    } else {
        console.log(`La lista 2 (${L2}) no es palíndromo de la lista 1 (${L1}) \nLista 2 = (${L3})`)
    }
}

let L1 = [1,3,5,9];
let L2 = [9,5,3,1];

var e1 = new Node(L2[0]);
var e2 = new Node(L2[1]);
var e3 = new Node(L2[2]);
var e4 = new Node(L2[3]);

e1.nextval = e2;
e2.nextval = e3;
e3.nextval = e4;

e4.preval = e3;
e3.preval = e2;
e2.preval = e1;

add_array(e4);
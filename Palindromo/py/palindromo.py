class Node:
    def __init__(self, dataval=None):
        self.dataval = dataval
        self.preval = None
        self.nextval = None
        
    
    def add_array(self):
        L3 = []
        while self:
            L3.append(self.dataval)
            self = self.preval
        if L1 == L3:
            print(f"La lista 2 {L2} es palíndromo de la lista 1 {L1} \nLista 2 = {L3}")
        else:
            print(f"La lista 2 {L2} no es palíndromo de la lista 1 {L1} \nLista 2 = {L3}")

L1 = [1,3,5,9]
L2 = [9,5,3,1]

e1 = Node(L2[0])
e2 = Node(L2[1])
e3 = Node(L2[2])
e4 = Node(L2[3])

e1.nextval = e2
e2.nextval = e3
e3.nextval = e4

e4.preval = e3
e3.preval = e2
e2.preval = e1

thisvalue = e4
thisvalue.add_array()

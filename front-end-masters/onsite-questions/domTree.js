// We have two DOM trees A and B. For tree A we have the location of 
// an element. How would we find the location of the same element
// in tree B.

function reversePath(element, root) {
    const path = [];
    const pointer = element;

    while(pointer.parent){
        const index = pointer.parent.children.indexOf(pointer);
        path.push(index);

        pointer = pointer.parent;
    };

    pointer = root;

    while(path.length){
        pointer = children[path.pop()]
    };
};

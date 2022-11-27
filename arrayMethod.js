let myFruits = []
function addTodo() {
    myFruits.push(myInput.value);
    myOutput.innerHTML =  myFruits;
    details.innerHTML = `The push()  method adds a new element to an array (at the end)`
    myInput.value = "";
}

function delTodo() {
    myFruits.pop();
    myOutput.innerHTML =  myFruits;
    details.innerHTML = `The pop() method removes the last element from an array`
}


function editTodo() {
    myFruits.splice(0, 2, myInput.value);
    myOutput.innerHTML =  myFruits;
    details.innerHTML = `The splice() method can be used to add new items to an array`
}

function shiftTodo() {
    myFruits.shift(myInput.value);
    myOutput.innerHTML = myFruits
    details.innerHTML = `The shift() method removes the first array element and "shifts" all other elements to a lower index`
}

function unshiftTodo() {
    myFruits.unshift(myInput.value)
    myOutput.innerHTML =  myFruits
    details.innerHTML = `The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements`
}

function sortTodo() {
    myFruits.sort()
    myOutput.innerHTML =  myFruits
    details.innerHTML = `The sort() sorts the elements as strings in alphabetical and ascending order`
}

function reverseTodo() {
    myFruits.reverse()
    myOutput.innerHTML =  myFruits
    details.innerHTML = `The reverse() method reverses the order of the elements in an array`
}

function fillTodo() {
    myFruits.fill(myInput.value, 0,2)
    myOutput.innerHTML =  myFruits
    details.innerHTML = `The fill() method fills specified elements in an array with a value.`
}

function lengthTodo() {
    myOutput.innerHTML =  `The length of the array is ${myFruits.length} and contains ${myFruits}`
}

function isArrayTodo() {
    myOutput.innerHTML = Array.isArray(myFruits);
    details.innerHTML = `The isArray() method returns true if an object is an array, otherwise false`
}

function delAll() {
    var userResponse = confirm("Are you sure you want to delete? This action cannot be undone");
    if (userResponse == true) {
        myFruits.splice(0, myFruits.length);
        myOutput.innerHTML =  myFruits;
        details.innerHTML = `The splice(0) method removes all elements from an array`
    } else {
        myOutput.innerHTML =  myFruits;

    }
}

function displayResult() {
    if (myOptions.value == 1) {
        addTodo();
    } else if (myOptions.value == 2) {
        delTodo();
    } else if (myOptions.value == 3) {
        editTodo();
    } else if (myOptions.value == 4) {
        shiftTodo();
    } else if (myOptions.value == 5) {
        unshiftTodo();
    } else if (myOptions.value == 6) {
        sortTodo();
    } else if (myOptions.value == 7) {
        reverseTodo();
    } else if (myOptions.value == 8) {
        fillTodo();
    } else if (myOptions.value == 9) {
        lengthTodo()
    } else if (myOptions.value == 10) {
        isArrayTodo()
    } else if (myOptions.value == 11) {
        delAll()
    } 
}
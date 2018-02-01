/* This */

const express = require('express')
const app = express()
const path = require('path')

var person1 = { // The context is the person object 
    firstName: "Cosmo",
    lastName: "Kramer",
    fullName: function () { return this.firstName + " " + this.lastName; }
}

var person2 = { // The context is the person object 
    firstName: "Jerry ",
    lastName: "Seinfeld"
}

// Callbacks and this
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/this', function (req, res) {

    console.log("Get");

    var result = {
        "getPerson1": getPerson1(),
        "getPerson2": getPerson2(),
        "getWindowThis": getWindowThis()
    }

    res.send(result);

});



app.listen(3000, () => console.log("Listening on port 3000"));

// -----------------
function getPerson1(when) {
    return person1.fullName();
}

/* 
    If you understand this one principle of JavaScript’s this, you will understand the “this” keyword with clarity: 
    this is not assigned a value until an object invokes the function where this is defined. 
    Let’s call the function where this is defined the “this Function.”
*/

/*
 * "this" gets the value of whichever object invokes the "this" Function, hence:
 *  person1.fullName.apply (person2); will equal Jerry 
 *  APPLY: Another deep dive 
 */

function getPerson2(when) {
    return person1.fullName.apply(person2);   
}


function getWindowThis() {
    try { r = window.fullName(); } 
    catch(err) { r = "not a web page" }
    return r;
}


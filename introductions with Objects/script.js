const person = {
    firstName: "John",
    lastName: "Smith",
    age: 50,
    favColor: "blue",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

function fullIntro() {
    var show = document.getElementById("demo");
    show.innerHTML = "Hello! I am " + person.fullName() + ". I am " + person.age + ". My favorite color is " + person.blue;
}

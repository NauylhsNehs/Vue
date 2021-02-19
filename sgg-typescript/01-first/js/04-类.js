(function () {
    var Person = /** @class */ (function () {
        function Person(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.fullName = this.firstName + this.lastName;
        }
        return Person;
    }());
    function showFullName(person) {
        return person.firstName + '·' + person.lastName;
    }
    var person = new Person('ken', 'lucky');
    console.log(showFullName(person));
})();

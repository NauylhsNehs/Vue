(function () {
    function showFullName(person) {
        return person.firstName + person.lastName;
    }
    var person = {
        firstName: 'ken',
        lastName: 'lucky'
    };
    console.log(showFullName(person));
})();

(() => {
    interface IPerson {
        firstName: string
        lastName: string
    }
    function showFullName(person: IPerson) {
        return person.firstName + person.lastName
    }
    const person = {
        firstName: 'ken',
        lastName: 'lucky'
    }
    console.log(showFullName(person));
})()
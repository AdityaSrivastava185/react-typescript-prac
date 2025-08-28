// Private and Public mode in classes

class User {
    private readonly id : string
    public firstname : string
    public lastname : string

    constructor(id: string, firstname: string, lastname: string) {
        this.id = id
        this.firstname = firstname
        this.lastname = lastname
    }
}

const user1 = new User('99','Harkirat','Singh')
console.log(user1)
console.log(user1.firstname) // this is goona display the name because it has the property of the public in the class
console.log(user1.lastname)
// console.log(user1.id) - It is gonna give the error because it has the property of the private in the class so it is not accessible anywhere outside the class scope 

export{}
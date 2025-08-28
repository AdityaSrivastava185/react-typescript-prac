interface user {
    readonly id : string
    name : string,
    email : string,
    display(username:string) : string
}

const userdata : user = {
    id: 'harkiratsingh996',
    name: 'Harkirat Singh',
    email: 'harkiratsingh@100xdevs.com',
    display(username:'Harkirat Singh'):string{
        return `the name of the user is ${username}`
    }
}

console.log(userdata)

export {}
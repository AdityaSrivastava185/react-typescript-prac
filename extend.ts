interface name{
    firstname:string
}

interface fullName extends name{
    lastname : string
}

const user : fullName = {
    firstname: 'Harkirat',
    lastname: 'Singh'
}
console.log(user)

export {}
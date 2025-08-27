// type containing the single property
type greetTypes = {
    name : string
}

// type containing the multiple properties of multiple data types
type welcomeType = {
    name : string,
    greetCount : number
}

// types containing the property of the object 
type personType = {
    fullName:{
        firstname:string,
        lastname:string
    }
}

// type containing the "array of objects" property
type PersonListProps = {
    fullname:{
        firstname:string,
        lastname:string
    }[]
}

const greeting = (props : greetTypes) => {
    console.log('Welcome ' + props.name);
}

const welcome = (props:welcomeType)  => {
    console.log(`Welcome ${props.name}, you have greeted ${props.greetCount} times`);
}

const personName = (props:personType) => {
    console.log(`welcome ${props.fullName.firstname} ${props.fullName.lastname}`)
}

const personList = (props:PersonListProps) => {
    props.fullname.forEach(person => {
        console.log(`Welcome ${person.firstname} ${person.lastname}`);
    });
}

greeting({ name: 'john' });
welcome({
    name:'john',
    greetCount:5
})
personName({
    fullName:{
        firstname:'john',
        lastname:'doe'
    }
})
personList({
    fullname:[
        {
            firstname:'john',
            lastname:'doe'
        },
        {
            firstname:'jane',
            lastname:'smith'
        }
    ]
})
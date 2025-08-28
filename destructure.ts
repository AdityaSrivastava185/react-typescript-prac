type perosonProps = {
    name:string,
    age:number

}

function person({name , age}:perosonProps){
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
}
person({
    name:'harkirat singh',
    age:20
})
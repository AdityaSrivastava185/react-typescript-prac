// type narrowing

function id (id : string | null) {
    if(!id){
        console.log("We request you to provide the id")
        return
    }
    return id.toLowerCase()
}


function value (val:string|Date){
    if(val instanceof Date){
        return val.toISOString()
    } else{
        return val.toUpperCase()
    }
}


type Fish = { swim: () => void };
type Bird = { fly: () => void };
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}
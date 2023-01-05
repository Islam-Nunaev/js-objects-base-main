// let person = {
//     firstname: 'islam',
//      lastname: 'nunaev',
//      age: 29

//  }


function getName(obj) {


    return obj.name
}
console.log(getName(person))



function getNames(obj) {
    return [obj.firstname, obj.lastname]
}
console.log(getNames(person))




function concatNames(obj, lastname) {
    return (obj.firstname + ' ' + lastname)

}
console.log(concatNames(person))


function correctName(obj) {
    if (obj.fathername == undefined) {
        return obj.firstname
    } else {
        return `${obj.firstname} ${obj.lastname} ${obj.fathername}`
    }
}
console.log(concatNames(person))
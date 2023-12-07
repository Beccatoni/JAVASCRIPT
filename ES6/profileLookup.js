var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "458676598",
        "likes": ["Pizza", "coding", "Brownie points"]
    },
    {
        "firstName": "Acra",
        "lastName": "kaine",
        "number": "258676598",
        "likes": ["Pizza", "coding", "Brownie points"]
    },
    {
        "firstName": "jane",
        "lastName": "Laie",
        "number": "458306598",
        "likes": ["Pizza", "coding", "Brownie points"]
    }

];

function lookUpProfile(name, prop){
for(var i=0; i<contacts.length; i++){
    if(contacts[i].firstName === name){
      return contacts[i][prop] || "No such property";;
    }
}
// return "No such contact";
}
var data = lookUpProfile("rkira", "likes")
console.log(data)
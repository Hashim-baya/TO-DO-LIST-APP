 let contact = [
    {
        "firstName" : "HASHIM",
        "lastName" : "NASSORO",
        "likes" : "CODING"
    },

    {
        "firstName" : "ZAKIA",
        "lastName" : "KAHASO",
        "likes" : "PLAYING"
    },

    {
        "firstName" : "YUSRA",
        "lastName" : "MARURA",
        "likes" : "SLEEPING"
    }
];

function lookUpProfile (name, prop){
    for(let i = 0 ; i < contact.length ; i++){
        if(contact[i].firstName === name){
            return contact[i][prop] || "No such Property" ;
        }
    }
    return "No such Contact";
      
};

let data = lookUpProfile("HASHIM", "lastName");
console.log(data);
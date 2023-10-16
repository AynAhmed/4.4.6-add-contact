$(document).ready(function(){
if (localStorage.phonebook){
    var phonebook = JSON.parse(localStorage.phonebook)

}else {
    var phonebook= []

}

$("#add").on("click", function(){

    addContact();
})

$("#retrieve").on("click", function(){
    retrieveContact();
})

// function contactExists(first, last){

// }

function retrieveContact(firstName, lastName){

    var firstName = prompt("Enter first name: ")
    var lastName = prompt("Enter last name: ")

var contact = phonebook.find(function(contact){
        return contact.firstName == firstName && contact.lastName == lastName;
    })

    if (contact){
        alert("inside ")
        $("#contact-reveal").text( contact.firstName + " " + contact.lastName + " " + contact.number)
    }else {
     var response = prompt("Contact not found. Would you like to add it? (yes or no)")
    if (response == "yes"){
        addContact();
    }else {
        alert("alright, bye!")
    }
    }

}


function addContact(){
    var first = prompt("first name: ")
    var last = prompt("Last Name ")
    var num = prompt("number ")

    var contact = {
        firstName : first,
        lastName : last,
        number : num
    }

    phonebook.push(contact);
    localStorage.phonebook = JSON.stringify(phonebook);
}



});




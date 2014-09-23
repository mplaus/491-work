function contactChooser(){
    var options = new ContactFindOptions();
    options.fields = ["displayName", "name", "emails", "phoneNumbers"];
    navigator.contacts.chooseContact( onSuccess, options);
}

function onSuccess(id, contact){
    var nombre = contact['name']['formatted'];
    var telefono = contact['phoneNumbers'][0];

    console.log(id);
    console.log(nombre);
    console.log(telefono);
}
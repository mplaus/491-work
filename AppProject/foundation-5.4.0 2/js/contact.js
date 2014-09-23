function onSuccess(contacts) {
    alert('Found ' + contacts.length + ' contacts.');
};

function onError(contactError) {
    alert('onError!');
};

// find all contacts with 'Bob' in any name field
var options = new ContactFindOptions();
options.filter="Bob"; 
var fields = ["displayName", "name"];
navigator.contacts.find(fields, onSuccess, onError, options);

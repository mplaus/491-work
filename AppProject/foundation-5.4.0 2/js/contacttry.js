function onClick(#add) {

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
}

var options = new ContactFindOptions();

options.filter=""; // Note empty filter will pick up all contacts

options.multiple = true;

var fields = ["*"]; // Picks up all fields

navigator.contacts.find(fields, findSuccess, onError, options);

var contactsArray=new Array();
var contactFieldsArray = new Array('displayName','firstName','lastName' ...);
for(var i = 0; i < contacts.length;i++){
   for(var j = 0; j < contactFieldsArray.length; j++){
      if(contactFieldsArray[j].match(/(phoneNumbers)|(emails)/i){
         contactsArray,push(contacts[i].contactFieldsArray[j][0].value);
      }else{
          contactsArray.push(contacts[i].contactFieldsArray[j]);      
      }
   }
}
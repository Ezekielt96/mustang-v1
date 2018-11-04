//Declaring empty variables for a empty Array, empty Url array, and Initalizing loading contact to 0 
var contactURLArray = [];
var contactArray = [];
var loadingContact = 0;
//Starts the application with a welcome message to make sure t is working 
function initApplication() {
    console.log('Starting Mustang Version 1 '); //starting the console application 
}
function loadIndex() {
    // Load the Mustang index file.
    var indexRequest = new XMLHttpRequest();
    //Request to get information from our class index file
    indexRequest.open('GET', 'https://mustang-index.azurewebsites.net/index.json');
    indexRequest.onload = function() {
        //logging the console log information into the cnsole 
        console.log("Index JSON:" + indexRequest.responseText);
        //calling indexID from HTML file 
        document.getElementById("indexID").innerHTML = indexRequest.responseText;
        contactIndex = JSON.parse(indexRequest.responseText);
        for (i=0; i<contactIndex.length; i++) {
            contactURLArray.push(contactIndex[i].ContactURL);
        }
        console.log("ContactURLArray: " + JSON.stringify(contactURLArray));
    }
    indexRequest.send();
}
function loadContacts() {
    // Clear the current contactArray. It is better to do a multi threaded function istead of something recursive 
    contactArray.length = 0;
    loadingContact = 0
    if (contactURLArray.length > loadingContact) {
        loadNextContact(contactURLArray[loadingContact]);
    }
}
//Loading url contacts 
function loadNextContact(URL) {
    //logging url to the console 
    console.log("URL: " + URL);
    contactRequest = new XMLHttpRequest();
    contactRequest.open('GET', URL);
    contactRequest.onload = function() {
        console.log(contactRequest.responseText);
        var contact;
        contact = JSON.parse(contactRequest.responseText);
        console.log("Contact: " + contact.firstName);
        contactArray.push(contact);
        document.getElementById("contactsID").innerHTML = JSON.stringify(contactArray);
        //Move to the next contact in the array after each cycle 
        loadingContact++;
        //if contact url array length is greater than loadingcontacts which is 0 then load the next contact 
        if (contactURLArray.length > loadingContact) {
            loadNextContact(contactURLArray[loadingContact]);
        }
    }
    // send the contacts out from the array 
    contactRequest.send();
}
    //log rhe cntact information in the consle to keep track of all people 
function logContacts() {
    console.log(contactArray);
}
//New Jason Implementations 

var Character = {
    "Name": "Peter Parker",
    "Age": "Spiderman",
    "Career": "Photographer",
    "Hometown": "Maryjane",
    "birthdate": "000000",
}

var superHeros =[
    {"Name": "Peter Parker",
    "Age": "23",
    "Career": "Photographer",
    "Hometown": "Maryjane",
    "birthdate": "000000",
    "Heroname": "Spiderman"},


    {"Name": "NaChalla",
    "Age": "30",
    "Career": "King of Wakanda",
    "Hometown": "Maryjane",
    "birthdate": "000000",
    "Heroname": "BlackPAnther", },

    {"Name": "Brucewayne",
    "Age": "38",
    "Career": "",
    "Hometown": "Maryjane",
    "birthdate": "000000",
    "HeroName": "TheDarkKnight",}
]



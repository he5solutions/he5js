/*
He5 Js - Initiated by He5 Solutions - he5.in

#he5id ( id="he5id" )
.he5class ( class="myClass" )

*/

var He5 = {};

He5.generatePassword = function(length=16) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?';
        return Array.from({ length }, () => characters[Math.floor(Math.random() * characters.length)]).join('');
}

He5.getRandomNumber = function(min = 0, max = 10) {
    max = max + 1;
    return Math.floor(Math.random() * (max - min)) + min;
}

He5.encodeBase64 = function(input) {
    return btoa(input);
}

He5.decodeBase64 = function(input) {
    return atob(input);
}

He5.redirect = function(url, newTab=false){
    var target = "_self";
    if(newTab)
    {
        target = "_blank";
    }
    window.open(url, target);
}

He5.hide = function(elementName){
    const elements = document.querySelectorAll(elementName);
    elements.forEach(element => {
        element.style.display = "none";
    });
}

He5.unHide = function(elementName){
    const elements = document.querySelectorAll(elementName);
    elements.forEach(element => {
        element.style.display = "block";
    });
}

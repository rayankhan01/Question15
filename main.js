var guests = ["Salman", "Maqsoom", "Nubair"];
guests.forEach(function (guests) {
    console.log("Dear ".concat(guests, ",would you like to join me for dinner?"));
});
var unableToAttend = "Maqsoom";
console.log("".concat(unableToAttend, " can't make it to dinner."));
// Replace the guest 
var newGuest = "Aliyan Zaidi";
guests[guests.indexOf(unableToAttend)] = newGuest;
// New invitations
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ",would you like to join me for dinner?"));
});

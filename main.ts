let guests: string[] = ["Salman" , "Maqsoom" , "Nubair"]
guests.forEach(guests => {console.log(`Dear ${guests},would you like to join me for dinner?`);
});

let unableToAttend = "Maqsoom";
console.log(`${unableToAttend} can't make it to dinner.`);

// Replace the guest 
let newGuest = "Aliyan Zaidi"; 
guests[guests.indexOf(unableToAttend)] = newGuest;

// New invitations
guests.forEach(guest =>{
    console.log(`Dear ${guest},would you like to join me for dinner?`);
});
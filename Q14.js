
//Invite some people to dinner.
guests = ["Irfan", "Imran", "Faiz", "Sultan", "Atif"];

console.log(guests[0] + " , please come to dinner.");
console.log(guests[1] + " , please come to dinner.");
console.log(guests[2] + " , please come to dinner.");
console.log(guests[3] + " , please come to dinner.");
console.log(guests[4] + " , please come to dinner.");
console.log("\nSorry, " + guests[1] + " can't make it to dinner.");
// Imran can't make it! Let's invite Atif Mahar instead.

delete guests[2];
guests.splice(2, 1, "Atif Mahar");

// Print the invitations again.
console.log("\n" + guests[0] + ", please come to dinner.");
console.log("\n" + guests[1] + ", please come to dinner.");
console.log("\n" + guests[2] + ", please come to dinner.");
console.log("\n" + guests[3] + ", please come to dinner.");
console.log("\n" + guests[4] + ", please come to dinner.");
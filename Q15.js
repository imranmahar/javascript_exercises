// Invite some people to dinner.
guests = ['guido van rossum', 'jack turner', 'lynn hill']
console.log(guests[0] + " , please come to dinner.");
console.log(guests[1] + " , please come to dinner.");
console.log(guests[2] + " , please come to dinner.");
console.log("\nSorry, " + guests[1] + " can't make it to dinner.")

// Jack can't make it! Let's invite Gary instead
delete guests[1];
guests.splice(1, 1, "gary snyder");
console.log("\n" + guests[0] + ", please come to dinner.");
console.log(guests[1] + ", please come to dinner.");
console.log(guests[2] + ", please come to dinner.");
//We got a bigger table, so let's add some more people to the list.
console.log("\nWe got a bigger table!")
guests.splice(0, 2, "frida kahlo");
guests.splice(1, 3, "guido van rossum");
guests.splice(2, 3, "reinhold messner");
guests.splice(3, 4, "Gary Snyder");
guests.splice(4, 5, "Lynn Hill");
guests.push('elizabeth peratrovich');

console.log(guests[0] + " , please come to dinner.");
console.log(guests[1] + " , please come to dinner.");
console.log(guests[2] + " , please come to dinner.");
console.log(guests[3] + " , please come to dinner.");
console.log(guests[4] + " , please come to dinner.");
console.log(guests[5] + " , please come to dinner.");
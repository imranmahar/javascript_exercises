
names =["name", "imran", "faiz", "test", "unknown"];
String.prototype.title = function () {
    return this.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
};
msg = "Hello, " + names[0].title() + "!"
console.log(msg)

msg = "Hello, " + names[1].title() + "!"
console.log(msg)

msg = "Hello, " + names[2].title() + "!"
console.log(msg)
msg = "Hello, " + names[3].title() + "!"
console.log(msg)
msg = "Hello, " + names[4].title() + "!"
console.log(msg)
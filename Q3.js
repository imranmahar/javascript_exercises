PersonName = "imran";
String.prototype.toProperCase = function () {
    return this.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
};
console.log(PersonName.toLowerCase())
console.log(PersonName.toUpperCase())
console.log(PersonName.toProperCase())
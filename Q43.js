
function make_sandwich(Item) {

    String.prototype.toProperCase = function () {
        return this.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
    };
    console.log("\nI'll make you a great sandwich:")
    for (let index = 0; index < Item.length; index++) {

        console.log("  ...adding " + Item[index].toProperCase() + " to your sandwich.")

    }
    console.log("Your sandwich is ready!:")


}
sandwich = ['roast beef', 'cheddar cheese', 'lettuce', 'honey dijon'];
make_sandwich(sandwich)
magician = ['harry houdini', 'david blaine', 'teller'];
make_sandwich(magician)
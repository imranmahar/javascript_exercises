function show_magicians(magicians) {
    for (let index = 0; index < magicians.length; index++) {
        console.log(magicians[index].toProperCase());

    }
    String.prototype.toProperCase = function () {
        return this.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
    };
}


magicians = ['harry houdini', 'david blaine', 'teller'];
show_magicians(magicians);
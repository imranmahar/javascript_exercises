function magicians(magicians) {
    for (let index = 0; index < magicians.length; index++) {
        console.log(magicians[index].toProperCase());

    }
    String.prototype.toProperCase = function () {
        return this.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
    };

}

function make_great(magicians) {
    great_magicians = [];
    for (let index = 0; index < great_magicians.length; index++) {
        magician = magicians.pop(index)
    }

    great_magician = magician + ' the Great'

    great_magicians = great_magician.map((x) => x);


}
magicians = ['harry houdini', 'david blaine', 'teller'];
make_great(magicians)



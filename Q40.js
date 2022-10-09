function make_album(artist, title) {

    String.prototype.toProperCase = function () {
        return this.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
    };

    album_dict = {
        'artist': artist.toProperCase(),
        'title': title.toProperCase(),
    }
    return album_dict

}


album = make_album("metallica", "ride the lightning")
console.log(album)

album = make_album('beethoven', 'ninth symphony')
console.log(album)

album = make_album('willie nelson', 'red-headed stranger')
console.log(album)
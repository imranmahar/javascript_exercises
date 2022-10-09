function make_album(artist, title, tracks = 0) {

    album_dict = {
        'artist': artist.toProperCase(),
        'title': title.toProperCase(),
    }
    if (tracks > 0) {
        album_dict['tracks'] = tracks
    }
    return album_dict
}

String.prototype.toProperCase = function () {
    return this.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
};
album = make_album("metallica", "ride the lightning")
console.log(album)


album = make_album("metallica", "ride the lightning")
console.log(album)

album = make_album("metallica", "ride the lightning",9)
console.log(album)

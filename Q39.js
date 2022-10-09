function city_country(city, Country) {

    message = "'" + city.toProperCase() + ", " + Country.toProperCase() + "'."
    console.log(message)
}
String.prototype.toProperCase = function () {
    return this.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
};
city_country("Lahore", "Pakistan")

city_country("Jam Shoro", "Pakistan")

city_country("Sukkar", "Pakistan")
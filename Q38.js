function describe_city(city = "Lahore", Country = "Pakistan") {

    message = city.toProperCase() + " is in " + Country.toProperCase() + "."
    console.log("'such as  " + message + "'")
}
String.prototype.toProperCase = function () {
    return this.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
};
describe_city("imran")

describe_city("Karachi")

describe_city("Lahore")

describe_city("Puna", "India")
describe_city()
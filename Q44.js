function make_car(manufacturer, model, options) {

    String.prototype.toProperCase = function () {
        return this.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
    };
    car_dict = {
        'manufacturer': manufacturer.toProperCase(),
        'model': model.toProperCase(),
    }
    /*  for (let index = 0; index < options.length; index++) {
 
         console.log("  " + options[index].toProperCase() + "")
 
     } */
    return car_dict


}

my_outback = make_car('subaru', 'outback')
console.log(my_outback)
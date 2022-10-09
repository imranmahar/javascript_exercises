rivers = []


river1 = [
    riverName = "Nile",
    Country = "egypt"

]

river2 = [
    riverName = "mississippi",
    Country = "united states"

]

river3 = [
    riverName = "Ravi",
    Country = "Pakistan"

]

river4 = [
    riverName = "fraser",
    Country = "canada"

]

river5 = [
    riverName = "kuskokwim",
    Country = "alaska"

]

river6 = [
    riverName = "yangtze",
    Country = "china"

]

console.log("Merging array by [].concat(rivers, river )")
var mergedArray = rivers.concat(river1, river2, river3, river4, river5, river6);
console.log("Merged Array", mergedArray);

    var element = mergedArray['riverName'] + mergedArray['Country'];
    console.log(element);


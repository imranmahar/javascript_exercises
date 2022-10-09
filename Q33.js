ordinal = [1, 2, 3, 4, 5, 6, 7, 8, 9]
for (let index = 0; index < ordinal.length; index++) {

    if (ordinal[index] == 1) {
        console.log(ordinal[index] + "st")
    }
    else if (ordinal[index] == 2) {
        console.log(ordinal[index] + "nd")
    }
    else if (ordinal[index] == 3) {
        console.log(ordinal[index] + "rd")
    }
    else {
        console.log(ordinal[index] + "th")
    }
}

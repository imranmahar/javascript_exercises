function make_shirt(size = 'large', message = " I love JavaScript") {

    console.log("\nI'm going to make a " + size + " t-shirt.")
    console.log("'It will say, " + message + "'")
}
make_shirt()
make_shirt(size = 'medium')
make_shirt('small', 'Programmers are loopy.')
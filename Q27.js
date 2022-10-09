alien_color = ['green', 'yellow', 'red']
for (let i = 0; i <= alien_color.length; i++) {
    if (alien_color[i] == "green") {
        console.log("the player just earned 5 points")
    }
    else if (alien_color[i] == "yellow") {
        console.log("the player just earned 10 points")
    }
    else if (alien_color[i] == "red") {
        console.log("the player just earned 15 points")
    }
    else {
        console.log("the player just earned No points")
    }
}

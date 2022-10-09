users = ["admin", "employe", "manager", "worker", "staff"]
for (let index = 0; index < users.length; index++) {
    if (users[index] == "admin") {
        console.log("Hello " + users[index] + ", would you like to see a status report?")
    }
    else if (users[index] != "admin") {
        console.log("Hello " + users[index])
    }

}

userName = ["Imran", "employe", "manager", "worker", "staff"]
for (let index = 0; index < userName.length; index++) {
    if (userName[index] == "admin") {
        console.log("Hello " + userName[index] + ", would you like to see a status report?")
    }
    else if (userName[index] != "admin") {
        console.log("Hello " + userName[index] + ", thank you for logging in again")
    }

}

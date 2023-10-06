import React from "react"

export default function Navbar() {
    return (
        <nav>
            <img src="./images/airbnb-logo.png" className="nav--logo" />
            <h1> Welcome, good {timeoftheday}!</h1>
        </nav>
    )
}

const date= new Date()
const hours= date.getHours()
let timeoftheday
if (hours<13){
    timeoftheday = "morning"
}
else if (hours >=13 && hours <20){
    timeoftheday = "afternoon"
}
else {
    timeoftheday = "night"
}
require("dotenv").config();

const train = document.querySelector(".train");
const btn = document.querySelector("button");

var getFeed = function() {
    console.log("action")
    fetch(QUERY_URL, {
        method: "GET",
        headers: {
            "x-api-key": MY_KEY
        }
    })
}

btn.addEventListener("click", getFeed)
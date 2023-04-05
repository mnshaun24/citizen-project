const myKey = "WVmvBvMaMI2eYo2ltSDdm900nMJYWF0O5Jpp6k4s"
const queryURL =  "https://api-endpoint.mta.info/Dataservice/mtagtfsfeeds/nyct%2Fgtfs-bdfm";


const train = document.querySelector(".train");
const btn = document.querySelector("button");

var getFeed = function() {
    fetch(queryURL, {
        method: "GET",
        responseType: "arraybuffer",
        headers: {
            "x-api-key": myKey
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error({ message: "Oops. Try again!" });
        } 
        console.log(response);
    })
}

btn.addEventListener("click", getFeed)
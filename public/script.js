const btn = document.querySelector("button");

const baseURL = "http://localhost:3000/apiRoutes/api";

btn.addEventListener("click", getFeed)

async function getFeed(e) {
    e.preventDefault();
    const res = await fetch(baseURL, {
        method: "GET"
    })
    console.log(res)
}



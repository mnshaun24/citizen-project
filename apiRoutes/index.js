require("dotenv").config();

const router = require("express").Router();
const axios = require("axios");
const myKey = process.env.MY_KEY;
const queryURL = process.env.QUERY_URL

const trainGet = () => {
axios.get(queryURL, {
    headers: {
        "x-api-key": myKey,
    },
})
.then(response => {
    console.log("ok")
})
.catch(error => {
    console.log(error)
})
}

router.get("/api", trainGet);


// router.get("/apiRoutes", (req, res) => {
//   fetch(queryURL, {
//     method: "GET",
//     responseType: "arraybuffer",
//     headers: {
//       "x-api-key": myKey,
//     },
//   }).then((res) => {
//     if (!res.ok) {
//       throw new Error({ message: "Oops. Try again!" });
//     }
//     console.log(res);
//   });
// });

module.exports = router;

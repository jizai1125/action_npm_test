const axios = require("axios");

axios
  .get("/test/")
  .then((res) => {})
  .catch((err) => {
    console.log("axios error", 22222222222);
  });

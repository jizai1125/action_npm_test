const axios = require("axios");
console.log(1);
axios
.get("/test/3333")
.then((res) => {})
.catch((err) => {
  console.log("axios error");
});
console.log('mmmm');

const axios = require("axios");
 
let config = {
  method: "get",
  maxBodyLength: Infinity,
  url: "https://api.upstox.com/v2/login/authorization/dialog",
  params: {
    client_id: "88b1eb14-832c-4328-917b-9094278ec0ef",
    redirect_uri: "http://localhost:5173/",
    response_type: "code",
  },
};

axios(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
  });

import React, { useEffect, useState } from "react";
import axios from "axios";

function Login() {
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const url = "https://api.upstox.com/v2/login/authorization/dialog";

      const params = {
        client_id: "88b1eb14-832c-4328-917b-9094278ec0ef",
        redirect_uri: "http://localhost:5173/",
        response_type: "code",
      };
      let headers ={
        "Access-Control-Allow-Origin":"http://localhost:5173/",
        "Access-Control-Allow-Credentials":true,
      }

      axios
        .get(url, { params})
        .then((response) => {
          console.log(response.status);
          console.log(response.data);
          setData(response.data);
        })
        .catch((error) => {
          console.error("Error:", error.message || error);
        });
    };
    fetchData();
  }, []);

  return <div>Login</div>;
}

export default Login;

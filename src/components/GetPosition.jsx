import React, { useEffect, useState } from "react";
import Token from "../constant";
import axios from "axios";

function Position() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const url = "https://api.upstox.com/v2/portfolio/short-term-positions";
      const headers = {
        Accept: "application/json",
        Authorization: `Bearer ${Token}`,
      };

      axios
        .get(url, { headers })
        .then((response) => {
          console.log(response.data);
          setData(response.data)
        })
        .catch((error) => {
          console.error(error);
        });
    };
    fetchData();
  }, []);
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!data) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <h2>Data:</h2>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    );
  }
}

export default Position;

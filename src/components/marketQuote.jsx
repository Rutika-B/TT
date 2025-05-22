import React, { useEffect, useState } from "react";
import Token from "../constant";
import axios from "axios";
// const axios = require('axios');

function MarketQot() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const url = "https://api.upstox.com/v2/market-quote/quotes?instrument_key=NSE_FO|BANKNIFTY20JUL46000CE";
    //   BANKNIFTY 20 Jul 2023 CE 46000
      const headers = {
        Accept: "application/json",
        Authorization: `Bearer ${Token}`,
      };

    //   const params = {
    //     instrument_key:"NSE_FO", 
    //   };

      axios
        .get(url, { headers })
        .then((response) => {
          console.log(response.status);
          console.log(response.data);
          setData(response.data)
        })
        .catch((error) => {
          console.error("Error:", error.message || error);
          console.log("are halkat")
        });
    };
    fetchData();
  }, []);
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  else if(!data){
    return <div>Loading...</div>
  }
   else {
    return (
      <div>
        <h2>Data:</h2>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    );
  }
}

export default MarketQot;

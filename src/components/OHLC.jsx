import React, { useEffect, useState } from "react";
import Token from "../constant";
import axios from "axios";
// const axios = require('axios');

function OHLCqot() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const url = "https://api.upstox.com/v2/market-quote/ohlc?instrument_key=NSE_EQ%7CINE848E01016&interval=I1";
      const headers = {
        Accept: "application/json",
        Authorization: `Bearer ${Token}`,
      };

    //   const params = {
    //     segment: "FO",
    //     financial_year: "2324",
    //     page_number:1,
    //     page_size:100,
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

export default OHLCqot;

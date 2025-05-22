import React, { useEffect, useState } from "react";
import Token from "../constant";
import axios from "axios";

function Borkerage() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
    
      const url = "https://api.upstox.com/v2/charges/brokerage";
      const headers = {
        Accept: "application/json",
        Authorization: `Bearer ${Token}`,
      };

      const params = {
        instrument_token: "NSE_EQ|INE669E01016",
        quantity: "10",
        product: "D",
        transaction_type: "BUY",
        price: "13.7",
      };

      axios
        .get(url, { headers, params })
        .then((response) => {
          console.log(response.data);
          setData(response.data);
        })
        .catch((error) => {
          console.error(error.message);
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

export default Borkerage;

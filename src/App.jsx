import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HttpComponent = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.upstox.com/v2/user/profile', {
          headers: {
            'Authorization': `Bearer ${token}`
            // 'Accept': 'application/json',
          }
        });
        setData(response.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();

    // Cleanup function to cancel the request if component unmounts or re-renders
    return () => {};
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
};

export default HttpComponent;

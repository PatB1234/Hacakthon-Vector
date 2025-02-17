import React, { useEffect, useState } from 'react'
import axios from 'axios';

async function postData(url = "", data = {}) {
  const response = await fetch(url, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: { "Content-Type": "application/json" },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
  });
  return response.json();
}

function AIPage() {

    const [ipAddress, setIPAddress] = useState('')
    let browserInfo = `${navigator.userAgent} + ${navigator.platform} + ${navigator.language} + ${navigator.onLine}`
    useEffect(() => {
      fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => setIPAddress(data.ip))
        .catch(error => console.log(error))
    }, []);

  
      fetch('http://localhost:8000/log_hacker', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          browser: browserInfo,
          ip: ipAddress,
        }),
      })
        .then(response => response.json())
        .then(data => {

          console.log("Done")
        })
        .catch((error) => {
          console.error('Error:', error);
        });

    return (
        <>
      <h1>BAD ACTOR DETECTED, LEAVE NOW. YOUR IP AND BROWSER IS NOW STORED IN OUR DATABASE. DO NOT COME BACK OR SCADE WILL TAKE FURTHER ACTION</h1>
      <h1>{ipAddress}</h1>
      <h1>{browserInfo}</h1>
      </>
    )

  };
export default AIPage;
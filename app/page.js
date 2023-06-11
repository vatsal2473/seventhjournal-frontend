"use client"

import Image from 'next/image'
import { Button } from "@nextui-org/react";
import { useState } from 'react';

const processApi = async (text, setResponse) => {

  var formdata = new FormData();
  formdata.append("text", text);

  // "Today was a mix of highs and lows. I had a great time at lunch with my friends, but then I had a disagreement with my boss at work. It was frustrating and made me feel insecure about my job. On the bright side, I was able to fix the problem and we got through it. After work, I met some friends for a yoga class and it was my way to relax and de-stress from earlier. Overall, it was an up-and-down day, but I’m thankful for the good moments and look forward to a fresh start tomorrow."
  
  var requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow'
  };
  
  fetch("https://7ca920e06e1e.ngrok.app/insights", requestOptions)
    .then(response => response.json())
    .then(result => {
      console.log(result);
      setResponse(result);
    })
    .catch(error => console.log('error', error));
  

}

export default function Home() {


  const [response, setResponse] = useState({});
  const [text, setText] = useState('');

  const handleGenerate = async () => {
    
    console.log(text);
    processApi(text, setResponse);

  }


  const handleChange = (event) => {
    setText(event.target.value);
  }

  console.log(response);
  console.log(text);

  return (
    <>
    <div className='p-10 m-32 border rounded-xl border-gray-200 hover:border-gray-400 duration-300 ease-in'>
      <h1 className='text-3xl font-semibold'>Text</h1>
      <textarea type='text' className='border-2 p-4 border-gray-400 mt-3 rounded-lg w-1/2'
        onChange={handleChange} value={text}></textarea>
      
      <Button className='bg-black mt-3' onClick={handleGenerate}>Generate</Button>

      {response ? (
        <>
          <p className='mt-10 text-2xl'>Insights:</p>
          {Object.keys(response).map(key => (
            <p key={key}>
              <span style={{ fontWeight: 'bold' }}>{key}:</span> {response[key]}
            </p>
          ))}
        </>
      ) : (
        <p>No output to display</p>
      )}
      
      
      </div>


    </>
  )
}

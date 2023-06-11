"use client"

import Image from 'next/image'
import { Button } from "@nextui-org/react";


export default function Home() {

var formdata = new FormData();
formdata.append("text", "Today was a mix of highs and lows. I had a great time at lunch with my friends, but then I had a disagreement with my boss at work. It was frustrating and made me feel insecure about my job. On the bright side, I was able to fix the problem and we got through it. After work, I met some friends for a yoga class and it was my way to relax and de-stress from earlier. Overall, it was an up-and-down day, but I’m thankful for the good moments and look forward to a fresh start tomorrow.");

var requestOptions = {
  method: 'POST',
  body: formdata,
  redirect: 'follow'
};

fetch("https://7ca920e06e1e.ngrok.app/insights", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));


  return (
    <>
    <div className='p-10 m-32 border rounded-xl border-gray-200 hover:border-gray-400 duration-300 ease-in'>
      <h1 className='text-3xl font-semibold'>Prompt</h1>
      <textarea type='text' className='border-2 p-4 border-gray-400 mt-3 rounded-lg w-1/2'></textarea>
      <Button className='bg-black mt-3'>Generate</Button>

      <p className='mt-10 text-2xl'>Output:</p>
      <p className='mt-3'>The output here</p>
      </div>


    </>
  )
}

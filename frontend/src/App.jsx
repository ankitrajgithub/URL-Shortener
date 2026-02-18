import { useState } from 'react'

function App() {
  const [url,setUrl] = useState("");
  const [shortUrl,setShortUrl]=useState("");
  const [copied,setCopied]=useState(false);
  const [qrImage,setQrImage]=useState("");

  const handleShorten=async ()=>{
    if(!url){
      
    }
  }

  return (
    <>
      <p>Hello</p>
    </>
  )
}

export default App

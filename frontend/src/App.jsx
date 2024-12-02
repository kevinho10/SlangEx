import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [slang, setSlang]     = useState("")
  const [meaning, setMeaning] = useState("")


  useEffect(() => {
    fetch("http://localhost:5174/", { mode: "cors" })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((response) => {
        let phrase = response.slice(0, response.indexOf(":"))
        let description = response.slice(response.indexOf(":")+2)
        setMeaning(phrase);
        setSlang(description);
      })
      .catch((error) => console.log(error))
  }, []);

  return (
    <>
      <h1>{slang}</h1>
      <div className="card">
        <p>
          {meaning}
        </p>
      </div>
    </>
  )
}

export default App
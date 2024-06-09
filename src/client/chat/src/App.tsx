import { useState } from 'react'


function App() {
  const [messages, setMessages] = useState([""])
  
  const [inputValue, setInputValue] = useState("Hello")

  return <div>
    <div>
    <input 
    type="text" 
    value={inputValue}
    onChange={(e) => setInputValue(e.target.value)}
    />

    <button 
    onClick ={()=>setMessages([...messages, inputValue])
    }>
    Send
    </button>
    </div>
    
    <div>
      {messages.map((message)=>
        <h2>{message}</h2>)
      }
    </div>
  </div>
}

export default App

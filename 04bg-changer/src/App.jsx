import { useState } from "react"

function App() {
  const [color,setcolor] = useState("olive")

  return (
    <>
      <div className ="duration-200 w-full h-screen "
      style={{backgroundColor : color}}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-4"
        >
          <div className="fixed flex flex-wrap gap-3 shadow-lg justify-center bg-white py-1 rounded-full"
          >
            <button  onClick={() => setcolor("red")}
            className="outline-none px-4 rounded-full" 
            style={{backgroundColor:"red"}}
           
            >Red</button>

            <button  onClick={() => setcolor("blue")}
            className="outline-none px-4 rounded-full" 
            style={{backgroundColor:"blue"}}
           
            >Blue</button>

            <button  onClick={() => setcolor("yellow")}
            className="outline-none px-4 rounded-full" 
            style={{backgroundColor:"yellow"}}
           
            >Yellow</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

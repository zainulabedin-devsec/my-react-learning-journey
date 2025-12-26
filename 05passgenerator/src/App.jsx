import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const[length,setLength] = useState(10)
  const[number,setNumber] = useState(false)
  const[chracter,setChracter] = useState(false)
  const[pass,setPass] = useState("")

  const passwordGenerator = useCallback(()=>{
    let password = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(number) str += "012345678"
    if(chracter) str += "!@#$%^&*(){}/"
    for (let i = 0; i < length; i++) {
     let char = Math.floor(Math.random() * str.length + 1)
     password +=str.charAt(char)
      
    }
    setPass(password)
  },
  [length,number,chracter,setPass])

  useEffect(() => {
    passwordGenerator()
  },
  [length,number,passwordGenerator])

  const passRef = useRef(null)
  const copyPass = useCallback(()=>{
    passRef.current?.select();
    window.navigator.clipboard.writeText(pass);
  },[pass])
  return (
    <>
  <div className="flex justify-center items-center min-h-screen bg-gradient-to-r  p-6 bg-[url(https://static.vecteezy.com/system/resources/thumbnails/034/247/477/small_2x/cybersecurity-protects-digital-information-computer-systems-and-networks-data-privacy-secure-passwords-and-encryption-to-safeguard-and-ensure-privacy-business-technology-shield-safety-hacker-photo.jpg)] bg-no-repeat bg-cover bg-center h-screen w-full ">
  <div className="bg-cyan-500 shadow-2xl rounded-2xl w-full max-w-md p-6">
    
    <h1 className="text-center text-3xl font-bold text-gray-800 mb-6">Password Generator</h1>
    
    <div className="flex gap-2">
      <input
        className="rounded-lg w-full text-center my-2 h-12 border border-gray-300 focus:ring-2 focus:ring-blue-600 outline-none"
        type="text"
        placeholder="password"
        readOnly
        value={pass}
        ref={passRef}
      />
      <button
        className="bg-blue-500 hover:bg-blue-800 text-white font-semibold rounded-lg h-12 px-4 transition-all shadow-md mt-2"
        onClick={copyPass}
      >
        Copy
      </button>
    </div>

    <div className="mt-6 space-y-4">
      {/* Range Selector */}
      <div className="flex items-center gap-4">
        <input
          type="range"
          min={10}
          max={100}
          value={length}
          onChange={(e) => setLength(e.target.value)}
          className="w-full accent-blue-600"
        />
        <label className="font-medium text-gray-700">Length: {length}</label>
      </div>

      {/* Numbers Checkbox */}
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          value={number}
          onChange={() => setNumber((prev) => !prev)}
          className="h-5 w-5"
        />
        <label className="text-gray-700 font-medium">Include Numbers</label>
      </div>

      {/* Characters Checkbox */}
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          value={chracter}
          onChange={() => setChracter((prev) => !prev)}
          className="h-5 w-5 "
        />
        <label className="text-gray-700 font-medium">Include Characters</label>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default App

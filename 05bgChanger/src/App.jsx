import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200" style={{background: color}}>
      <div className="flex flex-wrap justify-center insert-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 mt-12 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick={() => setColor("Red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{background: "Red"}}>Red</button>
          <button onClick={() => setColor("Green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{background: "Green"}}>Green</button>
          <button onClick={() => setColor("Blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{background: "Blue"}}>Blue</button>
          <button onClick={() => setColor("Olive")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{background: "Olive"}}>Olive</button>
          <button onClick={() => setColor("Gray")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{background: "Gray"}}>Gray</button>
          <button onClick={() => setColor("Yellow")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{background: "Yellow"}}>Yellow</button>
          <button onClick={() => setColor("Pink")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{background: "Pink"}}>Pink</button>
          <button onClick={() => setColor("Purple")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{background: "Purple"}}>Purple</button>
          <button onClick={() => setColor("Brown")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{background: "Brown"}}>Brown</button>
          <button onClick={() => setColor("Black")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{background: "Black"}}>Black</button>
        </div>
      </div>
    </div>
  )
}

export default App

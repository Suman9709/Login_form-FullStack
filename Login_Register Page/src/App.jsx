import Login from "./Components/Login"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignUp from "./Components/SignUp"
import Home from "./Components/Home"
function App() {

  return (
    <div>
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<SignUp/>}/>
      <Route path="/home" element={<Home/>}/>
    </Routes>
  </BrowserRouter>
    </div>
  )
}

export default App

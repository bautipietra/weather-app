import { BrowserRouter, Route, Routes } from "react-router-dom"
import Landing from "./components/Landing/Landing"
import Nav from "./components/Nav/Nav"

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="*" element={<Landing></Landing>}></Route>
        </Routes>
      </div></BrowserRouter>
  )
}

export default App

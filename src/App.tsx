import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css'
import Home from './components/Home'
import Tasks from "./components/Tasks"

const App = () => {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/tasks" element = {<Tasks />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

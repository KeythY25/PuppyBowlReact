import { Routes, Route } from 'react-router-dom'
import './App.css'
import AllPlayer from './components/AllPlayers'
import SinglePlayer from './components/SinglePlayer'
import NewPlayerForm from './components/NewPlayerForm'
import NavBar from './components/NavBar'
function App() {
  return (
    <div id="container">
      <NavBar />
      <div id="main-section">
        <Routes>
          <Route path='/allPlayer' element={<AllPlayer/>}/>
          <Route path='/singlePlayer' element={<SinglePlayer/>}/>
          <Route path='/newPlayer' element={<NewPlayerForm/>}/>
        </Routes>
      </div>
    </div>
  )
  
}

export default App

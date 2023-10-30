import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import CampsDisplay from './pages/CampsDisplay'
import CampForm from './pages/CampForm copy'
import SingleCamp from './pages/SingleCamp'

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={ <CampsDisplay />  }  />
        <Route path="/camps/new" element={ <CampForm />  }  />
        {/* query, param, put it into context */}
        <Route path="/camps/:campId" element={ <SingleCamp />  }  />
      </Routes>
    </div>
  )
}

export default App

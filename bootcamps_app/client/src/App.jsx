import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import CampsDisplay from './pages/CampsDisplay'
import CampForm from './pages/CampForm'
import SingleCamp from './pages/SingleCamp'
import { useContext, useEffect } from 'react'
import axios from 'axios'
import { primaryContext } from './context/primaryContext'

function App() {
  // go get states data, put in context

  const { setStates, setCamps } = useContext(primaryContext);
  

  useEffect(() => {
    try {
      axios({
        method: "GET",
        url: "/server/states"
      }).then((response) => {
        // The states data should be in response.data
        setStates(response.data)
      })
    }catch (err) {
      console.error(err)
    }

    try {
      axios({
        method: "GET",
        url: "/server/camps"
      }).then((response) => {
        // The states data should be in response.data
        setCamps(response.data)
      })
    }catch (err) {
      console.error(err)
    }
  }, []);

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

import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import CampsDisplay from './pages/CampsDisplay'
import CampForm from './pages/CampForm'
import SingleCamp from './pages/SingleCamp'
import { useEffect } from 'react'
import axios from 'axios'

function App() {
  // go get states data, put in context

  

  useEffect(() => {
    try {

      axios({
        method: "GET",
        url: "/server/states"
      }).then((response) => {
        // The states data should be in response.data
        console.log(response.data);
      })

    }catch (err) {
      console.error(err)
    }

  }, [])

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

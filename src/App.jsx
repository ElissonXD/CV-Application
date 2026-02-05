import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Page from './components/Page'

function App() {
  const [data, setData] = useState({name: '', email: '', phone: ''})
  const [education, setEducation] = useState([]);
  const [professional, setProfessional] = useState([])

  function handleDatachange(key, value){
      const newData = {...data, [key]: value}
      setData(newData)
  }

  function handleEducationChange(newdata) {
      setEducation(newdata)
  }

  function handleProfessionalChange(newdata) {
      setProfessional(newdata)
  }

  return (
    <>
      <div className='App'>
        <Header />
        <Sidebar 
        data = {data}
        datachange={handleDatachange}
        eduinfo={education}
        educationChange={handleEducationChange}
        proinfo={professional}
        professionalChange={handleProfessionalChange}
        />

        <Page 
        data={data}
        eduinfo={education}
        profinfo={professional}
        />

      </div>
    </>
  )
}

export default App

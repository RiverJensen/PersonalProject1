import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { response } from 'express'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

axios.get('/song')
.then((response)=>{
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App initalSong = {response.data}/>
    </React.StrictMode>
  )
})

.catch((error) =>{
  console.log(error)
})